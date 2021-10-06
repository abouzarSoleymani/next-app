import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const Input = ({ type = 'text', placeholder }) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        width: 100%;
        input::placeholder {
          direction: rtl;
        }
      `}
    >
      <input
        css={css`
          width: 100%;
          background-color: ${theme.colors.backgroundColorPrimary};
          font-size: ${theme.typography.paragraph};
          text-decoration: none;
          border: ${theme.border[1]} solid;
          border-color: ${theme.borderColor.light};
          padding: ${theme.spaces[4]};
          border-radius: ${theme.borderRadius[1]};
          display: inline-block;
          position: relative;
          cursor: pointer;
        `}
        type={type}
        placeholder={placeholder}
      />
    </div>
  )
}
export default Input
