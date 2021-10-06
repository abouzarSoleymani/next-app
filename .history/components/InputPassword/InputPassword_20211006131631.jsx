import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputPassword = ({ type = 'text', placholder }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
   <Input></Input>
  </div>
)

export default Input
