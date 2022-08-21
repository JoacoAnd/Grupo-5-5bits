module.exports = (sequelize, dataTypes) => {
    let alias = 'Talle'; 
    let cols = {
        id: {
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
        freezeTableName:true
    }
    const Categoria = sequelize.define(alias,cols,config);

    
    Categoria.associate = models => {
        
        Talle.belongsToMany(
            models.Producto, 
            {as: 'productoss',
            through: 'producto_talle',
            foreignKey: 'talle_id',
            otherKey: 'producto_id',
            timestamps: false
            }
        )

    };


    return Talle
};