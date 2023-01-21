require('dotenv').config();

const cors = require('cors');
const express = require('express');

const app = express();
app.use(express.json({limit: '100mb'}));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/login', require('./routes/login'));
app.use('/empleado', require('./routes/empleado'));
app.use('/empresa', require('./routes/empresa'));
app.use('/ingresoegreso', require('./routes/ingresoegreso'));
app.use('/quincena', require('./routes/quincena'));
app.use('/rol_pago', require('./routes/rolPago'));
app.use('/area', require('./routes/area'));
app.use('/parametros', require('./routes/parametros'));
app.use('/upload', require('./routes/upload'));


module.exports = app;