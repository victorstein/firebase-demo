import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Alert,
  Spinner
} from 'reactstrap'
import UserCard from '../components/userCard'
import { Database, Auth } from '../utils/firebase'

export default () => {

  const [users, setUsers] = useState(false)

  useEffect(() => {
    Database.ref('users').on('value', (data) => {
      setUsers(data.val())
      console.log(data)
      console.log(data.val())
    })
    Auth.onAuthStateChanged(data => console.log(data))
  }, [])

  const renderUsers = () => {
    const render = []
    for (const user in users) {
      render.push(
        <UserCard
          key={user}
          username={users[user].name}
          picture={users[user].photo}
          data={users[user].email}
        />
      )
    }
    return render
  }

  return (
    <Row className='my-2'>
      <Col className='d-flex align-items-center justify-content-center flex-column'>
        {
          users === null
            ? <Alert color='danger'>No existen registros de usuarios</Alert>
            : users === false
              ? <Spinner color='danger' />
              : renderUsers()
        }
      </Col>
    </Row>
  )
}