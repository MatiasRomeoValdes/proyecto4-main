import { useState } from 'react'
import { db } from './firebase';
import { collection, setDoc, addDoc } from "firebase/firestore";
import './App.css'
import { useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)



  return (
<div className='menu'>
  <h1>Restaurant</h1>
  <div className='menu-foto'>
      <img src="https://www.travelreport.mx/wp-content/uploads/2018/06/Restaurantes-bajo-el-mar-IthaaUnderseaRestaurant2.jpg" alt="Restaurant" />
      <div className='parra'>
        <p>Bienvenidos al restaurante submarino más espectacular que hayan visto jamás. Sumérjanse en una experiencia culinaria única mientras disfrutan de la belleza del océano. Este restaurante ha sido diseñado para proporcionar una vista impresionante de la vida marina circundante mientras se deleitan con deliciosos platos de mariscos frescos.</p>
        <p className='parr2'>El restaurante está ubicado a una profundidad segura de 5 metros debajo del nivel del mar, y cuenta con grandes ventanales de pared a pared que ofrecen vistas panorámicas del agua cristalina y los coloridos corales. El ambiente es mágico, con la luz filtrada del sol que crea reflejos en el agua y una sensación de paz y tranquilidad.</p>
  
      </div>

  </div>
  <h1>Restaurant</h1>
</div>
  )

}

export default App
