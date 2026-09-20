import { z } from 'zod';
import { prisma } from '../utils/prisma';

const schema = z.object({
    url: z.url(),
    name: z.string().min(1).max(100),
    intervalSec: z.number().int().min(60).max(86400),
})

export default defineEventHandler(async (event) => {
    const body = schema.parse(await readBody(event))
    return await prisma.monitor.create({
        data: {...body, userId: 'temp-user-id' },
    })
})