import {
  Box,
  Pagination, 
  TableCell,
  TableRow,
  Typography
} from '@mui/material'

import BasePage from '@components/basePage'
import TableWithHeader from '@components/table/tableWithHeader'
import { tableItemHeaders } from '@constants/tableHeaders'

import { prisma } from '@utils/prisma'

type Item = {
  name: string
  price: number
  qty: number
  description: string
  createdAt: Date
  updatedAt: Date
}

type Props = {
  count: number
  items: Item[]
}

function Item({ items, count }: Props) {
  return (
    <BasePage title="Item">
      <Typography variant="h6" marginBottom={2}>Item</Typography>
      <TableWithHeader headers={tableItemHeaders}>
        {items.map((row) => (
          <TableRow key={row.name}>
            <TableCell sx={{ borderBottom: '1px solid lightgray' }}>{row.name}</TableCell>
            <TableCell sx={{ borderBottom: '1px solid lightgray' }}>{row.price}</TableCell>
            <TableCell sx={{ borderBottom: '1px solid lightgray' }}>{row.qty}</TableCell>
            <TableCell sx={{ borderBottom: '1px solid lightgray' }}>{row.description}</TableCell>
            <TableCell sx={{ borderBottom: '1px solid lightgray' }}>{row.createdAt.toString()}</TableCell>
            <TableCell sx={{ borderBottom: '1px solid lightgray' }}>{row.updatedAt.toString()}</TableCell>
          </TableRow>
        ))}
      </TableWithHeader>
      <Box
        sx={{
          paddingTop: 2,
          display: 'flex',
          justifyContent: 'end'
        }}
      >
        <Pagination count={Math.ceil(count / 10)} />
      </Box>
    </BasePage>
  )
}

export async function getServerSideProps() {
  const response = await prisma.$transaction([
    prisma.item.count(),
    prisma.item.findMany({
      take: 10
    })
  ])
  const result = JSON.parse(JSON.stringify(response))
  
  return {
    props: {
      count: result[0] || 0,
      items: result[1] || [],
    }
  }
}

export default Item