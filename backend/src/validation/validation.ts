import z, { string } from 'zod'

export const bookScheam=z.object({
    name:string().min(1),
    author:z.string().min(1),
    image:z.string().min(1)
})

