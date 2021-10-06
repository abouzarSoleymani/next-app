import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Input = ({ type, placholder }) => (
  <div
    css={css`

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
    <h2>Create app</h2>
    <div>{children}</div>
  </div>
)

export default LayoutAuth
