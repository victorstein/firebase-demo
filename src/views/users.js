import React from 'react'
import {
  Row,
  Col
} from 'reactstrap'
import UserCard from '../components/userCard'

export default () => {
  return (
    <Row className='w-75'>
      <Col>
        <UserCard />
      </Col>
    </Row>
  )
}