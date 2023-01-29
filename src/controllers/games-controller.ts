import { Request, Response } from "express";
import { getGames,  insertGame, updateGame, removeGame } from "../repositories/game-repository.js";
import { GameSchema } from "../models/schemas.js";

async function findGames(req: Request, res: Response) {
    try {
        await getGames()
        res.status(201).send("Game saved");
    } catch (err) {
        console.log(err.message);
    }
}

async function insert(req: Request, res: Response) {
    const newGame = req.body as game;

    const { error } = GameSchema.validate(newGame);

    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    try {
        await insertGame(newGame);
    } catch (err) {
        return res.status(500).send(err.message);
    }
}

async function update(req: Request, res: Response) {
    const { id } = req.params;
    const newName = req.body as string;

    const convertedId: number = Number(id);
    const newGame: game = {
        id: convertedId,
        name: newName
    }

    const { error } = GameSchema.validate(newName);

    if (error) {
        return res.status(400).send({
            message: error.message
        })
    }

    try {
        await updateGame(newGame);
        res.status(200).send("Updated!")
    } catch (err) {
        res.status(500).send(err.message);
    }
}

async function remove(req: Request, res: Response) {
    const { id } = req.params;
    const convertedId: number = Number(id);

    try {
        await removeGame(convertedId)
    } catch (err) {
        res.status(404).send(err.message)
    }
}

export {
    findGames,
    insert,
    update,
    remove
}