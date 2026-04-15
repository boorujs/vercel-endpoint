import express from "express";

import { authenticate } from "../../util/authenticate.ts";

import jsonResponse from "../../res/api-response/search-json.ts";
import xmlResponse from "../../res/api-response/search-xml.ts";

const searchRouter = express.Router()
    .use(authenticate)
    .get("/", function (req, res) {
        res.json({
            success: true,
            $comment: "This is an example search. Functionality isn't available yet.",
            count: parseInt(xml.getAttribute("count")),
            results: jsonResponse.map((_, i) => {
                const json = jsonResponse[i]!;
                const xml = xmlResponse.children[i]!;
                const prop = (prop: keyof typeof json) => json[prop];
                const attr = (attr: Parameters<typeof xml["getAttribute"]>[0]) => xml.getAttribute(attr);

                return [
                    {
                        id: prop("id"),
                        createdAt: Date.parse(attr("created_at")) / 1000,
                        updatedAt: prop("change"),
                        file: {
                            main: {
                                url: prop("file_url"),
                                size: [
                                    prop("width"),
                                    prop("height")
                                ],
                            },
                            sample: {
                                has: prop("sample"),
                                url: prop("sample_url"),
                                size: [
                                    prop("sample_width"),
                                    prop("sample_height")
                                ]
                            },
                            preview: {
                                url: prop("preview_url"),
                                size: [
                                    parseInt(attr("preview_width")),
                                    parseInt(attr("preview_height"))
                                ]
                            },
                            ext: prop("image").match(/(?<=\.)[^.]*$/)[0],
                            md5: prop("hash"),
                            directory: prop("directory").toString()
                        },
                        score: prop("score"),
                        tags: prop("tag_info").reduce((obj, i) => {
                            const propMap = {
                                "copyright": "copyright",
                                "character": "character",
                                "artist": "artist",
                                "tag": "general",
                                "metadata": "metadata",
                                [null]: "ambiguous"
                            };
                            obj[propMap[i.type]].push({
                                name: i.tag,
                                count: i.count
                            });
                        },
                        {
                            copyright: [],
                            character: [],
                            artist: [],
                            general: [],
                            metadata: [],
                            ambiguous: []
                        }),
                        status: prop("status"),
                        rating: attr("rating"),
                        source: prop("source"),
                        relationships: {
                            parentId: prop("parent_id") || null,
                            hasChildren: attr("has_children") === "true"
                        },
                        uploader: {
                            username: prop("owner"),
                            id: parseInt(attr("creator_id")),
                        },
                        hasNotes: prop("has_notes"),
                        commentCount: prop("comment_count")
                    }
                ];
            })
        });
    });

export default searchRouter;
