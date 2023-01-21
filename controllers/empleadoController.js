/* eslint-disable camelcase */
const _ = require('lodash');

const { validateRequest } = require('../helpers');

const db = require('../DB/index');
const { query } = require('express');

const {
  parseDataEmpleadoRol
} = require('./helpers');

exports.getEmpleados = async (req, res) => {
  await validateRequest(req);
    try {  
      const { estado_consulta } = req.query        
      const query = {
        where: { 
          estado:estado_consulta,      
        },  
        include: [{
          model: db.Empresa,          
        },{
          model: db.Area,          
        }],
        order: [         
          [db.Empresa, 'id', 'ASC'],
          [db.Area, 'prioridad', 'ASC'],
          ['apellido_paterno', 'ASC'],       
          ['apellido_materno', 'ASC'],
          ['primer_nombre', 'ASC'], 
          ['segundo_nombre', 'ASC'], 
        ]  
      };
      const sql_result = await db.Empleado.findAndCountAll(query);      
      const empleados=sql_result.rows;      
      empleados.forEach(empleado=>{
        empleado.dataValues.nombre_completo=empleado.apellido_paterno+" "+empleado.apellido_materno +" "+ empleado.primer_nombre +" "+ empleado.segundo_nombre;
      }
      );      
      const response = {       
        count:sql_result.count,
        result:empleados,
      };
      return res.status(200).send(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERROR', error);
      const responseError = {
        message: 'Something bad happened!',
        error: error.stack,
      };
      return res.status(500).send(JSON.stringify(responseError));
    }
  };
 

  exports.createEmpleado = async (req, res) => {
    await validateRequest(req);
    try {
      const {
        apellido_paterno,       
        apellido_materno,  
        primer_nombre, 
        segundo_nombre, 
        fecha_nacimiento,
        estado_civil,
        direccion, 
        telefono,
        tipo_identificacion,
        numero_identificacion,
        sexo,
        hijos,
        sueldo,
        sueldo_quincena,
        cargo,
        fecha_ingreso,
        fecha_salida,
        motivo_salida,
        hora_entrada,
        hora_salida,
        almuerzo_salida,
        almuerzo_entrada,
        numero_afiliado,
        subactividad,
        tipo_pago,
        banco_codigo,
        banco,
        cuenta,
        tipo_cuenta,
        pago_fondo_reserva,
        pago_dcs,
        pago_dts,
        iess_dependiente,         
        empresaId,
        areaId,
        correo,
        envio_correo,

      } = req.body;
    
        const query = {
          apellido_paterno,       
          apellido_materno,  
          primer_nombre, 
          segundo_nombre, 
          fecha_nacimiento,
          estado_civil,
          direccion, 
          telefono,
          tipo_identificacion,
          numero_identificacion,
          sexo,
          hijos,
          sueldo,
          sueldo_quincena,
          cargo,
          fecha_ingreso,
          ...((fecha_salida!=='0000-00-00' &&
              !_.isEmpty(fecha_salida)&&
              !_.isNull(fecha_salida) 
              ) ? { fecha_salida } : {}),           
          motivo_salida,
          hora_entrada,
          hora_salida,
          almuerzo_salida,
          almuerzo_entrada,
          numero_afiliado,
          subactividad,
          tipo_pago,
          banco_codigo,
          banco,
          cuenta,
          tipo_cuenta,
          pago_fondo_reserva,
          pago_dcs,
          pago_dts, 
          iess_dependiente,
          estado:false,  
          empresaId,
          areaId,
          createdAt:Date.now(),
          correo,  
          envio_correo,    
        };
        
        
        const existeEmpleado = await db.Empleado.findOne({where: { 
          apellido_paterno,       
          apellido_materno,  
          primer_nombre, 
          segundo_nombre, 
          estado:false,
          empresaId,
          areaId,           
          }}); 
        console.log("Verificar Ingreso Empleado: "+existeEmpleado);
        let miempleado=null;
        if (existeEmpleado===null || existeEmpleado===undefined){       
          miempleado = await db.Empleado.create(query);  
        }else{
          return res.status(500).send({ message: 'Something bad happened!',error:'Verificar si ya esta creado'})
        }    
            
      const response = {
        mensaje: 'Lista registrada exitosamente.',
        result: miempleado,        
      };
      return res.send(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERROR', error);
      const responseError = {
        message: 'Something bad happened!',
        error: error.stack,
      };
      return res.status(500).send(JSON.stringify(responseError));
    }
  };


  exports.updateEmpleado = async (req, res) => {
    await validateRequest(req);
    try {      
      const { empleadoId } = req.params;      
      const {
        apellido_paterno,       
        apellido_materno,  
        primer_nombre, 
        segundo_nombre, 
        fecha_nacimiento,
        estado_civil,
        direccion, 
        telefono,
        tipo_identificacion,
        numero_identificacion,
        sexo,
        hijos,
        sueldo,
        sueldo_quincena,
        cargo,
        fecha_ingreso,
        fecha_salida,
        motivo_salida,
        hora_entrada,
        hora_salida,
        almuerzo_salida,
        almuerzo_entrada,
        numero_afiliado,
        subactividad,
        tipo_pago,
        banco_codigo,
        banco,
        cuenta,
        tipo_cuenta,
        pago_fondo_reserva,
        pago_dcs,
        pago_dts, 
        iess_dependiente,
        estado,  
        empresaId,
        areaId,
        correo,
        envio_correo,
      } = req.body;
     
  
      const response = {
        result: [],
      };
      
        const update = {
          apellido_paterno,       
          apellido_materno,  
          primer_nombre, 
          segundo_nombre, 
          fecha_nacimiento,
          estado_civil,
          direccion, 
          telefono,
          tipo_identificacion,
          numero_identificacion,
          sexo,
          hijos,
          sueldo,
          sueldo_quincena,
          cargo,
          fecha_ingreso,
          ...((fecha_salida!=='0000-00-00' &&
              !_.isEmpty(fecha_salida)&&
              !_.isNull(fecha_salida) 
              ) ? { fecha_salida } : {}),           
          motivo_salida,
          hora_entrada,
          hora_salida,
          almuerzo_salida,
          almuerzo_entrada,
          numero_afiliado,
          subactividad,
          tipo_pago,
          banco_codigo,
          banco,
          cuenta,
          tipo_cuenta,
          pago_fondo_reserva,
          pago_dcs,
          pago_dts, 
          iess_dependiente,
          estado,  
          empresaId,
          areaId,
          updatedAt: Date.now(),
          correo,
          envio_correo,
        };
        const miempleado = await db.Empleado.update(update, {
          where: { id: empleadoId},
        });        
        response.mensaje = 'Informacion del animal actualizada.';
        response.result = miempleado;
      
      return res.send(response);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('ERROR', error);
      const responseError = {
        message: 'Something bad happened!',
        error: error.stack,
      };
      return res.status(500).send(JSON.stringify(responseError));
    }
  };
  
