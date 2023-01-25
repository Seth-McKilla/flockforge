import Head from "next/head"

import { Icons } from "@/components/icons"
import { Layout } from "@/components/layout"
import { Button } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>FlockForge</title>
        <meta
          name="description"
          content="Perfectly curated Twitter Lists based on your search criteria."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
        <div className="flex max-w-[980px] flex-col items-start gap-2">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
            Perfectly curated Twitter Lists <br className="hidden sm:inline" />
            based on your search criteria.
          </h1>
          <p className="max-w-[700px] text-lg text-slate-700 dark:text-slate-400 sm:text-xl">
            Painlessly find the best profiles to follow within any niche. Search
            for users by keywords, follower count, engagement rate, and more.
          </p>
        </div>
        <div className="flex gap-4">
          <Button>
            <Icons.twitter className="mr-3 fill-current" />
            Continue with Twitter
          </Button>
        </div>
      </section>
    </Layout>
  )
}
