const express = require('express');
const router = express.Router();
const empleadocontroller=require('../controllers/empleadoController');
const passport = require('../middlewares/passport');
const { AsyncWrapper } = require('../helpers');

router.post(
  '/create',   
  //passport,
  AsyncWrapper(empleadocontroller.createEmpleado),
);

router.put(
  '/update/:empleadoId',  
  //passport,
  AsyncWrapper(empleadocontroller.updateEmpleado),
);

router.get(
  '/all', 
  //passport,
  AsyncWrapper(empleadocontroller.getEmpleados),
);


module.exports = router;