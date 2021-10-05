import React from 'react'
import Head from 'next/head'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Layout from '../containers/Layout/Layout'
import useLocalStorage from '../Hooks/useLocalStorage'

export default function Home() {
  const [value, setValue] = useLocalStorage('test')
  setValue('this is a test')
  cons
  const color = 'white'
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
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
      </Layout>

      <footer />
    </div>
  )
}
