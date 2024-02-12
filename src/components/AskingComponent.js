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
import { questions } from '../services/DataServices';


export default function AskingComponent() {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [numOne, setNumOne] = useState('');
const [numTwo, setNumTwo] = useState('');
const [result, setResult] = useState('Your results will appear here.');

const getResult = async() => {
    if(numOne == '' || numTwo == ''){
        setResult("Please fill in all the fields!");
        return;
    }
    const promise = await questions(numOne, numTwo);
    setResult(promise);
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
        <h1 className="main-title-2">Asking Questions</h1>
        <p className="subs separate-bottom">Answer a couple questions here.</p>
        
            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            What is your name?: 
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNumOne(e.target.value)} />
            </Col>
            </Form.Group>
            </Form>

            <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
            <Form.Label column sm="8" lg="6" md="6">
            What time did you wake up?: 
            </Form.Label>
            <Col sm="4" lg="6" md="6">
            <Form.Control type="text" onChange={(e) => setNumTwo(e.target.value)} />
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
