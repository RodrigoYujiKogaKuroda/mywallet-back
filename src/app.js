import express from "express";
import router from "./routes/index.js";

const app = express();
app.use(express.json());

app.listen(router);

const port = 5000;
app.listen(port, () => console.log(`Server running in port: ${port}`));