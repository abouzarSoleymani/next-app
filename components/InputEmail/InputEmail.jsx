import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputEmail = (props) => (
  <div
    css={css`
      width: '100%';
      direction: ltr;
    `}
  >
    <Input type="email" {...props} />
  </div>
)

export default InputEmail
