import express from "express";

import { rule34Router } from "./submodule/rule34/router.ts";

export const version0 = express.Router()
    .use("/rule34", rule34Router);
