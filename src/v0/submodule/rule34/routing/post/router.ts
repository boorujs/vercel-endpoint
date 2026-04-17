import express from "express";
import { formatResults } from "../search/util/format-results.ts";
import { apiUrl } from "../../api/url/api-url.ts";
import { fetchAndParse } from "../../../../util/parse.ts";

import { authenticate } from "../../util/authenticate.ts";

// temp
import { AUTH } from "../../temp/auth.ts";

const postRouter = express.Router()
    // .use(authenticate)
    .get(/\/\d+/, async function (req, res) {
        const id = req.path.match(/\d+(?=\/?$)/)?.[0];

        const query = {
            id: id
        };

        const json = await fetchAndParse.json(apiUrl("post", {
            ...query,
            json: 1,
            fields: "tag_info"
        }));
        const xml = await fetchAndParse.xml(apiUrl("post", query));

        res.json({
            success: true,
            ...formatResults(json, xml).results[0]
        });
    });

export default postRouter;
