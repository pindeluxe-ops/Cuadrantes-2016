import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Backend funcionando correctamente" });
});

app.listen(3001, () => console.log("Backend escuchando en http://localhost:3001"));
