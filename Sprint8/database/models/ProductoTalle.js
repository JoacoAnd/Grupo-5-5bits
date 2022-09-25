module.exports = (sequelize, dataTypes) => {
    let alias = 'ProductoTalle'; 
    let cols = {
        id_producto_talle: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        fk_id_producto: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,

            references: {
                model: 'Producto',
                key: 'id_prducto'
            }
        },
        
        fk_id_talle: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false,

            references: {
                model: 'Talle',
                key: 'id_talle'
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
            foreignKey: 'fk_id_producto'
        });

        ProductoTalle.belongsTo(models.Talle, {
            as: 'talles',
            foreignKey: 'fk_id_talle'
        });

        
    };



    return ProductoTalle
};