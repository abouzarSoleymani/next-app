import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const FormControl = ({ children }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        display: flex;
        padding: ${theme.spaces[3]} 0;
      `}
    >
      {children}
    </div>
  )
}

export default FormControl
