import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [count, setCount] = useState(0);
  // Count is Variable
  // SetCount is function to update variable

  return (
    <>

  <Navbar expand="lg" className="bg-body-tertiary flex">
        <Container>
          <Navbar.Brand href="#home">ALL FOR ONE</Navbar.Brand>
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

    <div className="center">
      <p className="wow">Hi</p>

      <div>
        <Button variant="primary" onClick={handleShow}>
          Open APIs
        </Button>
      </div>
    </div>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button variant="primary">Primary</Button>{' '}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default App;
