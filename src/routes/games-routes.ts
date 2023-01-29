import express from "express";
import { findGames, insert, remove, update } from "../controllers/games-controller.js" 

const server = express();

server.get('/games', findGames);
server.post('/games', insert);
server.put('/games/:id', update);
server.delete('/games/:id', remove);

export default server;