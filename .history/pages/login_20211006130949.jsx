import React from 'react'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'

export default function Home() {
  return (
    <div>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutAuth>
        <div>login</div>
        <form>
          <input type="text" placholder="email" />
        </form>
      </LayoutAuth>

      <footer />
    </div>
  )
}
