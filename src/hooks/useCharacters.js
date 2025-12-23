import { useState, useEffect } from "react";
import axios from "axios";

const CHAR_URL = "https://rickandmortyapi.com/api/character";
//const EP_URL = "https://rickandmortyapi.com/api/episode";

export const charactersMessages = {
   limitReached: 'Characters limit reached',
   alreadyCalled: 'Character already called',
   notFound: 'Character not found',
   invalidId: 'Invalid ID',
};

export function useCharacters(handlePopUp) {

    const [allCharacters, setAllCharacters] = useState([]);
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
       const fetchAllCharacters = async () => {
          try {
             let allCharactersData = [];
             let page = 1;
             let totalPages = 1
             while(page <= totalPages){
                const response = await axios.get(`${CHAR_URL}?page=${page}&limit=100`);
                const {results, info} = response.data;
                allCharactersData = allCharactersData.concat(results);
                totalPages = info.pages;
                page++;
             }
             setAllCharacters(allCharactersData)
          } catch (error) {
             console.error(error)
          }
       }
       fetchAllCharacters();
    },[])

    // onSearch
    const onSearch = (id) => {
       if(!id){
          /* alert('Invalid ID'); */
          handlePopUp(charactersMessages.invalidId)
          return;
       }
       
       const numericId = Number(id)
       const character = allCharacters.find(char => char.id === numericId);

       if(character){
          if(characters.some(char => char.id === character.id)){
             /* alert('Character already called') */
             handlePopUp(charactersMessages.alreadyCalled)
          } else {
             setCharacters(prevChars => [...prevChars, character])
          }
       } else {
          /* alert('Character not found') */
          handlePopUp(charactersMessages.notFound)
       }
    };

    // onRandom
    const onRandom = () => {
      const available = allCharacters.filter(
        char => !characters.some(c => c.id === char.id)
      );

      if (available.length === 0) {
        handlePopUp(charactersMessages.limitReached);
        return;
      }

      const randomChar =
        available[Math.floor(Math.random() * available.length)];

      setCharacters(prev => [...prev, randomChar]);
    };

    return {
        allCharacters,
        characters,
        charactersCount: characters.length,
        onSearch,
        onRandom,
        clearAll: () => setCharacters([]),
        showAll: () => setCharacters(allCharacters),
        onClose: id => setCharacters(chars => chars.filter(c => c.id !== id))
    };
};