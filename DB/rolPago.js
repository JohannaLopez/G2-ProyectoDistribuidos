module.exports = (sequelize, DataTypes) => {
    const RolPago = sequelize.define(
      'RolPago',
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
        fecha: {
          type: DataTypes.DATE,
        },   
        enfermedad: {
          type: DataTypes.BOOLEAN,
        },
        maternidad: {
          type: DataTypes.BOOLEAN,
        },
        enf_mat: {
          type: DataTypes.BOOLEAN,
        },
        maternidad_dias: {
          type: DataTypes.INTEGER,
        }, 
        contrato_dias: {
          type: DataTypes.BOOLEAN,
        },
        desbloqueo_vacaciones: {
          type: DataTypes.BOOLEAN,
        },
        parametro_fondo_reserva: {
          type: DataTypes.DECIMAL(19, 2),
        },
        parametro_iess_personal: {
          type: DataTypes.DECIMAL(19, 2),
        },
        parametro_iess_dependiente: {
          type: DataTypes.DECIMAL(19, 2),
        },
        parametro_maternidad: {
          type: DataTypes.DECIMAL(19, 2),
        },
        parametro_sueldo_basico: {
          type: DataTypes.DECIMAL(19, 2),
        },
        sueldo: {
          type: DataTypes.DECIMAL(19, 2),
        },
        dias_laborados: {
          type: DataTypes.DECIMAL(19, 2),
        },
        sueldo_unificado: {
          type: DataTypes.DECIMAL(19, 2),
        },
        sobretiempo: {
          type: DataTypes.DECIMAL(19, 2),
        },
        bonificacion_produccion: {
          type: DataTypes.DECIMAL(19, 2),
        },
        otros_ingresos: {
          type: DataTypes.DECIMAL(19, 2),
        },
        vacaciones: {
          type: DataTypes.DECIMAL(19, 2),
        },
        vacaciones_pagadas: {
          type: DataTypes.DECIMAL(19, 2),
        },
        fondo_reserva: {
          type: DataTypes.DECIMAL(19, 2),
        },
        dts: {
          type: DataTypes.DECIMAL(19, 2),
        },
        dcs: {
          type: DataTypes.DECIMAL(19, 2),
        },
        total_ingresos: {
          type: DataTypes.DECIMAL(19, 2),
        },
        iess_personal: {
          type: DataTypes.DECIMAL(19, 2),
        },
        iess_dependiente: {
          type: DataTypes.DECIMAL(19, 2),
        },
        anticipo: {
          type: DataTypes.DECIMAL(19, 2),
        },
        otros_anticipos: {
          type: DataTypes.DECIMAL(19, 2),
        },
        iess_pq: {
          type: DataTypes.DECIMAL(19, 2),
        },
        iess_ph: {
          type: DataTypes.DECIMAL(19, 2),
        },
        comisariato: {
          type: DataTypes.DECIMAL(19, 2),
        },
        farmacia: {
          type: DataTypes.DECIMAL(19, 2),
        },
        genesis: {
          type: DataTypes.DECIMAL(19, 2),
        },
        seguro_medico: {
          type: DataTypes.DECIMAL(19, 2),
        },
        claro_equipo: {
          type: DataTypes.DECIMAL(19, 2),
        },
        claro_linea: {
          type: DataTypes.DECIMAL(19, 2),
        },
        prestamo_personal: {
          type: DataTypes.DECIMAL(19, 2),
        },
        descuento_facturas: {
          type: DataTypes.DECIMAL(19, 2),
        },
        pension_alimenticia: {
          type: DataTypes.DECIMAL(19, 2),
        },
        impuesto_larenta: {
          type: DataTypes.DECIMAL(19, 2),
        },
        descuento_dias_notrabajados: {
          type: DataTypes.DECIMAL(19, 2),
        },
        atrasos: {
          type: DataTypes.DECIMAL(19, 2),
        },
        multa: {
          type: DataTypes.DECIMAL(19, 2),
        },
        otros_descuentos: {
          type: DataTypes.DECIMAL(19, 2),
        },
        otros_descuentos_contribucion: {
          type: DataTypes.DECIMAL(19, 2),
        },
        total_egresos: {
          type: DataTypes.DECIMAL(19, 2),
        },
        total_recibir : {
          type: DataTypes.DECIMAL(19, 2),
        },
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },        
      },
      {
        tableName: 'rol_pago',
      },
    );  
    RolPago.associate = (models) => {
      RolPago.belongsTo(models.Empleado, {
        foreignKey: 'empleadoId',
      });        
      RolPago.belongsTo(models.Empresa, {
        foreignKey: 'empresaId',
      });
      RolPago.belongsTo(models.Area, {
        foreignKey: 'areaId',
      });     
    };      
    return RolPago;
  };

 