import express from "express";
import cors from "cors";
import errorHandler from "./handler/error-handler.ts";

import versionRouter from "./version/router.ts";

const app = express();

app.use(cors());
app.use(versionRouter);
app.use(errorHandler());

const port = process.env.PORT ?? 6767;

app.listen(port, () => {
    console.log(`App listening on port ${port}.`);
});
