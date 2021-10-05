import React from 'react'
import Head from 'next/head'
import { css } from '@emotion/react'
import { jsx } from '@emotion/e'

export default function Home() {
  const color = 'white'
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div
          css={css`
            padding: 32px;
            background-color: hotpink;
            font-size: 24px;
            border-radius: 4px;
            &:hover {
              color: ${color};
            }
          `}
        >
          Hover to change color.
        </div>
      </main>

      <footer />
    </div>
  )
}
