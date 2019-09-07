import React, { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Alert
} from 'reactstrap'
import UserCard from '../components/userCard'
import { Database, Auth } from '../utils/firebase'

export default () => {

  const [users, setUsers] = useState(null)

  useEffect(() => {
    Database.ref('users').on('value', (data) => {
      setUsers(data.val())
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
    <Row className='w-100'>
      <Col>
        {
          users
            ? renderUsers()
            : <Alert color='danger'>No existen registros de usuarios</Alert>
        }
      </Col>
    </Row>
  )
}