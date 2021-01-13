let db = require("../database/models/index");

module.exports = {
    list: function(req, res) {
        db.Movies.findAll()
            .then(function(movies) {
                res.render('moviesList', {movies:movies});
            })
    },
    detail: function(req, res) {
        db.Movies.findByPk(req.params.id, {
            include: [{association: "genres"}, {association: "actors"}]
        })
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
    },
    add: function(req, res) {
        db.Genres.findAll()
            .then(function(genres) {
                res.render('moviesCreate', {genres:genres});
            })
    },
    create: function(req, res) {
        db.Movies.create({
            title: req.body.title,
            rating: req.body.rating,
            length: req.body.length,
            release_date: req.body.release_date,
            awards: req.body.awards,
            genre_id: req.body.genre
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/movies');
    },
    edit: function(req, res) {
        let moviePetition = db.Movies.findByPk(req.params.id);

        let genresPetition = db.Genres.findAll();

        Promise.all([moviePetition, genresPetition])
            .then(function([movie, genres]) {
                res.render('moviesEdit', {movie:movie, genres:genres});
            });
    },
    saved: function(req, res) {
        db.Movies.update({
            title: req.body.title,
            rating: req.body.rating,
            length: req.body.length,
            release_date: req.body.release_date,
            awards: req.body.awards,
            genre_id: req.body.genre
        },
        {
            where: {
                id: req.params.id
            }
        });

        res.redirect('/movies/detail/' + req.params.id);
    },
    delete: function(req, res) {
        db.Movies.destroy({
            where: {
                id: req.params.id
            }
        });

        res.redirect('/movies');
    }
}