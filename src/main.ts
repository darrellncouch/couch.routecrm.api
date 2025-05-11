import express from "express";
import ViteExpress from "vite-express";
import * as router from "couch-routes";
import { controllers } from "./controllers";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

router.initialize(app, controllers)

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);
