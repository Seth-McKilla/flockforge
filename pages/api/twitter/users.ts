import { NextApiRequest, NextApiResponse } from "next"
import { getSession } from "next-auth/react"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req })
  if (!session) {
    return res.status(401).send("Unauthorized")
  }
  console.log(session)

  //   const { accessToken, accessTokenSecret } = session.user

  //   const response = await fetch(
  //     "https://api.twitter.com/1.1/friends/list.json",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //       params: {
  //         count: 10,
  //       },
  //     }
  //   )

  res.status(200).json("hello")
}
