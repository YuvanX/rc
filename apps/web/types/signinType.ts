import { z } from "zod";

export const signin = z.object({
    email: z.string().email(),
    password: z.string().max(8, "Password maxLength is 8 character").min(5, "Password should be atleast 5 characters length"),
})

export type SigninType = z.infer<typeof signin> 