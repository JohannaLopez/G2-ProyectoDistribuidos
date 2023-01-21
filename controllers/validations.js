const { body, param } = require('express-validator');


/* Validaciones para Usuarios */
module.exports.login = [
  body('nombre_usuario')
    .exists()
    .isString()
    .withMessage('Es necesario nombre usuario'),
  body('password')
    .exists()
    .isString()
    .withMessage('Es necesario contrasena'),
];