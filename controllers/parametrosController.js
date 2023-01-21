/* eslint-disable camelcase */
const _ = require('lodash');

const { validateRequest } = require('../helpers');

const db = require('../DB/index');

exports.getParametros = async (req, res) => {
  await validateRequest(req);
    try {      
      const sql_result = await db.Parametros.findAndCountAll({
        
      });
      const parametros=sql_result.rows;           
      const response = {       
        count:sql_result.count,
        result:parametros,
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
  
