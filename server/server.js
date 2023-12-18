import express from "express";
import dotenv from "dotenv";
import Donates from "./routes/Donates.js";
import ErrorHandler from "./middlewares/errorMiddleware.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/donates",Donates)
app.get("*", (req, res) => {
  res.status(404);
  throw new Error("Page not found")
});
app.use(ErrorHandler)

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
