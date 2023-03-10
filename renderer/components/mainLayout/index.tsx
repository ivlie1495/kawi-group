import { ReactNode } from 'react'

import { styled } from '@mui/material/styles'

import { drawerWidth } from '@constants/main'

type Props = {
  open: boolean
  children: ReactNode
}

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

function MainLayout({ open, children }: Props) {
  return (
    <Main open={open}>
      {children}
    </Main>
  )
}

export default MainLayout