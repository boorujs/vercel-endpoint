import express from "express";
import { formatResults } from "./util/format-results.ts";
import { intersectSearchTypes } from "../../util/search/intersect-search-types.ts";

import { authenticate } from "../../util/authenticate.ts";

import jsonResponse from "../../res/api-response/search-json.ts";
import xmlResponse from "../../res/api-response/search-xml.ts";

const searchRouter = express.Router()
    // .use(authenticate)
    .get("/", function (req, res) {
        res.json({
            success: true,
            $comment: "This is an example search. Functionality isn't available yet.",
            ...formatResults(
                intersectSearchTypes(jsonResponse, xmlResponse).simplify()
            )
        });
    });

export default searchRouter;
