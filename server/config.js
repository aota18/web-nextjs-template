const ACCESS_KEY_ID = "";
const SECRET_ACCESS_KEY = "";
const REGION = "";

const config = {
  db: {
    host: "35.160.108.71",
    user: "igt-admin",
    database: "admin",
    password: "Dptnsla94!",
  },
  s3: {
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION,
  },
  listPerPage: 10,
};

module.exports = config;
