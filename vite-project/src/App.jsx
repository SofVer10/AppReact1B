import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh', // Ocupa toda la altura de la ventana
    }}>
      <div style={{
        backgroundColor: '#ffffff', // Fondo blanco para el formulario
        border: '2px solid #ff69b4', // Borde rosado
        borderRadius: '15px', // Bordes más redondeados
        padding: '30px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)', // Sombra más pronunciada
        maxWidth: '350px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif'
      }}>
        <h2 style={{ color: '#4b0082' }}>Ingrese los Números</h2> {/* Color morado oscuro */}

        <p style={{ margin: '15px 0', color: '#333' }}>Número 1</p>
        <input type='text' style={{
          width: '100%',
          padding: '12px',
          border: '2px solid #ff69b4', // Borde rosado
          borderRadius: '8px', // Bordes redondeados
          boxSizing: 'border-box',
          marginBottom: '15px',
          fontSize: '1rem'
        }} />

        <p style={{ margin: '15px 0', color: '#333' }}>Número 2</p>
        <input type='text' style={{
          width: '100%',
          padding: '12px',
          border: '2px solid #ff69b4', // Borde rosado
          borderRadius: '8px', // Bordes redondeados
          boxSizing: 'border-box',
          marginBottom: '15px',
          fontSize: '1rem'
        }} />

        <button style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#ff69b4', // Fondo rosado
          color: 'white',
          border: 'none',
          borderRadius: '8px', // Bordes redondeados
          cursor: 'pointer',
          fontSize: '1rem',
          transition: 'background-color 0.3s ease' // Transición suave
        }} 
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#ff1493'} // Color más oscuro al pasar el mouse
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#ff69b4'} // Regresar al color original
        >
          Enviar
        </button>
      </div>
    </div>
  );
}

export default App;