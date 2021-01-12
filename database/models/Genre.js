module.exports = (sequelize, dataTypes) => {
    let alias = "Genres";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "genres",
        timestamps: false
    };

    const Genre = sequelize.define(alias, cols, config);

    return Genre;
}