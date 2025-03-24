import { useState } from 'react';
import Calculadora from './components/calculadora/calculadora';
import Todo from './components/Todo/Todo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>

    <Calculadora/>
<Todo/>
    </>
  );
}

export default App;