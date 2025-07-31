require('dotenv').config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  user: process.env.DB_USER || 'crmuser',
  password: process.env.DB_PASSWORD || 'crmpassword',
  database: process.env.DB_NAME || 'crm',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Función para reintentar conexión a la base de datos
const waitForDB = async (retries = 10, delay = 2000) => {
  while (retries) {
    try {
      const connection = await pool.getConnection();
      console.log(` yes Conectado aaaaaa MySQL en ${process.env.DB_HOST}:${process.env.DB_PORT}`);
      connection.release();
      break; // Conexión exitosa, salimos del bucle
    } catch (err) {
      retries--;
      console.warn(`⏳ Esperando conexión a MySQL... Reintentos restantes: ${retries}`);
      if (retries === 0) {
        console.error('❌ No se pudo conectar a la base de datos:', err.message);
        process.exit(1); // Salimos si no se pudo conectar
      }
      await new Promise(res => setTimeout(res, delay));
    }
  }
};

// Iniciar verificación de conexión
waitForDB();

module.exports = pool;
