const errorHandler = () => function errorHandler(err, req, res, next) {
    res.status(500).json({
        success: false,
        error: {
            message: "An internal server error occured.",
            error: {
                name: err.name,
                message: err.message
            }
        }
    });
}

export default errorHandler;
