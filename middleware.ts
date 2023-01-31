import { NextRequest, NextResponse } from "next/server"
import { getToken } from "next-auth/jwt"

export const config = {
  matcher: ["/", "/([^/.]*)"],
}

export default async function middleware(req: NextRequest) {
  const token = await getToken({ req })

  const url = req.nextUrl

  if (token) {
    url.pathname = `/app${url.pathname}`
    return NextResponse.rewrite(url)
  } else {
    url.pathname = `/home${url.pathname}`
    return NextResponse.rewrite(url)
  }
}
