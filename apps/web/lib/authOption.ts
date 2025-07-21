import { prisma } from "@workspace/db/client";
import bcrypt from "bcrypt";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { type: "text", placeholder: "m@example.com", label: "Email" },
        password: { type: "password", label: "Password" },
      },
      async authorize(credentials, req) {
        try {
                if(!credentials) {
                    throw new Error("Please provide valid details")
                }

                const { email, password } = credentials;

                const isUser = await prisma.user.findUnique({ where: { email }})
                if(!isUser) {
                    throw new Error("Invalid User. Please signup first!")
                }

                const hashedPassword = await bcrypt.hash(password, 10)
                const isValidPassword = await bcrypt.compare(password, hashedPassword)
                if(!isValidPassword) { 
                    throw new Error("Invalid Password")
                }

                return { id: isUser.id, email: isUser.email }
                
        } catch (error) {

            throw new Error("Something went wrong")
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
        if(token && user) {
            token.id = user.id
        }

        return token
    },
    async session({ session, token }: any) {
        if(session && token) {
            session.user.id = token.id
        }

        return session
    }
  },
  pages: {
    signIn: "/signin"
  }
};
