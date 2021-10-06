import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Input = ({ type = 'text', placeholder }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
    <input type={type} placeholder={placeholder} />
  </div>
)

export default Input
