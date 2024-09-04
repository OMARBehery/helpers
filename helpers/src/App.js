import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import AddClient from './components/AddClient';
import AddHelper from './components/AddHelper';
import Client from './components/Client';
import Helper from './components/Helper';
import ClientList from './components/ClientList';
import HelperList from './components/HelperList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ClientDetails from './components/ClientDetails';
function App() {
  return (
  <>

  <BrowserRouter>
  <Nav/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/addc" element={<AddClient/>}/>
  <Route path="/addh" element={<AddHelper/>}/>

  <Route path="/clients" element={<ClientList/>}/>
  <Route path="/helpers" element={<HelperList/>}/>
  
  <Route path="/:id" element={<ClientDetails/>}/>
  </Routes>
  
  
  
  
  
  </BrowserRouter>
  </>
  );
}

export default App;