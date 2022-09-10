module.exports = (sequelize, dataTypes) => {
    let alias = 'Talle';
    let cols = {
        id_talle: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },

        talle: {
            type: dataTypes.STRING(5),
            allowNull: false
        }

    };
    let config = {
        timestamps: false,
        tableName: 'talles',
        freezeTableName: true
    }
    const Talle = sequelize.define(alias, cols, config);

    Talle.associate = models => {

        Talle.belongsToMany(
            models.Producto,
            {
                as: 'productos',
                through: 'producto_talle',
                foreignKey: 'fk_id_talle',
                otherKey: 'fk_id_producto',
                timestamps: false
            }
        )

    };


    return Talle
};