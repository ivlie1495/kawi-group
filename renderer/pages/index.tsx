import { useState } from 'react'
import axios from 'axios'

import { Button, TextField } from '@mui/material'

import BasePage from '@components/basePage'
import { prisma } from '@utils/prisma'

type Props = {
  companies: {
    name: string
  }[]
}

function Home({ companies }: Props) {
  const [ name, setName ] = useState('')

  const handleOnClick = async () => {
    const { data } = await axios.post('/api/company/create', { name })
    console.log(data)
  }

  return (
    <BasePage title="Home Page">
      <TextField size="small" onChange={({ target: { value }}) => setName(value)} />
      <Button onClick={handleOnClick}>Add</Button>
      {companies.map(({ name }, index) => (
        <div key={index}>{name}</div>
      ))}
    </BasePage>
  )
}

export async function getServerSideProps() {
  const companies = await prisma.company.findMany()
  
  return {
    props: {
      companies: JSON.parse(JSON.stringify(companies)),
    }
  }
}

export default Home