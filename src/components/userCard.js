import React from 'react'
import {
  Media,
  Card,
  CardBody
} from 'reactstrap'

export default ({ username = '', picture='logo192.png', data='' }) => (
  <Card>
    <CardBody>
      <Media>
        <Media left>
          <Media className='mr-3' style={{ height: '5rem' }} src={picture} alt='img' />
        </Media>
        <Media body style={{ wordBreak: 'break-word' }}>
          <Media heading>
            {username}
          </Media>
          <p>{data}</p>
        </Media>
      </Media>
    </CardBody>
  </Card>
)
