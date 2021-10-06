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
      <img     css={css`
      display: flex;
      height: 100vh;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    `} src="logo.png" />
    </div>
    <div>{children}</div>
  </div>
)

export default LayoutAuth
