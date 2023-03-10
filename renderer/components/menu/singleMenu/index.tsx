import React from 'react'
import { useRouter } from 'next/router'
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

import Link from '@components/link'
import { NavigationItem } from '@navigation/index'

function SingleMenu({ Icon, title, href }: NavigationItem) {
  const router = useRouter()

  return (
    <Link href={href}>
      <ListItemButton 
        sx={{ 
          backgroundColor: href === router.pathname ? '#0000000a' : 'white'
        }}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </Link>
  )
}

export default SingleMenu