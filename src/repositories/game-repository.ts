import { connection } from "../database/database.js"

function getGames() {
    return connection.query("SELECT * FROM games;")
}

async function insertGame(game: game) {
    try {
        await connection.query(`INSERT INTO games (name) VALUES ($1);`, [game]);
    } catch (err) {
        console.log(err);
    }
}

async function updateGame(game: game) {
    const { name, id } = game;
    try {
        await connection.query(`UPDATE games SET name=$1 WHERE id=$2;`, [name, id]);
    } catch (err) {
        console.log(err);
    }
}

async function removeGame(gameId: number) {
    try {
        await connection.query(`DELETE FROM games WHERE id=$1;`, [gameId]);
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