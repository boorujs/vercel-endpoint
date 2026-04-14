import express from "express";

const searchRouter = express.Router()
    .get("/", function (req, res) {
        res.json({
            success: true,
            message: "This endpoint is currently in testing."
        });
    });

export default searchRouter;
