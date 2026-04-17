import express from "express";

import version0 from "./v0/router.ts";

const versionRouter = express.Router()
    .use("/", version0)
    .use("/v0", version0);

export default versionRouter;
