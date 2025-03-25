import React from 'react';
import './info.css'; 

const Sofia = ({ nombre, edad, especialidad, direccion, codigo, fechaNacimiento }) => {
    return (
        <div className="sofia-container">
            <h3 className="sofia-title">Información Personal</h3>
            <div className="sofia-info">
                <p><strong>Nombre Completo:</strong> {nombre}</p>
                <p><strong>Edad:</strong> {edad}</p>
                <p><strong>Especialidad:</strong> {especialidad}</p>
                <p><strong>Dirección:</strong> {direccion}</p>
                <p><strong>Código:</strong> {codigo}</p>
                <p><strong>Fecha de Nacimiento:</strong> {fechaNacimiento}</p>
            </div>
        </div>
    );
};

export default Sofia;