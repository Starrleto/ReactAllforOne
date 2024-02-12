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


export default function PageTwoComponent() {

const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [count, setCount] = useState(0);

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
        <h1 className="main-title">Welcome to All For One</h1>
        <div className="segment">
        <p className="subs">The home for every API I was forced to make.</p>
        <p className="subs">Navigate to <span className="bold">Open APIs</span> to get started.</p>
        </div>
            <Button onClick={handleShow} variant="main">
            Open APIs
            </Button>
        </div>

        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton className="justify-content-end pink-bg">
            </Offcanvas.Header>
            <Offcanvas.Body className="pink-bg">
            <div className="canvas-body">
                <Button variant="list" as={Link} to={'pageTwo'}>Say Hello</Button>
                <Button variant="list" as={Link} to={'add'}>Adding</Button>
                <Button variant="list" as={Link} to={'ask'}>Asking Questions</Button>
                <Button variant="list" as={Link} to={'compare'}>Greater or Less</Button>
                <Button variant="list" as={Link} to={'madlibs'}>MadLib</Button>
                <Button variant="list" as={Link} to={'oddeven'}>Odd or Even</Button>
                <Button variant="list" as={Link} to={'reverseword'}>Reverse Letters</Button>
                <Button variant="list" as={Link} to={'reversenum'}>Reverse Numbers</Button>
                <Button variant="list" as={Link} to={'magic'}>Magic 8 Ball</Button>
                <Button variant="list" as={Link} to={'restaraunt'}>Restaraunt Picker</Button>
            </div>
            </Offcanvas.Body>
        </Offcanvas>
    </>
  )
}