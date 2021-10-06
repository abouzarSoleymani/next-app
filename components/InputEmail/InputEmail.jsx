import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputEmail = ({ placeholder }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
    <Input type="email" placeholder={placeholder} />
  </div>
)

export default InputEmail
