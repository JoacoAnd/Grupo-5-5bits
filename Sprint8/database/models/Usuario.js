module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuario'; 
    let cols = {
        id_usuario: {
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
            allowNull: false,
            unique: true
        },

        userPassword: {
            type: dataTypes.STRING,
            allowNull: false
        },

        userAvatar: {
            type: dataTypes.STRING,
            allowNull: true
        },
        userRol: {
            type: dataTypes.STRING,
            allowNull: true,
            defaultValue: "user"
        }
    };
    let config = {
        timestamps: false,
        tableName: 'usuarios',
        freezeTableName:true
    }
    const Usuario = sequelize.define(alias,cols,config);

    return Usuario
};