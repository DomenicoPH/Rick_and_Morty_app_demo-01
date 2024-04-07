import Card from '../Card/Card';
import OrderFilter from '../OrderFilter/OrderFilter';
import style from '../Cards/Cards.module.css'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const logo = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712428822/rick_and_morty/rmlogo_dxntuf.png'

export default function Cards({characters, onClose}) {

   const location = useLocation();
   const filtered = useSelector(state => state.filtered)

   return (
      <div className={style.superContainer}>

         {location.pathname === '/home' && characters.length === 0 && <div className={style.spacerHome}></div>}
         {location.pathname === '/favorites' && characters.length === 0 && <div className={style.spacerFav}></div>}
         {location.pathname === '/favorites' && filtered.length === 0 && <OrderFilter filtered={characters}/>}
         <div className={characters.length === 0 ? style.logo : style.hidden}>
            <img className={style.logoimage} src={logo} alt='Rick & Morty Logo' />
            <h1 className={style.logotext}>Character Searching Engine</h1>
         </div>

         <div className={characters.length === 0 ? style.hidden : ''}>
            <div className={style.container}>
               {location.pathname === '/favorites' && <OrderFilter filtered={characters}/>}
               {
                  characters.map(char => (
                     <Card 
                        key={char.id}
                        id={char.id}
                        name={char.name ? char.name : ''}
                        status={char.status}
                        species={char.species}
                        gender={char.gender}
                        origin={char.origin ? char.origin.name : ''}
                        image={char.image}
                        onClose={() => onClose(char.id)}
                     />
                  ))
               }
            </div>
         </div>
         
      </div>
   );
}
