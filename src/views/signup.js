import React from 'react'
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  Button
} from 'reactstrap'
import { FaGoogle } from 'react-icons/fa'
import { Auth, GoogleProvider, Database } from '../utils/firebase'

export default () => {

  const signInWithGoogle = async () => {
    const { user } = await Auth.signInWithPopup(GoogleProvider)
    Database.ref(`users/${user.uid}`).update({
      name: user.displayName,
      photo: user.photoURL,
      email: user.email
    })
  }

  return (
    <Row>
      <Col>
        <Card>
          <CardHeader>
            <h2>Bienvenido</h2>
            <p>Por favor, incia sesion con Google</p>
          </CardHeader>
          <CardBody>
            <Button
              className='d-flex justify-content-between align-items-center px-5'
              block
              outline
              color='danger'
              onClick={signInWithGoogle}
            >
              <FaGoogle />
              Iniciar Sesion
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}