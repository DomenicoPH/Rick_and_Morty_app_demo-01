import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css'
import { connect } from "react-redux";

const Detail = ({allCharacters, favorites}) => {

    const { id } =  useParams();

    const location = useLocation()
    
    const [character, setCharacter] = useState([])

     useEffect(() => {
        const characterFromState = allCharacters.find(char => char.id === parseInt(id))
        if(characterFromState){
            setCharacter(characterFromState)
        } else {
            alert('character not found')
        }
     },[id, allCharacters])

     const handleBack = () => {
        if(location.state && location.state.from){
            return location.state.from
        }
        return '/'
     }

     const isFavorite = character && favorites.some(fav => fav.id === character.id)

    return(
        <div className={isFavorite ? style.containerFavorites : style.container}>

                    <div className={style.infoBlock}>

                        <h1 className={style.name}>{character.name}</h1>
                        <img className={style.image} src={character.image} alt={character.name} />
                        <h1 className={style.id}><span className={style.idlabel}>Character ID: </span>{character.id}</h1>
                        {character.status && (<div className={style.dataContainer}><span className={style.datalabel}>Status: </span> <h2 className={style.datainfo}>{character.status}</h2></div>)}
                        {character.species && (<div className={style.dataContainer}><span className={style.datalabel}>Specie: </span> <h2 className={style.datainfo}>{character.species}</h2></div>)}
                        {character.gender && (<div className={style.dataContainer}><span className={style.datalabel}>Gender: </span> <h2 className={style.datainfo}>{character.gender}</h2></div>)}
                        {character.type && (<div className={style.dataContainer}><span className={style.datalabel}>Type: </span> <h2 className={style.datainfo}>{character.type}</h2></div>)}
                        {character.origin && (<div className={style.dataContainer}><span className={style.datalabel}>First seen in: </span> <h2 className={style.datainfo}>{character.origin.name}</h2></div>)}
                        {character.location && (<div className={style.dataContainer}><span className={style.datalabel}>Last known location: </span> <h2 className={style.datainfo}>{character.location.name}</h2></div>)}

                        <Link className={style.backButton} to={handleBack()}>Back</Link>

                    </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        favorites: state.favorites
    }
}

export default connect(mapStateToProps,null)(Detail);