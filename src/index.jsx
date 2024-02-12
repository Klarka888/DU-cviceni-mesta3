import React from 'react';
import { createRoot } from 'react-dom/client';
import City from './components/City/City';
import { cities } from './cz-cities';
import './global.css'

const App = () => {
  return(
    <>
    <h1>ČESKÁ MĚSTA</h1>
   { 
cities.map((city) => (
  <City key={city.name}
  name={city.name}
  population={city.population}
  area={city.area}
  district={city.district}
  photo={city.photo}>
  </City>
))
  }
  </>
  )
}


createRoot(
  document.querySelector('#app'),
).render(<App />);
