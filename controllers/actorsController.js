let db = require("../database/models/index");

module.exports = {
    list: function(req, res) {
        db.Actors.findAll()
            .then(function(actors) {
                res.render('actorsList', {actors:actors});
            })
    },
    detail: function(req, res) {
        db.Actors.findByPk(req.params.id)
            .then(function(actor) {
                res.render('actorsDetail', {actor:actor});
            })
    },
    add: function(req, res) {
        res.render('actorsCreate');
    },
    create: function(req, res) {
        db.Actors.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/actors');
    },
    edit: function(req, res) {
        db.Actors.findByPk(req.params.id)
            .then(function(actor) {
                res.render('actorsEdit', {actor:actor});
            });
    },
    saved: function(req, res) {
        db.Actors.update({
            first_name: req.body.first_name,
            last_name: req.body.last_name
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/actors/detail/' + req.params.id);
    },
    delete: function(req, res) {
        db.Actors.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/actors');
    }
}