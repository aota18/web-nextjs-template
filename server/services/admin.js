const db = require("./db");
const helper = require("../helper");
const config = require("../config");

async function getMultiple(page = 1) {
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id, prompt, img_url, action, location, ip, created_at, destination_url
    FROM img_data LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = { page };

  return {
    data,
    meta,
  };
}

async function create(data) {
  const result = await db.query(
    `INSERT INTO img_data 
      (prompt, img_url, action, location, ip, destination_url) 
      VALUES 
      ("${data.prompt}", "${data.img_url}", "${data.action}", "${data.location}", "${data.ip}", "${data.destination_url}")`
  );

  let message = "Error in creating img data";

  if (result.affectedRows) {
    message = "img data created successfully";
  }

  return { message };
}
module.exports = {
  getMultiple,
  create,
};
