import express, { Request, Response } from "express";
import routes from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(
    `Example app listening on port ${PORT} in the ${process.env.ENV} environment.`
  );
});
