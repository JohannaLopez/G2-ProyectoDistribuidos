const express = require('express');
const router = express.Router();
const rolPagocontroller=require('../controllers/rolPagoController')
const passport = require('../middlewares/passport');
const { AsyncWrapper } = require('../helpers');

router.post(
  '/guardar', 
  //passport,
  AsyncWrapper(rolPagocontroller.guardarRolEmpleado),
);

router.get(
  '/', 
  //passport,
  AsyncWrapper(rolPagocontroller.getRolEmpleado),
);

router.get(
  '/empleados', 
  //passport,
  AsyncWrapper(rolPagocontroller.getRolesEmpleados),
);

router.get(
  '/envioCorreo', 
  //passport,
  AsyncWrapper(rolPagocontroller.envioCorreo),
);

router.get(
  '/envioCorreoMasivo', 
  //passport,
  AsyncWrapper(rolPagocontroller.envioCorreoMasivo),
);

module.exports = router;