import prisma from "../src/database/database.js";

async function main() {
    let category = await prisma.categories.findFirst();
    if (!category) {
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
        });
    };

    let games = await prisma.games.findFirst();
    if (!games) {
        await prisma.games.createMany({
            skipDuplicates: true,
            data: [
                { name: "The last of us", categoryId: 1},
                { name: "Age of Empires 2", categoryId: 2},
                { name: "Apex", categoryId: 3}
            ]
        });
    };
       
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