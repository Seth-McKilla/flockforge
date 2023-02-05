declare global {
  var _mongoClientPromise: Promise<any>
}

declare module "next-auth" {
  interface Session {
    expires: string
    user?: UserSession & { id: string; token: string }
  }
}
