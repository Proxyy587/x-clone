import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/");

app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT}`);
});
