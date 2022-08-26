module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        nombre: {
            type: dataTypes.STRING(120),
            allowNull: false
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        categoria_id: {
            type: dataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        precio: {
            type: dataTypes.DECIMAL(12,2),
            allowNull: false
        },
        imagen: {
            type: dataTypes.STRING,
            allowNull: false
        }
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
            foreignKey: 'categoria_id'
        });

        Producto.belongsToMany(
            models.Talle, 
            {
            as: 'talles',
            through: 'producto_talle',
            foreignKey: 'producto_id',
            otherKey: 'talle_id',
            timestamps: false
            }
        )
    };



    return Producto
};