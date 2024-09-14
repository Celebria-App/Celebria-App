require("dotenv").config();

const {
  DB_NAME,
  DB_USERNAME,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  NODE_ENV,
  PORT,
  MP_TOKEN,
  HOST,
  CORS_ORIGIN_URL
} = process.env;

const config = {
  dbName: DB_NAME,
  dbUser: DB_USERNAME,
  dbPassword: DB_PASSWORD,
  dbHost: DB_HOST,
  dbPort: DB_PORT || 5432,
  port: PORT || 3001,
  env: NODE_ENV || "production",
  mpToken: MP_TOKEN,
  host: HOST,
  cors: CORS_ORIGIN_URL || "https://celebria-app-frontend.vercel.app"
};

module.exports = { config };
// 👨🏽‍💻 @ln_edit, el config se está enviando desestructuradamente, por lo que si en algun momento se exporta en
// la forma: module.export = config; 🧬 Esto causaría conflictos en las configuraciones de src/payments/mercadopago.config.js
// donde está siendo desestructurado nuevamente.
// Solución, importar en esa línea como -> const config = require('...') en lugar de const { config } = require('...');
