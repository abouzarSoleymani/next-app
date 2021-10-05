/** @jsx jsx */
import { jsx } from '@emotion/react'
import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          css={{
            backgroundColor: 'hotpink',
            '&:hover': {
              color: 'lightgreen',
            },
          }}
        >
          This has a hotpink background.
        </div>
      </main>

      <footer />
    </div>
  )
}
