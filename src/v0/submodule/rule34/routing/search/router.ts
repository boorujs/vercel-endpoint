import express from "express";
import { formatResults } from "./util/format-results.ts";
import { apiUrl } from "../../api/url/api-url.ts";
import { fetchAndParse } from "../../../../util/parse.ts";

import { authenticate } from "../../util/authenticate.ts";

// temp
import { AUTH } from "../../temp/auth.ts";

const searchRouter = express.Router()
    // .use(authenticate)
    .get("/", async function (req, res) {
        const query = {
            user_id: AUTH.user_id,
            api_key: AUTH.api_key,
            tags: req.query.q,
            limit: req.query.limit || 42,
            pid: req.query.page || 0
        };

        const json = await fetchAndParse.json(apiUrl("post", {
            ...query,
            json: 1,
            fields: "tag_info"
        }));
        const xml = await fetchAndParse.xml(apiUrl("post", query));

        res.json({
            success: true,
            ...formatResults(json, xml)
        });
    });

export default searchRouter;
