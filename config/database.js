const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST || 'localhost',
  user: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  database: process.env.MYSQL_ADDON_DB || 'bd_biblioteca',
  port: process.env.MYSQL_ADDON_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  ssl: process.env.MYSQL_ADDON_HOST ? { 
    rejectUnauthorized: true, 
    ca: process.env.MYSQL_ADDON_CA 
  } : null
});

module.exports = pool;