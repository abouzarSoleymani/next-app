import React from 'react'
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import Input from '../Input/Input'

const InputText = ({ placholder }) => (
  <div
    css={css`
      width: '100%';
    `}
  >
    <Input type="text" placeholder={placholder} />
  </div>
)

export default InputText
