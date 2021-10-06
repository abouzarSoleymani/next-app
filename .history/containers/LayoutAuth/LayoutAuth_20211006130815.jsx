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
    <div>
      <img
        css={css`
          width: 80px;
        `}
        src="logo.png"
      />
    </div>
    <h1>Creat app</h1>
    <div>{children}</div>
  </div>
)

export default LayoutAuth
