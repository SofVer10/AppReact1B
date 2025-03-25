import React, { useState } from 'react';
import './Calculadora.css'; 

const Calculadora = () => {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [resultado, setResultado] = useState(null);

    const handleSumar = () => {
        const suma = parseFloat(num1) + parseFloat(num2);
        setResultado(suma);
    };

    const handleRestar = () => {
        const resta = parseFloat(num1) - parseFloat(num2);
        setResultado(resta);
    };

    const handleMultiplicar = () => {
        const multiplicacion = parseFloat(num1) * parseFloat(num2);
        setResultado(multiplicacion);
    };

    const handleDividir = () => {
        const division = parseFloat(num1) / parseFloat(num2);
        setResultado(division);
    };

    return (
        <div className="calculadora-container">
            <h1 className="calculadora-title">Calculadora</h1>
            <div className="calculadora-card">
                <input
                    type="number"
                    placeholder="Número 1"
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                    className="calculadora-input"
                />
                <input
                    type="number"
                    placeholder="Número 2"
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                    className="calculadora-input"
                />
                <div className="calculadora-buttons">
                    <button onClick={handleSumar} className="calculadora-button">Sumar</button>
                    <button onClick={handleRestar} className="calculadora-button">Restar</button>
                    <button onClick={handleMultiplicar} className="calculadora-button">Multiplicar</button>
                    <button onClick={handleDividir} className="calculadora-button">Dividir</button>
                </div>
                {resultado !== null && <p className="calculadora-result">Resultado: {resultado}</p>}
            </div>
        </div>
    );
};

export default Calculadora;