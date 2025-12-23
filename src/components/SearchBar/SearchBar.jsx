import { useState, useRef } from 'react';
import style from '../SearchBar/SearchBar.module.css'

export default function SearchBar(props) {

   const [character, setCharacter] = useState([])
   const inputRef = useRef(null)

   const handleChange = (e) => {
      const {value} = e.target;
      setCharacter(value)
   }

   const cleanInput = () => {
      setCharacter('')
   }

   const handleSearch = () => {
      props.onSearch(character);
      inputRef.current.focus();
      cleanInput()
   }

   const handleKeyPress = (e) => {
      if(e.key === 'Enter'){
         e.preventDefault();
         handleSearch();
      }
   }

   return (
      <div className={style.container}>
         <input 
            ref={inputRef}
            type='search' 
            name='search'
            id='search'
            placeholder='id'
            value={character}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
         />
         <button onClick={handleSearch}>Search!</button>
      </div>
   );
}