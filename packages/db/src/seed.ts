import { prisma } from "./client.js"

async function main() {
    const fordRCToy = await prisma.product.create({
        data: {
            name: "Ford Monster Truck(Brown Edition)",
            description: "",
            brandName: "Ford",
            price: 1500,
            heroImage: "",
            thumbImage: ""
        }
    })

    const raceRCToy = await prisma.product.create({
        data: {
            name: "Supra Supercar (Exclusive Editon)",
            description: "",
            brandName: "Supra",
            price: 2000,
            heroImage: "",
            thumbImage: ""
        }
    })

    const buggyRCToy = await prisma.product.create({
        data: {
            name: "Jeep Buggy",
            description: "",
            brandName: "Jeep",
            price: 4000,
            heroImage: "",
            thumbImage: ""
        }
    })

    const sandMobile = await prisma.product.create({
        data: {
            name: "Sand Mobile",
            description: "",
            brandName: "BatMobiles",
            price: 5000,
            heroImage: "",
            thumbImage: ""
        }
    })

    const jeepMonsterTruck = await prisma.product.create({
        data: {
            name: "Jeep 4x4 Monster Truck",
            description: "",
            brandName: "Jeep",
            price: 4500,
            heroImage: "",
            thumbImage: ""
        }
    })
}

main()
.then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect()
    process.exit(1)
})