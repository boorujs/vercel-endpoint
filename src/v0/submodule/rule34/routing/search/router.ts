import express from "express";

import { authenticate } from "../../util/authenticate.ts";

const searchRouter = express.Router()
    .use(authenticate)
    .get("/", function (req, res) {
        res.json({
            success: true,
            $comment: "This is an example search. Functionality isn't available yet.",
            count: 1,
            results: [
                {
                    id: 5823623,
                    createdAt: 1647568922,
                    updatedAt: 1680758419,
                    file: {
                        main: {
                            url: "https://api-cdn.rule34.xxx/images/5109/0966b7bb5f64f30010d14d5e98bb81e4.jpeg",
                            size: [ 1136, 1250 ],
                        },
                        sample: {
                            has: false,
                            url: "https://api-cdn.rule34.xxx/images/5109/0966b7bb5f64f30010d14d5e98bb81e4.jpeg",
                            size: [ 1136, 1250 ]
                        },
                        preview: {
                            url: "https://api-cdn.rule34.xxx/thumbnails/5109/thumbnail_0966b7bb5f64f30010d14d5e98bb81e4.jpg",
                            size: [ 136, 150 ]
                        },
                        ext: "jpeg",
                        md5: "0966b7bb5f64f30010d14d5e98bb81e4",
                        directory: "5109"
                    },
                    score: 399,
                    tags: {
                        copyright: [
                            { name: "terraria", count: 5423 }
                        ],
                        character: [
                            { name: "zoologist_(terraria)", count: 1138 }
                        ],
                        artist: [
                            { name: "inkplasm", count: 623 },
                            { name: "welwraith", count: 1492 }
                        ],
                        general: [
                            { name: "1girls", count: 4616241 },
                            { name: "anthro", count: 2832899 },
                            { name: "anthro_only", count: 102145 },
                            { name: "belt", count: 95363 },
                            { name: "big_breasts", count: 3226823 },
                            { name: "breasts", count: 7547318 },
                            { name: "cleavage", count: 742398 },
                            { name: "clothed", count: 845053 },
                            { name: "clothed_female", count: 124105 },
                            { name: "dark_skin", count: 924316 },
                            { name: "dark-skinned_female", count: 399881 },
                            { name: "dog_ears", count: 26305 },
                            { name: "female", count: 9697675 },
                            { name: "female_only", count: 1969478 },
                            { name: "fully_clothed", count: 91239 },
                            { name: "furry", count: 968626 },
                            { name: "furry_only", count: 211582 },
                            { name: "hair", count: 1188756 },
                            { name: "heart", count: 536626 },
                            { name: "jeans", count: 40657 },
                            { name: "long_hair", count: 2434323 },
                            { name: "no_humans", count: 70494 },
                            { name: "non-nude", count: 3195 },
                            { name: "pants", count: 144495 },
                            { name: "red_hair", count: 662882 },
                            { name: "redhead", count: 33962 },
                            { name: "shirt", count: 400453 },
                            { name: "smile", count: 1682081 },
                            { name: "smiling", count: 202425 },
                            { name: "solo", count: 3753091 },
                            { name: "solo_female", count: 658968 },
                            { name: "tail", count: 1013706 },
                            { name: "white_sclera", count: 9314 }
                        ],
                        metadata: [
                            { name: "2d", count: 439311 },
                            { name: "color", count: 190089 },
                            { name: "full_color", count: 18426 }
                        ],
                        ambiguous: []
                    },
                    status: "active",
                    rating: "q",
                    source: "",
                    relationships: {
                        parentId: null,
                        hasChildren: false
                    },
                    uploader: {
                        username: "groyvleslut",
                        id: 1550138,
                    },
                    hasNotes: false,
                    commentCount: 22
                }
            ]
        });
    });

export default searchRouter;
