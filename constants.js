require('dotenv').config();

module.exports = {
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
  MYSQL_USER: process.env.MYSQL_USER,
  MYSQL_ROOT_PASSWORD: process.env.MYSQL_ROOT_PASSWORD,
  MYSQL_HOSTNAME: process.env.MYSQL_HOSTNAME,
  MYSQL_ROOT_PORT: process.env.MYSQL_ROOT_PORT,  
};
