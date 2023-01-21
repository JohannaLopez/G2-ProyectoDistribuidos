module.exports = (sequelize, DataTypes) => {
    const Empleado = sequelize.define(
      'Empleado',
      {  
        apellido_paterno: {
            type: DataTypes.STRING,
        },       
        apellido_materno: {
            type: DataTypes.STRING,
        },  
        primer_nombre: {
            type: DataTypes.STRING,
        }, 
        segundo_nombre: {
            type: DataTypes.STRING,
        }, 
        fecha_nacimiento: {
          type: DataTypes.DATE,
        },
        estado_civil: {
          type: DataTypes.STRING,
        },
        direccion: {
          type: DataTypes.STRING,
        }, 
        telefono: {
          type: DataTypes.STRING,
        },
        tipo_identificacion: {
          type: DataTypes.STRING,
        },
        numero_identificacion: {
          type: DataTypes.STRING,
        },
        sexo: {
          type: DataTypes.STRING,
        },
        hijos: {
          type: DataTypes.INTEGER,
        },
        sueldo: {
          type: DataTypes.DECIMAL(19, 2),
        },
        sueldo_quincena: {
          type: DataTypes.DECIMAL(19, 2),
        },
        cargo: {
          type: DataTypes.STRING,
        },
        fecha_ingreso: {
          type: DataTypes.DATE,
        },
        fecha_salida: {
          type: DataTypes.DATE,
        },
        motivo_salida: {
          type: DataTypes.STRING,
        },
        hora_entrada: {
          type: DataTypes.STRING,
        },
        hora_salida: {
          type: DataTypes.STRING,
        },
        almuerzo_salida: {
          type: DataTypes.STRING,
        },
        almuerzo_entrada: {
          type: DataTypes.STRING,
        },
        numero_afiliado: {
          type: DataTypes.STRING,
        },
        subactividad: {
          type: DataTypes.STRING,
        },
        tipo_pago: {
          type: DataTypes.STRING,
        },
        banco_codigo: {
          type: DataTypes.INTEGER,
        },
        banco: {
          type: DataTypes.STRING,
        },
        cuenta: {
          type: DataTypes.STRING,
        },
        tipo_cuenta: {
          type: DataTypes.STRING,
        },
        pago_fondo_reserva: {
          type: DataTypes.BOOLEAN,
        },
        pago_dcs: {
          type: DataTypes.BOOLEAN,
        },
        pago_dts: {
          type: DataTypes.BOOLEAN,
        }, 
        iess_dependiente: {
          type: DataTypes.BOOLEAN,
        },         
        estado: {
          type: DataTypes.BOOLEAN,
        },        
        empresaId: {
          type: DataTypes.INTEGER,
        },
        areaId: {
          type: DataTypes.INTEGER,
        },
        correo: {
          type: DataTypes.STRING,
        },
        envio_correo: {
          type: DataTypes.BOOLEAN,
        },       
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'empleado',
      },
    );  
    Empleado.associate = (models) => {
      Empleado.belongsTo(models.Empresa, {
        foreignKey: 'empresaId',
      });
      Empleado.belongsTo(models.Area, {
        foreignKey: 'areaId',
      });
      Empleado.hasMany(models.Quincena);      
    }; 
    return Empleado;
  };

 