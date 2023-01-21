/* eslint-disable camelcase */
const _ = require('lodash');

const { validateRequest } = require('../helpers');

const db = require('../DB/index');
const { query } = require('express');

exports.getEmpleadosQuincena = async (req, res) => {
  await validateRequest(req);
    try {  
      const { estado_consulta,fecha } = req.query  
      let query = {
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
      for (const empleado of empleados) { 
        empleado.dataValues.nombre_completo=empleado.apellido_paterno+" "+empleado.apellido_materno +" "+ empleado.primer_nombre +" "+ empleado.segundo_nombre;
        query = {
          where: {               
            empleadoId:empleado.id,
            fecha:Date.parse(fecha),   
          },              
        };
        let miquincena = await db.Quincena.findOne(query);        
        if (miquincena==null) {            
          empleado.dataValues.quincenaValor= empleado.dataValues.sueldo_quincena;
          empleado.dataValues.quincenaFecha= fecha;
        }else{            
          empleado.dataValues.quincenaId=miquincena.id;
          empleado.dataValues.quincenaValor=miquincena.valor;            
          empleado.dataValues.quincenaFecha= miquincena.fecha;
        }        
      }
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

  exports.getQuincenaEmpleado = async (req, res) => {
    await validateRequest(req);
      try {  
        const { estado_consulta,fecha,empleadoId } = req.query          
        let query = {
          where: { 
            empleadoId,
            fecha:Date.parse(fecha),             
          },            
        };
        const sql_result = await db.Quincena.findOne(query);              
        const response = {                 
          result:sql_result,
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

  

  
  exports.guardarQuincena = async (req, res) => {
    await validateRequest(req);
    try {
        const empleados= req.body;    
        const quincenasNEWS = empleados.filter((item) => !item.quincenaId ) 
        const quincenasUpdate = empleados.filter((item) => item.quincenaId )          
        for (const quincena of quincenasNEWS) {           
          const miquincena = await db.Quincena.create({
            empleadoId:quincena.id,
            empresaId:quincena.empresaId,
            areaId: quincena.areaId,
            valor:quincena.quincenaValor,
            fecha: Date.parse(quincena.quincenaFecha),
            createdAt:Date.now(),
          });    
        }
        for (const quincena of quincenasUpdate) {         
          const miquincena = await db.Quincena.update({          
            valor:quincena.quincenaValor,
            empresaId:quincena.empresaId,
            areaId: quincena.areaId,
            fecha:Date.parse(quincena.quincenaFecha),
            updatedAt: Date.now(),
            },{
            where: {
              id: quincena.quincenaId,
            },});    
        }
        const response = {
          mensaje: 'Lista registrada exitosamente.',
          result: null,        
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

  exports.getQuincenaEmpleados = async (req, res) => {
    await validateRequest(req);
      try {  
        const { estado_consulta,fecha } = req.query          
        let query = {
          where: {             
            fecha:Date.parse(fecha),             
          },
          include: [{
            model: db.Empleado,          
          },{
            model: db.Empresa,          
          },{
            model: db.Area,          
          }],
          order: [         
            [db.Empresa, 'id', 'ASC'],
            [db.Area, 'prioridad', 'ASC'],
            [db.Empleado,'apellido_paterno', 'ASC'],       
            [db.Empleado,'apellido_materno', 'ASC'],
            [db.Empleado,'primer_nombre', 'ASC'], 
            [db.Empleado,'segundo_nombre', 'ASC'], 
          ]              
        };
        const sql_result = await db.Quincena.findAndCountAll(query);              
        const response = {
          count:sql_result.count,
          result:sql_result.rows,
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

  