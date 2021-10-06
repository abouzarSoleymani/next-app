import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const Button = ({ type = 'button', buttonType = 'primary', children }) => {
  const theme = useTheme()
  return (
    <div>
      <button
        css={css`
          width: '100%';
          background-color: ${theme.colors[buttonType]};
          color: white;
          font-size: ${theme.typography.paragraph};
          text-decoration: none;
          padding: 16px 24px;
          border: ${theme.border[1]};
          border-radius: ${theme.borderRadius[1]};
          display: inline-block;
          position: relative;
          cursor: pointer;
          transition-duration: 0.4s;
          &:hover {
            box-shadow: ${theme.boxShadow.light};
            background-color: ${theme.colors.secondary};
          }
          &:disabled {
            background-color: ${theme.colors.backgroundColorSecondary};
            cursor: no-drop;
          }
        `}
        type={type}
      >
        {' '}
        {children}
      </button>
    </div>
  )
}

export default Button
