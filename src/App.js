import React, { useEffect, useState } from 'react'
import Signup from './views/signup'
import Users from './views/users'
import { Container, Spinner } from 'reactstrap'
import { Auth } from './utils/firebase'
import Header from './components/header'

function App () {

  const [loggedIn, setLoggedIn] = useState(null)

  useEffect(() => {
    Auth.onAuthStateChanged((user) => {
      if (user) {
        setLoggedIn(true)
      } else {
        setLoggedIn(false)
      }
    })
  }, [])

  return (
    <>
      <Header />
      <Container className='d-flex justify-content-center vh-100'>
        {
          loggedIn === null
            ? <Spinner className='align-self-center' color='danger' />
            : loggedIn
              ? <Users />
              : <Signup />
        }
      </Container>
    </>
  )
}

export default App
