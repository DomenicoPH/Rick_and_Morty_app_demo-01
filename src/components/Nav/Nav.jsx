import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import style from './Nav.module.css'
import logo from '../../assets/img/rmlogo.png'
import powerOff from '../../assets/img/powerOff.svg'

export default function Nav(props){
    return (
        <div className={style.container}>
            <img className={style.logo} src={logo} alt="Logo Rick & Morty" />
            <div className={style.spacer}></div>
            
            <div className={style.middle}>
                <Link to={'/about'}>
                    <button className={style.boton}>About</button>
                </Link>
                <Link to={'/home'}>
                    <button className={style.boton}>Home</button>
                </Link>
                <Link to={'/favorites'}>
                    <button className={style.boton}>Favorites</button>
                </Link>
                <SearchBar onSearch={props.onSearch}/>
                <button onClick={props.clearAll} className={style.boton}>Clear</button>
                <button onClick={props.onRandom} className={style.boton}>Random</button>
                <button onClick={props.showAll} className={style.boton}>All</button>
                <div className={style.count}>COUNT {props.charactersCount}</div>
            </div>

            <div className={style.right}>

                <button onClick={props.logout} className={style.botonLogOut}><img src={powerOff} alt="Log out"/></button>
                <p className={style.logout}>Log Out</p>

            </div>

        </div>
    )
}