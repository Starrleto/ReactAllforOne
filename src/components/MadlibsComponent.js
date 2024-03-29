import React from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OffcanvasHeader } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputComponent from './InputComponent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import { madlibs } from '../services/DataServices';


export default function MadlibsComponent() {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [numOne, setNumOne] = useState('');
const [numTwo, setNumTwo] = useState('');
const [num3, setNum3] = useState('');
const [num4, setNum4] = useState('');
const [num5, setNum5] = useState('');
const [num6, setNum6] = useState('');
const [num7, setNum7] = useState('');
const [num8, setNum8] = useState('');
const [num9, setNum9] = useState('');
const [num10, setNum10] = useState('');
const [result, setResult] = useState('Your results will appear here.');

const getResult = async() => {
    if(numOne == '' || numTwo == '' || num3 ==''|| num4 ==''|| num5==''||num6==''||num7==''||num8==''||num9==''||num10==''){
        setResult("Please fill in all the fields!");
        return;
    }
    const promise = await madlibs(numOne, numTwo, num3, num4, num5, num6, num7, num8, num9, num10);
    let result = "";
    
    promise.forEach(element => {
        result+= element+" ";
    });
    setResult(result);
}

  return (
    <>
    <style type="text/css">
            {`
        .btn-main {
        background-color: #B19595;
        color: white;
        padding: 15px;
        border-radius: 30px;
        margin-top: 40px;
        width:140px;
        }
        .btn-main:hover{
        background-color: #9E7D7D;
        color: white;
        }

        .btn-list {
        background-color: #EBEBEB;
        color: #381D1D;
        padding: 15px;
        border-radius: 0px;
        margin-top: 5px;
        font-family:inria;
        }
        .btn-list:hover{
        background-color: #DBDBDB;
        color: #381D1D;
        }

        `}
        </style>

    <Navbar expand="lg" className="flex funny-navbar">
        <Container>
            <Nav.Link as={Link} to={'/'} className="afo"><h1 className="afo"> ALL FOR ONE </h1></Nav.Link>
            <Button variant="primary" onClick={handleShow} className="d-md-block d-lg-none">
            Open APIs
            </Button>
        </Container>
        <Container>
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav activeKey="/home">
                <Nav.Link variant="primary" onClick={handleShow}>Open APIs</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

        <div className="center top-padding body-padding">
        <h1 className="main-title-2">Madlibs</h1>
        <p className="subs separate-bottom">Play a game of madlibs by entering words.</p>
        
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter a Living thing: 
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNumOne(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter an Emotion:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNumTwo(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter a noun:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNum3(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter a name:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNum4(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter an Adjective:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNum5(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter another name:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNum6(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter an object:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNum7(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter another living thing:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNum8(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter another noun:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNum9(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            Enter a place to hide:
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNum10(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <div className="separate-top">
            <Button onClick={() => getResult()} variant="main">
            Send
            </Button>
            </div>
            <div className="result-box">
                <p>{result}</p>
            </div>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton className="justify-content-end pink-bg">
            </Offcanvas.Header>
            <Offcanvas.Body className="pink-bg">
            <div className="canvas-body">
                <Button variant="list">Say Hello</Button>
                <Button variant="list">Adding</Button>
                <Button variant="list">Asking Questions</Button>
                <Button variant="list">Greater or Less</Button>
                <Button variant="list">MadLib</Button>
                <Button variant="list">Odd or Even</Button>
                <Button variant="list">Reverse Letters</Button>
                <Button variant="list">Reverse Numbers</Button>
                <Button variant="list">Magic 8 Ball</Button>
                <Button variant="list">Restaraunt Picker</Button>
            </div>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}
