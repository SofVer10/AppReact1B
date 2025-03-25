import { useState } from 'react';
import Calculadora from './pages/calculadora/calculadora';
import Todo from './pages/Todo/Todo';
import StudentList from './pages/students/students';
import Sofia from './pages/info/info';
import Contact from './pages/Contact';
import {BrowserRouter as Router, Routes, Route} from 'react-router'

import Nav from './components/Nav';

function App() {

  return (
    <>

  <Router>
    <Nav/>
    <Routes>
      <Route path='/Calculadora' element={<Calculadora/>}></Route>
      <Route path='/Todo' element={<Todo/>}></Route>
      <Route path='/StudentList' element={<StudentList/>}></Route>
      <Route path='/Sofia' element={<Sofia
nombre={"Sofia Palacios Lara"}
edad= {"18 añitos"}
especialidad={"Software"}
direccion={"San Salvador Este"}
codigo={"20230106"}
fechaNacimiento={"18/10/2006"} />}></Route>
<Route path='Contact' element={<Contact/>}></Route>
    </Routes>
    
  </Router>
    </>
  );
}

export default App;