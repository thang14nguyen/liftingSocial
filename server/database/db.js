const { Pool } = require('pg');

const pgPool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  port: process.env.PGPORT || 5432,
});

module.exports = pgPool;
