const rootLevel = () => function rootLevel(req, res, next) {
    const embeddingClientRegex =
        /(discordbot|telegrambot|facebook|whatsapp|firefox\/92|vkshare|revoltchat|preview|iframely)/gi;
    if (req.get("User-Agent")?.match(embeddingClientRegex))
        res.redirect("https://github.com/boorujs/vercel-endpoint");
    else next();
}

export default rootLevel;
