import express from "express";
import connectDB from "./src/config/mongo.config.js";
import dotenv from "dotenv";
import shortUrl from "./src/routes/shortUrl.route.js";
import { redirectFromShortUrl } from "./src/controller/shortUrl.controller.js";
import { errorHandler } from "./src/utils/errorHnadle.js";
import cors from "cors";

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //used to parse incoming request bodies

//Create Short URL
app.use("/api/create", shortUrl);

//GET Route - Redirection
app.get("/:id", redirectFromShortUrl);
app.get("/", (req, res) => {
  res.send("Welcome to the URL Shortener API");
});

app.use(errorHandler);

app.listen(5000, () => {
  connectDB();
  console.log(
    "Server is running on port http://localhost:5000"
  );
});
