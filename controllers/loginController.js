/* eslint-disable no-console */
const _ = require('lodash');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { validateRequest } = require('../helpers');

const db = require('../DB/index');

/**
 * Funcion encargada del inicio de sesion de todos los usuarios: SuperAdmin, Administrador Plataforma,
 * Donador. Retorna un token que se utilizara en la llamada de todos los endpoints
 * @param  {*} req
 * @param  {*} res
 * @return {Object} response
 */
exports.login = async (req, res) => {
  await validateRequest(req);
  try {
    const { nombre_usuario, password } = req.body;
    const unAuthorizedResponse = 'Credenciales incorrectas.';

    const User = await db.Usuario.findOne({
      where: {
        nombre_usuario,
      },
      include: [{
        model: db.TipoUsuario,          
      }],
      attributes: { exclude: ['password'] },
    });    
    // User does not exists
    if (!User) {
      return res.status(401).send(unAuthorizedResponse);
    }

    // Get user password
    const Password = await db.Usuario.findOne({
      where: {
        id: User.id,
      },
      
    });    
    
    // Verify password
    if (!bcrypt.compareSync(password, Password.password)) {
        console.log("contraseña incorrecta")
      return res.status(401).send(unAuthorizedResponse);
    }

    // Make JWT
    const expiresIn = 28800;    
    //const expiresIn = 3600;    
    const user = User.get({ plain: true });
    const token = jwt.sign(user, 'secret', {
      expiresIn,
    });
    
    const result = {
      usuario:{id: User.id,
      nombre_usuario:User.nombre_usuario,
      nombre:User.nombre,
      tipo_usuarioId:User.TipoUsuario.id,
      tipo_usuarioNombre:User.TipoUsuario.nombre,
      createdAt: User.createdAt,
      updatedAt: User.updatedAt, },
      token,
    };

    return res.send({
      result,
      expiresIn,
      tokenType: 'Bearer',
    });
  } catch (error) {
    console.log('ERROR', error);
    const responseError = {
      message: 'Something bad happened!',
      error: error.stack,
    };
    return res.status(500).send(JSON.stringify(responseError));
  }
};