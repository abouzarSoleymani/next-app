import React from 'react'

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => (
  <div>
    Header
    <div>{children}</div>
  </div>
)

export default Layout
