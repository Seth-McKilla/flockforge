import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import { ObjectId } from "mongodb"
import NextAuth from "next-auth"
import TwitterProvider from "next-auth/providers/twitter"

import clientPromise from "@/lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise, {
    databaseName: process.env.MONGODB_AUTH_DB_NAME,
  }),
  providers: [
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session, token }) {
      const client = await clientPromise
      const db = client.db(process.env.MONGODB_AUTH_DB_NAME)
      const account = await db.collection("accounts").findOne({
        userId: new ObjectId(token.sub),
      })

      session.user.id = account?._id
      session.user.token = account?.oauth_token

      return session
    },
  },
})
