import pg from "pg";
// import dotenv from "dotenv";

// dotenv.config()

const { Pool } = pg;

/* const connection = new Pool({
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
}) */

const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '190698',
    database: 'pocTs'
})

export { connection }