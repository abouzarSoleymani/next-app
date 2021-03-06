import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'

const Paragraph = ({ children, align = 'right', ...props }) => {
  const theme = useTheme()
  return (
    <p
      css={css`
        text-align: ${align};
        margin-bottom: 0.7rem;
        font-weight: ${theme.typography.paragraph.fontWeight};
        line-height: ${theme.typography.paragraph.lineHeight};
        font-size: ${theme.typography.paragraph.fontSize}em;
      `}
      {...props}
    >
      {children}
    </p>
  )
}

export default Paragraph
