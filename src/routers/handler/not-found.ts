const notFound = () => function notFound(req, res, next) {
    res.status(404).json({
        success: false,
        reason: {
            message: "Invalid endpoint.",
            url: req.originalUrl
        }
    });
}

export default notFoundHandler;
