import { prisma } from "@/lib/prisma"
import { PrismaAdapter } from "@next-auth/prisma-adapter"

import NextAuth from "next-auth/next"
import type { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"

const OPTIONS: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
}

const handler = NextAuth(OPTIONS)
export { handler as GET, handler as POST }
