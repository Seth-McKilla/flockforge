import Head from "next/head"
import { signOut, useSession } from "next-auth/react"
import useSWR from "swr"

import { fetcher } from "@/lib/utils"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"

export default function DashboardPage() {
  const { data } = useSWR("/api/twitter/users", fetcher)

  return (
    <Layout>
      <Head>
        <title>flockforge</title>
        <meta
          name="description"
          content="Perfectly curated Twitter Lists based on your search criteria."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div>
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      </section>
    </Layout>
  )
}
