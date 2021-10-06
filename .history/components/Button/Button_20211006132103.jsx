import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Button = ({ type = 'button', placholder }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
    <input type={type} placeholder={placholder} />
  </div>
)

export default Input
