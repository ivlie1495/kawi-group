import React from 'react'

import { NavigationItem } from '@navigation/index'

import MultiMenu from '../multiMenu'
import SingleMenu from '../singleMenu'

type Props = {
  item: NavigationItem
}

function MenuItem({ item }: Props) {
  const Component = item.multi ? MultiMenu : SingleMenu

  return (
    <Component {...item} />
  )
}

export default MenuItem