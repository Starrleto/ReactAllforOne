import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


export default function InputComponent() {
  return (
    <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="4">
        Enter your name: 
        </Form.Label>
        <Col sm="8">
        <Form.Control type="text" className="help" />
        </Col>
        </Form.Group>
    </Form>
  )
}
