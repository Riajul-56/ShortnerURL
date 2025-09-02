import { getUrlFromShortUrl } from "../dao/shortUrl.js";
import { createShortUrlWithoutUser } from "../services/shortUrl.service.js";
import wrapAsync from "../utils/tryCatchWrapper.js";

export const createShortUrl = wrapAsync(async (req, res, next) => {
  const { url } = req.body;
  const shortUrl = await createShortUrlWithoutUser(url);
  res.status(201).json({ shortUrl: process.env.APP_URL + shortUrl });
});

export const redirectFromShortUrl = wrapAsync(async (req, res) => {
  const { id } = req.params;
  const url = await getUrlFromShortUrl(id);
  if (!url) throw new Error("Short URL not found");
  res.redirect(url.full_url);
});
