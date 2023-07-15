import { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import './App.css';

const Contacto = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [rut, setRut] = useState('');

  function validarFormulario(e) {
    e.preventDefault();
    if (nombre === '' || email === ''|| rut === ''|| telefono === '') {
      alert('Todos los campos se deben llenar');
      return;
    }

    else {
      const agregarReserva = async () => {
        // Agregar un nuevo documento con un ID generado automáticamente
        const docRef = await addDoc(collection(db, 'reserva'), {
          nombre,
          email,
          rut,
          telefono
        });
        alert("Gracias por reservar con nosotros.")
        console.log('Documento creado con ID: ', docRef.id);
        setNombre('');
        setEmail('');
        setTelefono('');
        setRut('');
      };
      agregarReserva();
    }
  }

  return (
    <div className='container-formulario'>
      <div className='textoformu'>
        <h1>Agenda con anticipación</h1>
        <p>Nuestras mesas siempre están ocupadas, por lo que rogamos que agenden con anticipación su cena.</p>
      </div>
      <div className='formu'>
        <form id="form" onSubmit={validarFormulario}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre" 
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="rut">Rut:</label>
            <input
              type="text"
              id="rut"
              value={rut}
              onChange={(e) => setRut(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="telefono">Telefono:</label>
            <input
              type="number"
              id="telefono"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">RESERVAR</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
