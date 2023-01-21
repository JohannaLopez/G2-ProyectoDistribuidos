const express = require('express');
const router = express.Router();
const multer = require("multer");
const uploadcontroller=require('../controllers/uploadController')
const { AsyncWrapper } = require('../helpers');

const upload = multer({ dest: "tempFiles/" });

router.post("/", upload.array("files"), AsyncWrapper(uploadcontroller.upload));

module.exports = router;
