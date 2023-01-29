import prisma from "../src/database/database.js";

async function main() {
    await prisma.categories.createMany({
        data: [
            {
                name: "Action"
            },
            {
                name: "RTS"
            },
            {
                name: "FPS"
            },
        ]
    })
}

main()
    .then(() => {
        console.log("Categories created!");
    })
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    })