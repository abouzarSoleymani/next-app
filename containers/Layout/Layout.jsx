import React from 'react'
import Header from '../Header/Header'

const Layout = ({ children }) => (
  <div>
    <Header />
    <div>{children}</div>
  </div>
)

export default Layout
