import { Card } from '@mui/material'
import React from 'react'


export default function CardList(data: any) {

  const searchResults = data.data

  return (
    <>
    <Card>hello</Card>
    {searchResults?.map((item: any) => (<Card>{item.word}</Card>))}
    </>
  )
}
