export function authenticate(req, res, next) {
    if (!req.get("Authentication")?.match(/\d+:[0-9a-f]+/))
        res.status(401).json({
            success: false,
            error: {
                name: "Invalid authentication",
                message: "For testing, set the Authentication header to '0:0'"
            }
        });
    else next();
}
