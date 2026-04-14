import express from "express";

export const rule34SearchRouter = express.Router()
    .get("/", function (req, res) {
        res.json({
            success: true,
            message: "This endpoint is currently in testing."
        });
    });
