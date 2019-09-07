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

export default () => {
  return (
    <Row fluid>
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
              lg
              outline
              color='danger'
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