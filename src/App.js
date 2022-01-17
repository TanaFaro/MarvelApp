import './styles.scss';
import axios from 'axios';
import Personaje from './Personaje';
import { useState, useEffect } from 'react';

function App() {

   const [personajes, setPersonajes] = useState([])

   useEffect(() => {
      axios.get(`https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=${process.env.REACT_APP_KEY}&hash=${process.env.REACT_APP_HASH}`).then(resp => {
         setPersonajes(resp.data.data.results)

      }).catch(error => console.log(error))
   }, [])

   console.log(personajes)


   return (
      <div className='App'>
         <h1>MARVEL</h1>
         <div className="personajes-container">
            {
               personajes.map( personaje => (
               <Personaje personaje={personaje} key={personaje.id}/>
               ))
            }
         </div>
      </div>
   );
}

export default App;

