// import { connection } from "../database/database.js"
import prisma from "../database/database";

function getGames() {
    return prisma.games.findMany();
    // return connection.query("SELECT * FROM games;");
}

async function insertGame(name: string, categoryId: number) {
    try {
        const newGame = {
            name,
            categoryId
        }
        await prisma.games.create({
            data: newGame
        });

        // await connection.query(`INSERT INTO games (name) VALUES ($1);`, [game]);
    } catch (err) {
        console.log(err);
    }
}

async function updateGame(id: number, name: string, categoryId: number) {
    // const { name, id } = game;
    try {
        const updatedGame = {
            name,
            categoryId
        }
        await prisma.games.update({
            where: {
                id: id
            },
            data: updatedGame
        });

        // await connection.query(`UPDATE games SET name=$1 WHERE id=$2;`, [name, id]);
    } catch (err) {
        console.log(err);
    }
}

async function removeGame(gameId: number) {
    try {
        await prisma.games.delete({
            where: {
                id: gameId
            }
        });

        // await connection.query(`DELETE FROM games WHERE id=$1;`, [gameId]);
    } catch (err) {
        console.log(err);
    }
}

export {
    getGames,
    insertGame,
    updateGame,
    removeGame,
}