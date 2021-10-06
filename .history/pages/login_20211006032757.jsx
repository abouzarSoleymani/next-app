import React from 'react'
import Head from 'next/head'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Layout from '../containers/Layout/Layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <main />
      </Layout>

      <footer />
    </div>
  )
}
