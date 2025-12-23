import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form.jsx';
import Error from './views/Error/Error.jsx';
import About from './views/About/About.jsx';
import Nav from './components/Nav/Nav.jsx';
import NavSimple from './components/NavSimple/NavSimple.jsx';
import Cards from './components/Cards/Cards.jsx';
import Favorites from './views/Favorites/Favorites.jsx';
import Detail from './views/Detail/Detail.jsx';
import PopUp from './components/PopUp/PopUp.jsx';

function App() {

   //URL
   const CHAR_URL = "https://rickandmortyapi.com/api/character";
   const EP_URL = "https://rickandmortyapi.com/api/episode";

   const messages = {
      error1: 'Characters limit reached',
      error2: 'Character already called',
      error3: 'Character not found',
      error4: 'Invalid ID',
   }

   // Estados:
   const [allCharacters, setAllCharacters] = useState([]);
   const [characters, setCharacters] = useState([]);

   const [access, setAccess] = useState(false); //ABIERTO, cambiar a 'false'

   const [alertActive, setAlertActive] = useState(false)
   const [popupMessage, setPopupMessage] = useState('')

   const [demoUser, setDemoUser] = useState(null)

   const handlePopUp = (message) => {
      setPopupMessage(message)   //Establece cual es el mensaje.
      setAlertActive(!alertActive)  //Establece si el popup es visible o no.
   }

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

   // Datos de acceso:
   const DEMO_CREDENTIALS = {
      username: 'rick@morty.com',
      password: 'earth-c137',
   }

   const useDemoCredentials = () => {
     setDemoUser(DEMO_CREDENTIALS)
   }

   const navigate = useNavigate()

   // Login
   function login(userData){
      if(userData.username !== DEMO_CREDENTIALS.username) return 'Invalid username'
      if(userData.password !== DEMO_CREDENTIALS.password) return 'Invalid password'
      setAccess(true);
      navigate('/home');
      return null;
   }

   // Automatic logout
   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   // Logout
   function logout(){
      setAccess(false);
      navigate('/')
   }

   // free pass
   const freepass = () => {
      setAccess(true)
      navigate('/home')
   }


   // onSearch
   const onSearch = (id) => {
      if(!id){
         /* alert('Invalid ID'); */
         handlePopUp(messages.error4)
         return;
      }
      const character = allCharacters.find(char => char.id == id);
      if(character){
         if(characters.some(char => char.id === character.id)){
            /* alert('Character already called') */
            handlePopUp(messages.error2)
         } else {
            setCharacters(prevChars => [...prevChars, character])
         }
      } else {
         /* alert('Character not found') */
         handlePopUp(messages.error3)
      }
   };
   

   // onRandom
   const onRandom = () => {
     const available = allCharacters.filter(
       char => !characters.some(c => c.id === char.id)
     );

     if (available.length === 0) {
       handlePopUp(messages.error1);
       return;
     }

     const randomChar =
       available[Math.floor(Math.random() * available.length)];

     setCharacters(prev => [...prev, randomChar]);
   };



   // Función clearAll
   function clearAll(){
      setCharacters([])
   }

   // Función showAll
   function showAll(){
      setCharacters(allCharacters)
   }

   // Función onClose
   function onClose(id) {
      setCharacters(characters.filter((char) => char.id !== id))
   }

   // Cuenta de Personajes
   const charactersCount = characters.length

   const location = useLocation()

   // return -----------------------------------------------------
   return (

      <div className='App'>
         
         {alertActive && <PopUp handlePopUp={handlePopUp} message={popupMessage}/>}
         {location.pathname !== '/' && <Nav onSearch={onSearch} onRandom={onRandom} charactersCount={charactersCount} clearAll={clearAll} showAll={showAll} logout={logout} />}
         {location.pathname !== '/' && <NavSimple onSearch={onSearch} onRandom={onRandom} charactersCount={charactersCount} clearAll={clearAll} showAll={showAll} logout={logout} />}
         
         <Routes>
            <Route 
               exact path='/'
               element={<Form 
                  login={login} 
                  handlePopUp={handlePopUp}
                  freepass={freepass} 
                  useDemoCredentials={useDemoCredentials}
                  demoUser={demoUser}
                  demoCredentials={DEMO_CREDENTIALS}
               />}
            />
            <Route 
               path='/home' 
               element={<Cards characters={characters} onClose={onClose}/>} />
            <Route 
               path='/favorites'
               element={<Favorites />} />
            <Route 
               path='/detail/:id' 
               element={<Detail allCharacters={allCharacters}/>} />
            <Route 
               path='/about' 
               element={<About />} />
            <Route
               path='*'
               element={<Error />} />
         </Routes>
         
      </div>
   );
}

export default App;
