//#region router

import express from "express";

import { version0 } from "./v0/router.ts";

const router = express.Router()
    .use("/v0", version0);

//#region app

import cors from "cors";

const app = express();

app.use(cors());

const { PORT } = process.env;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}.`);
});
