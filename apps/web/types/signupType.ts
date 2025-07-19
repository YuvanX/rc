import * as z from "zod"

export const signup =  z.object({
    email: z.string().email(),
    password: z.string().max(8, "Password maxLength is 8 character").min(5, "Password should be atleast 5 characters length"),
    username: z.string()
})

export type signUpType = z.infer<typeof signup>