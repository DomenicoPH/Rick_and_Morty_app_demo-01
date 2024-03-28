import { useState, useRef } from 'react';
import style from '../SearchBar/SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState([])
   const inputRef = useRef(null)

   const handleChange = (e) => {
      const {value} = e.target;
      setCharacter(value)
      //console.log('Esto es value', value)
   }
   //console.log('Esto es character',character)

   const cleanInput = () => {
      setCharacter('')
   }

   const handleSearch = () => {
      props.onSearch(character);
      inputRef.current.focus();
   }

   const handleKeyPress = (e) => {
      if(e.key === 'Enter'){
         e.preventDefault();
         handleSearch();
         cleanInput()
      }
   }

   return (
      <div className={style.container}>
         <h2 className={style.indicador}>ID:</h2>
         <input 
            ref={inputRef}
            type='search' 
            name='search'
            id='search'
            placeholder='id here'
            value={character}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
         />
         <button onClick={handleSearch}>Search!</button>
      </div>
   );
}

/* Funcionamiento Componente SearchBar:

   1. Al hacer algún cambio en el input del SearchBar se ejecutará la función handleChange.
      handleChange guarda el texto ingresado en el input en la variable 'value' y modifica 
      el estado del componente (setCharacter) asignándole el valor de 'value'.
      Ahora el estado del componente (character) es 'value'.
   
   2. Al hacer click en el boton se dispara la función 'onSearch' con el estado 'character'
      como parámetro. Esta función es pasada por props desde 'App.jsx':

         function onSearch(id) {
            axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(
               ({ data }) => {
                  if (data.name) {
                     setCharacters((oldChars) => [...oldChars, data]);
                  } else {
                     window.alert('¡No hay personajes con este ID!');
                  }
               }
            );
         }

      Digamos que hemos escrito el id '10' en el input: onSearch(id) => onSearch(character) => onSearch(10)
      axios pedirá a la API la información del personaje con id '10'. Cuando obtenga respuesta la manejará
      con el método .then() preguntándo si dentro de la 'data' obtenida existe la propiedad 'name' (data.name).
      Si es así es que hubo coincidencia y actualizará el estado añadiendo al nuevo personaje (id:10) a los
      añadidos previamente.
      Si no hay coincidencia lanzará un alert: '¡No hay personajes con este ID!'

*/