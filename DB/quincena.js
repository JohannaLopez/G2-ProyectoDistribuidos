module.exports = (sequelize, DataTypes) => {
    const Quincena = sequelize.define(
      'Quincena',
      {       
        empleadoId: {
            type: DataTypes.INTEGER,
        },
        empresaId: {
          type: DataTypes.INTEGER,
        },
        areaId: {
          type: DataTypes.INTEGER,
        },
        valor: {
          type: DataTypes.DECIMAL(19, 2),
        },
        fecha: {
          type: DataTypes.DATE,
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'quincena',
      },
    );
    Quincena.associate = (models) => {
      Quincena.belongsTo(models.Empleado, {
        foreignKey: 'empleadoId',
      });        
      Quincena.belongsTo(models.Empresa, {
        foreignKey: 'empresaId',
      });
      Quincena.belongsTo(models.Area, {
        foreignKey: 'areaId',
      });     
    };   
    
    return Quincena;
  };

 