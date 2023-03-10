import { ReactNode, useState } from 'react'

import { styled } from '@mui/material/styles'

import BaseAppBar from '@components/baseAppBar'
import BaseDrawer from '@components/baseDrawer'
import MainLayout from '@components/mainLayout'

interface Props {
  children: ReactNode
}

const LayoutWrapper = styled('div')({
  height: '100%',
  display: 'flex',
})

function Layout({ children }: Props) {
  const [ open, setOpen ] = useState(true)

  return (
    <LayoutWrapper>
      <BaseAppBar open={open} handleDrawerOpen={() => setOpen(true)} />
      <BaseDrawer open={open} handleDrawerClose={() => setOpen(false)} />
      <MainLayout open={open}>
        {children}
      </MainLayout>
    </LayoutWrapper>
  )
}

export default Layout