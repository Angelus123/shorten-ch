
import ShortUrl from'../models/shortUrl.js';
import { v4 as uuidv4 } from 'uuid';
import dotenv from 'dotenv';
dotenv.config();

 export const addShortenUrl = async (req, res) => {
  const { longUrl } = req.body;

  // Validate URL
  const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
  if (!urlPattern.test(longUrl)) {
    return res.status(400).json({ message: "Invalid URL format." });
  }

  // Check if URL already exists in the database
  let url = await ShortUrl.findOne({ longUrl });

  // If URL exists, return the existing short URL
  if (url) {
    return res.json({ shortUrl: `${process.env.BASE_URL}/${url.shortCode}` });
  }

  // Generate a new short code and save to database
  const shortCode =  uuidv4().slice(0, 8);
  console.log("shortcode:", shortCode);
  url = new ShortUrl({ longUrl, shortCode });
  await url.save();

  res.json({ shortUrl: `${process.env.BASE_URL}/${shortCode}` });
};
 export const getSholtenUrl = async (req, res) => {
  const { shortCode } = req.params;

  const url = await ShortUrl.findOne({ shortCode });

  if (url) {
    // Redirect to the original URL
    return res.redirect(url.longUrl);
  } else {
    return res.status(404).json({ message: 'URL not found.' });
  }
 };
