import React, { ReactNode } from 'react'
import Head from 'next/head'

import { styled } from '@mui/material'

type Props = {
  title: string
  children: ReactNode
}

const Root = styled('div')(({theme}) => {
  return {
    paddingTop: theme.spacing(7),
  }
})

function BasePage({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Root>
        {children}
      </Root>
    </>
  )
}

export default BasePage