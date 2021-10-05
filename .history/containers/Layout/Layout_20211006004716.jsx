import React from 'react'
import Head from 'next/head'
const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
)

export default Layout
