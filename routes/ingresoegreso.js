const express = require('express');
const router = express.Router();
const ingresoegresocontroller=require('../controllers/ingresoegresoController')
const { AsyncWrapper } = require('../helpers');

router.post(
  '/create', 
  AsyncWrapper(ingresoegresocontroller.createEmpresa),
);

router.get(
  '/all', 
  AsyncWrapper(ingresoegresocontroller.getIngresoEgreso),
);

module.exports = router;