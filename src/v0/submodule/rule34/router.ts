import express from "express";

import embedRouter from "./routing/embed/router.ts";
import searchRouter from "./routing/search/router.ts";

const rule34Router = express.Router()
    .use("/embed", embedRouter)
    .use("/search", searchRouter);

export default rule34Router;
