const mysql = require('mysql2/promise');

// Configuración para Clever Cloud (usa sus variables automáticas)
const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST || 'localhost',
  user: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  database: process.env.MYSQL_ADDON_DB || 'bd_biblioteca',
  port: process.env.MYSQL_ADDON_PORT || 3306, // Clever usa 3366, local 3306
  waitForConnections: true,
  connectionLimit: 10,
  ssl: process.env.MYSQL_ADDON_HOST ? { rejectUnauthorized: false } : null
});

module.exports = pool;