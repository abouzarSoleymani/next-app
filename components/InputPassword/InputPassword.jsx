import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputPassword = (props) => (
  <div
    css={css`
      width: '100%';
      direction: ltr;
    `}
  >
    <Input type="password" {...props} />
  </div>
)

export default InputPassword
