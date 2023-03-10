const _ = require('lodash');
const jwt = require('jsonwebtoken');

const db = require('../DB/index');

const JWT_SECRET = 'secret';

const authenticateToken = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
      return res.sendStatus(401);
    }
    const decode = jwt.verify(token, JWT_SECRET);
    const User = await db.Usuario.findOne({
      where: {
        id: decode.id,
      },
    });
    const data = {
      id: User.id,      
    };
    if (_.isEmpty(User)) {
      return res.status(404).send('No autorizado.');
    }    
    req.User = data;
    return next();
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('ERROR', error);
    const responseError = {
      message: 'Token expirado',
      error: error.stack,
    };
    return res.status(401).send(JSON.stringify(responseError));
  }
};

module.exports = authenticateToken;
