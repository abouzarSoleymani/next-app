import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputPassword = ({ placeholder }) => (
  <div
    css={css`
      width: '100%';
      direction: ltr;
    `}
  >
    <Input type="password" placeholder={placeholder} />
  </div>
)

export default InputPassword
