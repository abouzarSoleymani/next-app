import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

const Input = ({ type = 'text', placholder }) => (
  <div css={css`
    width: '1'
  `}>
    <input type={type} placeholder={placholder} />
  </div>
)

export default Input
