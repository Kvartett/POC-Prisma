import express from "express";
import server from "./routes/games-routes.js";

const app = express();
app.use(express.json());
app.use(server);

server.listen(4000, () => {
    console.log(`Running in port 4000`)
});