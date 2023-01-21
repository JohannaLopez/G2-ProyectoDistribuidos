const express = require('express');
const router = express.Router();
const parametroscontroller=require('../controllers/parametrosController')
const passport = require('../middlewares/passport');
const { AsyncWrapper } = require('../helpers');


router.get(
  '/', 
  //passport,
  AsyncWrapper(parametroscontroller.getParametros),
);

module.exports = router;