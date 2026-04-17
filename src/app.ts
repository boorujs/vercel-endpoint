import express from "express";

import cors from "cors";
import versionRouter from "./routers/version/router.ts";
import rootLevel from "./routers/handler/root-level.ts";
import notFound from "./routers/handler/not-found.ts";
import errorHandler from "./handler/error-handler.ts";

const app = express();

// init

app.use(cors());

app.use(versionRouter);
app.get("/", rootLevel());
app.use(notFound());
app.use(errorHandler());

const port = process.env.PORT ?? 6767;

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
