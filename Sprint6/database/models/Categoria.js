module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria'; 
    let cols = {
        id_categoria: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        categoria: {
            type: dataTypes.STRING(100),
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
            foreignKey: 'fk_id_categoria'
        });

    };


    return Categoria
};