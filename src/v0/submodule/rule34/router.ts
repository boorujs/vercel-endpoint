import express from "express";

import searchRouter from "./routing/search/router.ts";

const rule34Router = express.Router()
    .use("/search", searchRouter);

export default rule34Router;
