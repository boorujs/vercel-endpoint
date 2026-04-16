import express from "express";
import { formatResults } from "./util/format-results.ts";
import { fetchAndParse } from "../../../../util/parse.ts";

import { authenticate } from "../../util/authenticate.ts";

// temp
const jsonUrl = "https://github.com/boorujs/booru.js/raw/refs/tags/v0.0.1/.brainstorm/rule34.xxx/responses/formatted/search.json";
const xmlUrl =  "https://github.com/boorujs/booru.js/raw/refs/tags/v0.0.1/.brainstorm/rule34.xxx/responses/formatted/search.xml";

const searchRouter = express.Router()
    // .use(authenticate)
    .get("/", async function (req, res) {
        const json = await fetchAndParse.json(jsonUrl);
        const xml = await fetchAndParse.xml(xmlUrl);

        res.json({
            success: true,
            $comment: "This is an example search. Functionality isn't available yet.",
            ...formatResults(json, xml)
        });
    });

export default searchRouter;
