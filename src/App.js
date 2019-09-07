import React from 'react'
import Signup from './views/signup'
import Users from './views/users'
import { Container } from 'reactstrap'

function App () {
  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>
      <Users />
    </Container>
  )
}

export default App
