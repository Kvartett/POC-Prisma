import pkg from "@prisma/client";
// import pg from "pg";
// import dotenv from "dotenv";

// dotenv.config()

// const { Pool } = pg;
const { PrismaClient } = pkg;
const prisma = new PrismaClient();

export default prisma;


/* const connection = new Pool({
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_NAME
}) */

/* const connection = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: '190698',
    database: 'poc_prisma'
})

export { connection } */