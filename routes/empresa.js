const express = require('express');
const router = express.Router();
const empresacontroller=require('../controllers/empresaController')
const passport = require('../middlewares/passport');
const { AsyncWrapper } = require('../helpers');

router.post(
  '/create', 
  //passport,
  AsyncWrapper(empresacontroller.createEmpresa),
);

router.get(
  '/all', 
  //passport,
  AsyncWrapper(empresacontroller.getEmpresas),
);

module.exports = router;