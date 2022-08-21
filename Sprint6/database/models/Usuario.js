module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'; 
    let cols = {
        id: {
            type: dataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        
        userNombre: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        
        userApellido: {
            type: dataTypes.STRING(80),
            allowNull: false
        },
        userEmail: {
            type: dataTypes.STRING(60),
            allowNull: false
        },

        userPassword: {
            type: dataTypes.STRING,
            allowNull: false
        },

        userAvatar: {
            type: dataTypes.,
            allowNull: true
        },

    };
    let config = {
        timestamps: false,
        tableName: 'usuarios',
        freezeTableName:true
    }
    const Usuario = sequelize.define(alias,cols,config);

    return Usuario
};