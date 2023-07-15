import { useState } from 'react'
import { db } from './firebase';
import { collection, setDoc, addDoc } from "firebase/firestore";
import './App.css'
import { useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)



  return (
<div className='menu'>
  <h1>PIZZA/PASTA</h1>
  <div className='menu-foto'>
      <img src="https://media-cdn.tripadvisor.com/media/photo-s/1a/16/32/e3/wine-room-dari-ristorante.jpg" alt="Restaurant" />
      <div className='parra'>
        <p>Bienvenidos a PIZZA/PASTA, el mejor restaurante</p>
        <p className='parr2'>El mejor restaurante de comida italiana. Traída por sus dueños, quienes poseen más de 20 años de experiencia en cocina toscana, siciliana y napolitana. Con productos unica y exclusivamente desde las fronteras más locales de Italia, encontrarás una experiencia jamas antes vivida.</p>
  
      </div>

  </div>
  <h1>PIZZA/PASTA</h1>
</div>
  )

}

export default App
