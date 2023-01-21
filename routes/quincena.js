const express = require('express');
const router = express.Router();
const quincenacontroller=require('../controllers/quincenaController')
const passport = require('../middlewares/passport');
const { AsyncWrapper } = require('../helpers');

router.post(
  '/guardar',
  //passport, 
  AsyncWrapper(quincenacontroller.guardarQuincena),
);

router.put(
  '/update/:empleadoId',  
  //passport,
  AsyncWrapper(quincenacontroller.updateEmpleado),
);

router.get(
  '/', 
  //passport,
  AsyncWrapper(quincenacontroller.getEmpleadosQuincena),
);


router.get(
  '/empleado', 
  //passport,
  AsyncWrapper(quincenacontroller.getQuincenaEmpleado),
);

router.get(
  '/empleados', 
  //passport,
  AsyncWrapper(quincenacontroller.getQuincenaEmpleados),
);

module.exports = router;