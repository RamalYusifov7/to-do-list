import React from 'react'
import { Container } from 'react-bootstrap'
import AddItem from './AddItem'
import Lists from './Lists'

function Content() {
  return (
    <main className='main-content'>
      <AddItem />
      <Lists />
    </main>
  )
}

export default Content