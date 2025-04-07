require('dotenv').config();  // Cargar las variables de entorno

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST || 'localhost',
  user: process.env.MYSQL_ADDON_USER || 'root',
  password: process.env.MYSQL_ADDON_PASSWORD || '',
  database: process.env.MYSQL_ADDON_DB || 'bd_biblioteca',
  port: process.env.MYSQL_ADDON_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
});

async function testConnection() {
  try {
    // Mostrar los valores de las variables de entorno
    console.log('Conectando con la base de datos usando los siguientes parámetros:');
    console.log('Host:', process.env.MYSQL_ADDON_HOST);
    console.log('Usuario:', process.env.MYSQL_ADDON_USER);
    console.log('Base de datos:', process.env.MYSQL_ADDON_DB);
    console.log('Puerto:', process.env.MYSQL_ADDON_PORT);

    // Intentar la conexión
    const connection = await pool.getConnection();
    console.log('Conexión exitosa a la base de datos');
    connection.release();
  } catch (err) {
    console.error('Error de conexión a la base de datos:', err);
  }
}

testConnection();

module.exports = pool;
