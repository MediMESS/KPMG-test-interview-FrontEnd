require("dotenv").config();
module.exports = {
  API_URL:
    process.env.NODE_ENV === "production"
      ? "https://kpmg-test-interview-backend.herokuapp.com"
      : "http://127.0.0.1:8000",
};
