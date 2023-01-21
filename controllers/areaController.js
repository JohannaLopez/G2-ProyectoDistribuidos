/* eslint-disable camelcase */
const _ = require('lodash');

const { validateRequest } = require('../helpers');

const db = require('../DB/index');

exports.getAreas = async (req, res) => {
  await validateRequest(req);
    try {      
      const sql_result = await db.Area.findAndCountAll({
        order: [          
          ['prioridad', 'ASC'],
      ],       
      });
      const areas=sql_result.rows;           
      const response = {       
        count:sql_result.count,
        result:areas,
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

  exports.createArea = async (req, res) => {
    await validateRequest(req);
    try {
      const {
        nombre,
      } = req.body; 
      const area = await db.Area.create({          
        nombre,          
        createdAt:Date.now(),      
      });      
            
      const response = {
        mensaje: 'Empresa registrada exitosamente.',
        result: area,        
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
  
