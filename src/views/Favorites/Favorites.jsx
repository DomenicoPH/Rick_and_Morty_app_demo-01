import { useEffect } from "react"
import Cards from "../../components/Cards/Cards"
import { resetFavorites } from "../../redux/actions"
import style from "./Favorites.module.css"
//Redux
import { connect } from "react-redux"

const Favorites = ({filtered, favorites, resetFavorites}) => {

    useEffect(() => {
        resetFavorites();
    },[favorites,resetFavorites])

    return(
        <div className={style.container}>
            <Cards characters={filtered}/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        filtered: state.filtered,
        favorites: state.favorites,
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        resetFavorites: () => dispatch(resetFavorites())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Favorites);