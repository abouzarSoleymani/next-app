import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputE = ({ placholder }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
    <Input type="password" placeholder={placholder} />
  </div>
)

export default InputPassword
