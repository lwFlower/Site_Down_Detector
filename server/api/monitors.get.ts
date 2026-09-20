import { prisma } from "../utils/prisma"

export default defineEventHandler(async() => {
    return await prisma.monitor.findMany({
        orderBy: {createdAt: 'desc'},
    })
})