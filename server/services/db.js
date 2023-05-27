const mariadb = require("mariadb");
const config = require("../config");

const pool = mariadb.createPool(config.db);

async function query(sql, params) {
  const conn = await pool.getConnection();
  const results = await conn.query(sql, params);

  return results;
}

module.exports = {
  query,
};
