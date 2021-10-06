import React from 'react'
/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react'
import Link from 'next/link'

const Hyperlink = ({ href, children, ...props }) => {
  const theme = useTheme()
  return (
    <Link href={href}>
      <a
        css={css`
          text-decoration: none;
          cursor: pointer;
          color: ${theme.colors.linkPrimary};
          border-color: ${theme.colors.linkPrimary};
          border-bottom: ${theme.border[1]} solid;
          transition-duration: 0.4s;
          &:hover {
            color: ${theme.colors.linkSecondary};
            border-color: ${theme.colors.linkSecondary};
          }
        `}
        {...props}
      >
        {children}
      </a>
    </Link>
  )
}

export default Hyperlink
