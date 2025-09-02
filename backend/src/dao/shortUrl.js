import urlSchema from "../models/shortUrl.model.js";
import { ConflictError } from "../utils/errorHnadle.js";

export const saveShortUrl = async (shortUrl, logUrl, userId) => {
  try {
    const newUrl = new urlSchema({
      full_url: logUrl,
      short_url: shortUrl,
    });
    if (userId) {
      newUrl.user_id = userId;
    }
    await newUrl.save();
  } catch (error) {
    if (error.code == 11000) {
      throw new ConflictError("Short URL already exists");
    }
    throw new Error(error);
  }
};

export const getUrlFromShortUrl = async (shortUrl) => {
  return await urlSchema.findOneAndUpdate(
    { short_url: shortUrl },
    { $inc: { clicks: 1 } }
  );
};
