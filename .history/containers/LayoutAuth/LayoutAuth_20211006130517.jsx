import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const LayoutAuth = ({ children }) => (
  <div
    css={css`
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `}
  >
    <div><img src='logo.png'>s</div>
    <div>{children}</div>
  </div>
)

export default LayoutAuth
