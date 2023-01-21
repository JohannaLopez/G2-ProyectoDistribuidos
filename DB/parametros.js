module.exports = (sequelize, DataTypes) => {
    const Parametros = sequelize.define(
      'Parametros',
      {       
        nombre: {
            type: DataTypes.STRING,
        },              
        valor: {
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
        tableName: 'parametros',
      },
    );     
    return Parametros;
  };

 