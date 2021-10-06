import React from 'react'
import Head from 'next/head'
import LayoutAuth from '../containers/LayoutAuth/LayoutAuth'
import { InputEmail, InputPassword, Button } from '../components'

export default function Home() {
  const handleSubmit =() => {console.log('')}
  return (
    <div>
      <Head>
        <title>login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <LayoutAuth>
        <form onSubmit={handleSubmit}>
          <InputEmail placeholder="email" />
          <InputPassword placeholder="password" />
          <Button type="submit">login</Button>
        </form>
      </LayoutAuth>

      <footer />
    </div>
  )
}
