module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        categoria: {
            type: dataTypes.STRING(120),
            allowNull: false
        }        
        
    };
    let config = {
        timestamps: false,
        tableName: 'categorias',
        freezeTableName:true
    }
    const Categoria = sequelize.define(alias,cols,config);

    
    Categoria.associate = models => {
        Categoria.hasMany(models.Producto, {
            as: 'productos',
            foreignKey: 'categoria_id'
        });

    };


    return Categoria
};