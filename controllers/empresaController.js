/* eslint-disable camelcase */
const _ = require('lodash');

const { validateRequest } = require('../helpers');

const db = require('../DB/index');

exports.getEmpresas = async (req, res) => {
  await validateRequest(req);
    try {      
      const sql_result = await db.Empresa.findAndCountAll();
      const empresas=sql_result.rows;           
      const response = {       
        count:sql_result.count,
        result:empresas,
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

  exports.createEmpresa = async (req, res) => {
    await validateRequest(req);
    try {
      const {
        nombre,
      } = req.body; 
      const empresa = await db.Empresa.create({          
        nombre,          
        createdAt:Date.now(),      
      });      
            
      const response = {
        mensaje: 'Empresa registrada exitosamente.',
        result: empresa,        
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
  
