const express = require('express');
const router = express.Router();
const areacontroller=require('../controllers/areaController')
const passport = require('../middlewares/passport');
const { AsyncWrapper } = require('../helpers');

router.post(
  '/create', 
  passport,
  AsyncWrapper(areacontroller.createArea),
);

router.get(
  '/all', 
  //passport,
  AsyncWrapper(areacontroller.getAreas),
);

module.exports = router;