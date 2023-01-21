module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define(
      'Usuario',
      {       
        nombre_usuario: {
            type: DataTypes.STRING,
        },
        nombre: {
          type: DataTypes.STRING,
        },              
        password: {
          type: DataTypes.STRING,
        },
        tipo_usuarioId:{
          type: DataTypes.INTEGER,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'usuario',
      },
    ); 
    Usuario.associate = (models) => {
      Usuario.belongsTo(models.TipoUsuario, {
        foreignKey: 'tipo_usuarioId',
      });      
    };     
    return Usuario;
  };

 