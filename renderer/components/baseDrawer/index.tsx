import React from 'react'

import { styled, useTheme } from '@mui/material/styles'

import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import List from '@mui/material/List'

import { drawerWidth } from '@constants/main'
import navigation, { NavigationItem } from '@navigation/index'
import MenuItem from '@components/menu/menuItem'

type Props = {
  open: boolean
  handleDrawerClose: () => void
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

function BaseDrawer({ open, handleDrawerClose }: Props) {
  const theme = useTheme()

  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {navigation.map((item: NavigationItem, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </List>
    </Drawer>
  )
}

export default BaseDrawer