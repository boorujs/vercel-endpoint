import express from "express";

import { version0 } from "./v0/router.ts";

const router = express.Router()
    .use("/v0", version0);
