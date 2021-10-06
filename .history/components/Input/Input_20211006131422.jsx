import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Input = ({ type = 'text', placholder }) => (
  <div css={css``}>
    <input type={type} placeholder={placholder} />
  </div>
)

export default Input
