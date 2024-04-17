import express from "express";
import ViteExpress from "vite-express";

const app = express();
const port = 3000;

app.get("/message", (_, res) => res.send("Hello from express!"));

ViteExpress.listen(app, port, () => console.log(`Server is listening on port ${port}...`));