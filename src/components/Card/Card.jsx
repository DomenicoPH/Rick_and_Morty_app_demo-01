import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import style from '../Card/Card.module.css'
import unlike from '../../assets/img/heart.svg'
import like from '../../assets/img/heart_filled.svg'
import close from '../../assets/img/close.svg'
import { useLocation } from 'react-router-dom';
//redux
import { connect } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/actions';


function Card(props) {

   const {addFavorite, removeFavorite, favorites} = props;
   const [favorite, setFavorite] = useState(false)
   const navigate = useNavigate();

   const { pathname } = useLocation() // Toma la ruta actual

   useEffect(() => {
      favorites.forEach((fav) => {
         if(fav.id === props.id){
            setFavorite(true)
         }
      })
   },[favorites])

   const navigateHandler = () => {
      navigate(`/detail/${props.id}`, {state: {from: pathname}})
   }

   const handleFavorite = (character) => {
      if(!favorite){
         addFavorite(character)
         setFavorite(true);
      } else {
         removeFavorite(character)
         setFavorite(false)
      }
   }
   
   return (
      <div className={favorite ? style.containerFavorite : style.container}>

         <div className={style.topContainer}>
            
            {
            favorite ? (
                  <button className={style.cardFav} onClick={() => handleFavorite(props.id)}>
                     <img src={like} alt='favorite icon' />
                  </button>
               ) : (
                  <button className={style.cardFav} onClick={() => handleFavorite(props)}>
                     <img src={unlike} alt='favorite icon' />
                  </button>
               )
            }
            
            <h1 className={style.cardTitleId}>{props.id}</h1>
            
            {pathname === '/home' && <button className={style.cardClose} onClick={props.onClose}><img src={close} alt="Close icon" /></button>}
            
         </div>

         <img 
            onClick={navigateHandler} 
            className={style.cardImg} 
            src={props.image} 
            alt={props.name} 
         />
         
         <h2 className={style.cardDataName}>{props.name}</h2>

      </div>
   );
}

/* mapStateToProps: Trae el estado de redux a las props del componente. */
const mapStateToProps = (state) => {
   return {
      favorites: state.favorites
   }
};

/* mapDispatchToProps: Trae a las props del componente el 'dispatch' de las 'actions' */
const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => dispatch(addFavorite(character)),
      removeFavorite: (id) => dispatch(removeFavorite(id))
   }
};

export default connect(mapStateToProps, mapDispatchToProps)(Card)