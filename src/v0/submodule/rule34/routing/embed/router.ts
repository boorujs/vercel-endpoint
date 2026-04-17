// stole a few tidbits from fxtwitter repo theyre a godsend
// https://github.com/ccloli/FxTwitter

import express from "express";
import { renderEmbed } from "./util/render-embed.ts";
import { apiUrl } from "../../api/url/api-url.ts";
import { fetchAndParse } from "../../../../util/parse.ts";

// temp
import { AUTH } from "../../temp/auth.ts";

const embeddingClientRegex =
    /(discordbot|telegrambot|facebook|whatsapp|firefox\/92|vkshare|revoltchat|preview|iframely)/gi;

const embedRouter = express.Router()
    .get(/\/\d+/, async function (req, res) {
        const id = req.path.match(/\d+(?=\/?$)/)?.[0];

        if (!req.get("User-Agent")?.match(embeddingClientRegex)) {
            res.send(renderEmbed(
                `<meta http-equiv="refresh" content="0; url=https://rule34.xxx/?page=post&s=view&id=${id}" />`
            ));
            return;
        }

        const post = await fetchAndParse.json(apiUrl("post", {
            user_id: AUTH.user_id,
            api_key: AUTH.api_key,
            id: id
        })).then(r => r[0]);

        const embed = {
            "theme-color": "#aae5a4"
            // TODO: add title and description and stuff
        };

        if (!post.image.match(/mp4$/)) {
            renderEmbed({
                ...embed,
                "twitter:image": post.file_url,
                "twitter:image:width": post.width,
                "twitter:image:height": post.height,
                "og:image": post.file_url,
                "og:image:width": post.width,
                "og:image:height": post.height
            });
        } else {
            const sizeMult =
                (post.width > 1920 || post.height > 1920) ? 0.5
                    : (post.width < 400 && post.height < 400) ? 2
                        : 1;

            renderEmbed({
                ...embed,
                "twitter:player:height": post.height * sizeMult,
                "twitter:player:width": post.width * sizeMult,
                "twitter:player:stream": post.file_url,
                "twitter:player:stream:content_type": "video/mp4",
                "og:video": post.file_url,
                "og:video:secure_url": post.file_url,
                "og:video:height":  post.height * sizeMult,
                "og:video:width":  post.width * sizeMult,
                "og:video:type": "video/mp4",
                "og:image": post.sample_url,
                "twitter:image": "0"
            });
        }
    });

export default embedRouter;
