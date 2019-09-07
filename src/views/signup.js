import React, { useState } from 'react'
import {
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
  Button,
  Spinner
} from 'reactstrap'
import { FaGoogle } from 'react-icons/fa'
import { Auth, GoogleProvider, Database } from '../utils/firebase'

export default () => {
  const [loading, setLoading] = useState(false)

  const signInWithGoogle = async () => {
    try {
      setLoading(true)
      const { user } = await Auth.signInWithPopup(GoogleProvider)
      Database.ref(`users/${user.uid}`).update({
        name: user.displayName,
        photo: user.photoURL,
        email: user.email
      })
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
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
              className={`d-flex justify-content-${loading ? 'center' : 'between'} align-items-center px-5`}
              block
              outline
              color='danger'
              onClick={signInWithGoogle}
              disabled={loading}
            >
              {
                loading
                  ? <Spinner color='danger' />
                  : <><FaGoogle /> Iniciar Sesion</>
              }
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  )
}