module.exports = (sequelize, DataTypes) => {
    const TipoUsuario = sequelize.define(
      'TipoUsuario',
      {       
        nombre: {
            type: DataTypes.STRING,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'tipo_usuario',
      },
    );     
    return TipoUsuario;
  };

 