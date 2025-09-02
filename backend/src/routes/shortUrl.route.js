import express from "express";
import { createShortUrl } from "../controller/shortUrl.controller.js";

const router = express.Router();

//POST Route - Create Short URL
router.post("/", createShortUrl);

export default router;
