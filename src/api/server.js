import express from "express";
import bodyParser from "body-parser";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const newPath = path.join(__dirname, "../../");

app.post("/save-answers", (req, res) => {
  const { data, filename } = req.body;
  const filePath = path.join(newPath, "public/assets", filename);

  fs.writeFile(filePath, JSON.stringify(data), (error) => {
    if (error) {
      console.error("Error writing file:", error);
      return res.status(500).send("Internal Server Error");
    }
    res.status(201).send("File saved");
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
