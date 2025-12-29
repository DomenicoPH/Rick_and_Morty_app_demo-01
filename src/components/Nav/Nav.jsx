import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import logo from '../../assets/img/rmlogo.png'
import { RiLogoutCircleRLine } from "react-icons/ri";

export default function Nav(props){
    return (
        <div className={style.container}>
            <img className={style.logo} src={logo} alt="Logo Rick & Morty" />
            <div className={style.spacer}></div>
            
            <div className={style.middle}>

                <button onClick={props.clearAll} className={style.boton}>Clear</button>
                <button onClick={props.onRandom} className={style.boton}>Random</button>
                <button onClick={props.showAll} className={style.boton}>All</button>

                <SearchBar onSearch={props.onSearch}/>
                <div className={props.charactersCount === 826 ? style.countLimit : style.count}>{props.charactersCount}</div>

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

            <div className={style.right}>
                <button onClick={props.logout} className={style.botonLogOut}><RiLogoutCircleRLine /></button>
            </div>

        </div>
    )
}