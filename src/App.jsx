import { Routes, Route, useLocation } from 'react-router-dom';
import Form from './components/Form/Form.jsx';
import Error from './views/Error/Error.jsx';
import About from './views/About/About.jsx';
import Nav from './components/Nav/Nav.jsx';
import NavSimple from './components/NavSimple/NavSimple.jsx';
import Cards from './components/Cards/Cards.jsx';
import Favorites from './views/Favorites/Favorites.jsx';
import Detail from './views/Detail/Detail.jsx';
import PopUp from './components/PopUp/PopUp.jsx';
import { useCharacters } from './hooks/useCharacters.js';
import { useAuth } from './hooks/useAuth.js';
import usePopUp from './hooks/usePopUp.js';

function App() {

   const location = useLocation();
   const { alertActive, popupMessage, handlePopUp } = usePopUp();
   const { 
      login, 
      logout, 
      demoUser,
      useDemoCredentials, 
      DEMO_CREDENTIALS 
   } = useAuth();

   const {
      allCharacters,
      characters,
      charactersCount,
      onSearch,
      onRandom,
      clearAll,
      showAll,
      onClose
   } = useCharacters(handlePopUp)

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
