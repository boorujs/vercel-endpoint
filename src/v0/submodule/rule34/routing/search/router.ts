import express from "express";
import { formatResults } from "./util/format-results.ts";
import { intersectSearchTypes } from "../../util/search/intersect-search-types.ts";

import { authenticate } from "../../util/authenticate.ts";

import { json, xml } from "../../res/api-response/search.ts";

const searchRouter = express.Router()
    // .use(authenticate)
    .get("/", function (req, res) {
        res.json({
            success: true,
            $comment: "This is an example search. Functionality isn't available yet.",
            ...formatResults(
                intersectSearchTypes(json, xml).simplify()
            )
        });
    });

export default searchRouter;
