import React from 'react'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import { 
  InputEmail,
  InputPassword
} from './'
export default function Home() {
  return (
    <div>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutAuth>
        <form>
          <input type="email" placholder="email" />
          <input type="password" placholder="password" />
          <button type="submit">login</button>
        </form>
      </LayoutAuth>

      <footer />
    </div>
  )
}
