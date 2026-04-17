const errorHandler = () => function catchError(err, req, res, next) {
    console.error(err);

    res.status(500).json({
        success: false,
        reason: {
            message: "An internal server error occured.",
            error: {
                name: err.name,
                message: err.message
            }
        }
    });
}

export default errorHandler;
