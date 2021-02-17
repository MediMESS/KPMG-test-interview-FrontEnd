require("dotenv").config();
module.exports = {
  API_URL:
    process.env.NODE_ENV === "production"
      ? process.env.SERVER_URL
      : "http://127.0.0.1:8000",
};
