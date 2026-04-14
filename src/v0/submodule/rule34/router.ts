import express from "express";

import { rule34SearchRoute } from "./routing/search/router";

export const rule34Router = express.Router()
    .get("/search", rule34SearchRoute);
