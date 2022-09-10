module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto'; 
    let cols = {
        id_producto: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL(12,2),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        },

        fk_id_categoria: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },

    };
    let config = {
        timestamps: false,
        tableName: 'productos',
        freezeTableName:true
    }
    const Producto = sequelize.define(alias,cols,config);

    
    Producto.associate = models => {
        Producto.belongsTo(models.Categoria, {
            as: 'categoria',
            foreignKey: 'fk_id_categoria'
        });

        Producto.belongsToMany(
            models.Talle, 
            {
            as: 'talles',
            through: 'producto_talle',
            foreignKey: 'fk_id_producto',
            otherKey: 'fk_id_talle',
            timestamps: false
            }
        )
    };



    return Producto
};