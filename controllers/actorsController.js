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
    }
}