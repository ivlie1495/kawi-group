import { ReactNode } from 'react'
import {
  Paper, 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow
} from '@mui/material'

type Props = {
  children: ReactNode
  headers: string[]
}

function TableWithHeader({ headers, children }: Props) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((item) => (
              <TableCell key={item} sx={{ borderBottom: '1px solid grey', fontWeight: 'bold' }}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {children}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableWithHeader