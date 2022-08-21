module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoTalle'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        producto_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,

            references: {
                model: 'Producto',
                key: 'id'
            }
        },
        
        talle_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,

            references: {
                model: 'Talle',
                key: 'id'
            }
        }
        
        
    };
    let config = {
        timestamps: false,
        tableName: 'producto_talle',
        freezeTableName:true
    }
    const ProductoTalle = sequelize.define(alias,cols,config);

    
    ProductoTalle.associate = models => {
        ProductoTalle.belongsTo(models.Producto, {
            as: 'productos',
            foreignKey: 'producto_id'
        });

        ProductoTalle.belongsTo(models.Talle, {
            as: 'talles',
            foreignKey: 'talle_id'
        });

        
    };



    return ProductoTalle
};