import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputPassword = ({ type = 'text', placholder: string }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
    <Input type="password" placeholder={placholder} />
  </div>
)

export default InputPassword
