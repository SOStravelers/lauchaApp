import mongoose from "mongoose";
import envar from "./config/envar.js";

const dbConfig = {
  dev: `mongodb+srv://${envar().DB_USER}:${envar().DB_PASS}@${envar().DB_DEV}`,
  test: `mongodb+srv://${envar().DB_USER}:${envar().DB_PASS}@${
    envar().DB_TEST
  }`,
  production: `mongodb+srv://${envar().DB_USER}:${envar().DB_PASS}@${
    envar().DB_PROD
  }`,
};

const url = `mongodb+srv://${envar().DB_USER}:${
  envar().DB_PASS
}@pollagol.5pmli.mongodb.net/pollagol?retryWrites=true&w=majority`;
const env = process.env.NODE_ENV || "";
console.log(url);
mongoose.set("strictQuery", false);
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
});

let db = mongoose.connection;

export default db;
