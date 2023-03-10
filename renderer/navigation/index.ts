import { SvgIconProps } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import ApartmentIcon from '@mui/icons-material/Apartment';

export interface NavChildItems {
  title: string
  href: string
}

export interface NavigationItem {
  title: string
  href?: string
  multi: boolean
  Icon: (props: SvgIconProps) => JSX.Element
  items?: NavChildItems[]
}

const navigation = [
  {
    Icon: DashboardIcon, 
    href: '/',
    title: 'Dashboard',
    multi: false,
  },
  {
    Icon: ApartmentIcon,
    title: 'Master',
    multi: true,
    items: [
      {
        title: 'Account',
        href: '/master/account'
      },
      {
        title: 'Company',
        href: '/master/company'
      },
      {
        title: 'Item',
        href: '/master/item'
      },
      {
        title: 'Customer',
        href: '/master/customer'
      },
      {
        title: 'Supplier',
        href: '/master/supplier'
      },
      {
        title: 'Employee',
        href: '/master/employee'
      }
    ]
  },
]

export default navigation