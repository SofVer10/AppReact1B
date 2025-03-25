import { useState } from 'react';
import Calculadora from './components/calculadora/calculadora';
import Todo from './components/Todo/Todo';
import StudentList from './components/students/students';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

    <Calculadora/>
<Todo/>
<br />
<StudentList/>
    </>
  );
}

export default App;