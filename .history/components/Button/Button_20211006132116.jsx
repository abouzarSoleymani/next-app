import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Button = ({ type = 'button', children }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
    <button type={type} placeholder={placholder} />
  </div>
)

export default Button
