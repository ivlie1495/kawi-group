import React, { useState } from 'react'
import { useRouter } from 'next/router'

import { ListItemButton, ListItemIcon, ListItemText, Collapse, List } from '@mui/material'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Link from '@components/link'
import { NavChildItems, NavigationItem } from '@navigation/index'

function MultiMenu({ Icon, title, items }: NavigationItem) {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const handleClick = () => setOpen((prev) => !prev)

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {items && items.map(({ title, href }: NavChildItems, index: number) => (
            <Link key={index} href={href}>
              <ListItemButton 
                sx={{ 
                  paddingLeft: 9, 
                  backgroundColor: href === router.pathname ? '#0000000a' : 'white'
                }}
              >
                {title}
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Collapse>
    </>
  )
}

export default MultiMenu