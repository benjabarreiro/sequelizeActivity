let db = require("../database/models/index");

module.exports = {
    list: function(req, res) {
        db.Movies.findAll()
            .then(function(movies) {
                res.render('moviesList', {movies:movies});
            })
    },
    detail: function(req, res) {
        db.Movies.findByPk(req.params.id)
            .then(function(movie) {
                res.render('moviesDetail', {movie:movie});
            })
    },
    new: function(req, res) {
        db.Movies.findAll({
            order: [
                ["release_date", "DESC"]
            ]
        })
            .then(function(movies) {
                res.render("moviesNew", {movies:movies});
            })
    },
    recommended: function(req, res) {
        db.Movies.findAll({
            where: {
                rating: {[db.Sequelize.Op.gt] : 8}
            },
            order: [
                ["rating", "DESC"]
            ]
        })
            .then(function(movies) {
                res.render("moviesRecommended", {movies:movies});
            })
    }
}