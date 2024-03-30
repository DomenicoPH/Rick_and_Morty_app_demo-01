import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

import style from './NavSimple.module.css'
import powerOff from '../../assets/img/powerOff.svg'

export default function NavSimple(props){
    return (
        <div className={style.container}>
            
            <div className={style.middle}>

                <div className={style.searchBarAndCount}>
                    <SearchBar onSearch={props.onSearch}/>
                    <div className={style.count}>{props.charactersCount}</div>
                    <button onClick={props.logout} className={style.botonLogOut}><img src={powerOff} alt="Log out"/></button>
                </div>

                <div className={style.links}>
                    <Link to={'/about'}>
                        <button className={style.boton}>About</button>
                    </Link>
                    <Link to={'/home'}>
                        <button className={style.boton}>Home</button>
                    </Link>
                    <Link to={'/favorites'}>
                        <button className={style.boton}>Favorites</button>
                    </Link>
                </div>

                <div className={style.buttons}>
                    <button onClick={props.clearAll} className={style.boton}>Clear</button>
                    <button onClick={props.onRandom} className={style.boton}>Random</button>
                    <button onClick={props.showAll} className={style.boton}>All</button>
                </div>

            </div>

        </div>
    )
}