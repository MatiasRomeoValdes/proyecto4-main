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
        alert("Un ejecutivo se contactara para terminar la reserva")
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
        <h1>Cena Privada</h1>
        <p>Si desean celebrar un evento especial, nuestro restaurante submarino también ofrece una opción de cena privada. Imaginen una cena romántica bajo el agua con su ser querido, rodeados de la belleza natural del océano. Este será un recuerdo que durará para toda la vida.</p>
        <p>No esperen más y hagan una reserva para experimentar una aventura culinaria inolvidable en nuestro restaurante submarino.</p>
        <p>solo registre sus datos y un ejecutico se comunicara con usted</p>
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
          <button type="submit">Quiero reservar</button>
        </form>
      </div>
    </div>
  );
};

export default Contacto;
