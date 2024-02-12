import './App.css';
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
import InputComponent from './components/InputComponent';
import HomePageComponent from './components/HomePageComponent';
import SayHelloComponent from './components/SayHelloComponent';
import MagicEightComponent from './components/MagicEightComponent';
import OddEvenComponent from './components/OddEvenComponent';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ReverseLetterComponent from './components/ReverseLetterComponent';
import ReverseNumComponent from './components/ReverseNumComponent';
import RestarauntPickerComponent from './components/RestarauntPickerComponent';
import AddNumsComponent from './components/AddNumsComponent';
import CompareComponent from './components/CompareComponent';
import AskingComponent from './components/AskingComponent';
import MadlibComponent from './components/AskingComponent';

function App() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [count, setCount] = useState(0);
  // Count is Variable
  // SetCount is function to update variable

  return (
    <>
  
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePageComponent></HomePageComponent>}/>
      <Route path='pageTwo' element={<SayHelloComponent></SayHelloComponent>}/>
      <Route path='magic' element={<MagicEightComponent></MagicEightComponent>}></Route>
      <Route path='oddeven' element={<OddEvenComponent></OddEvenComponent>}></Route>
      <Route path='reversenum' element={<ReverseNumComponent></ReverseNumComponent>}></Route>
      <Route path='reverseword' element={<ReverseLetterComponent></ReverseLetterComponent>}></Route>
      <Route path='restaraunt' element={<RestarauntPickerComponent></RestarauntPickerComponent>}></Route>
      <Route path='add' element={<AddNumsComponent></AddNumsComponent>}></Route>
      <Route path='compare' element={<CompareComponent></CompareComponent>}></Route>
      <Route path='ask' element={<AskingComponent></AskingComponent>}></Route>
      <Route path='madlibs' element={<MadlibComponent></MadlibComponent>}></Route>
    </Routes>
  </BrowserRouter>

    </>
  );
}

export default App;
