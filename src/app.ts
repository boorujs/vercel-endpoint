import express from "express";
import cors from "cors";
import errorHandler from "./handler/error-handler.ts";
import notFoundHandler from "./handler/not-found-handler.ts";
import rootLevelHandler from "./handler/root-level-handler.ts";

import versionRouter from "./version/router.ts";

const app = express();

// init
app.use(cors());

// versions
app.use(versionRouter);

// handlers
app.get("/", rootLevelHandler());
app.use(notFoundHandler());
app.use(errorHandler());

const port = process.env.PORT ?? 6767;

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
