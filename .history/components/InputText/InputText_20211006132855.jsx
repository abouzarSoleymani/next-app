import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputText = ({ placeholder }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
    <Input type="text" placeholder={placeholder} />
  </div>
)

export default InputText
