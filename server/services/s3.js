const config = require("../config");

const s3 = new AWS.S3(config.s3);

module.exports = {
  s3,
};
