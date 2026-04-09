import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Next.js app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
        <h1 className="text-4xl font-bold text-center py-8">Welcome to Next.js</h1>
      </main>
    </>
  )
}