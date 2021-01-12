module.exports = (sequelize, dataTypes) => {
    let alias = "Movies";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id: {
            type: dataTypes.INTEGER
        },
        release_date: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "movies",
        timetstamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }

    const Movie = sequelize.define(alias, cols, config);

    Movie.associate = function(models) {
        Movie.belongsTo(models.Genres, {
            as: "genres",
            foreignKey: "genre_id"
        });

        Movie.belongsToMany(models.Actors, {
            as: "actors",
            through: "actor_movie",
            foreignKey: "movie:id",
            otherKey: "actor_id",
            timetstamps: false
        });
    }

    return Movie;
}