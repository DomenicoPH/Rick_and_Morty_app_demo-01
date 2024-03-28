import style from './Error.module.css'
import portalFail from '../../assets/img/rym_anim.gif'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const navigate = useNavigate()
    const handleHome = () => {
        navigate(`/home`)
     }

    return(
        <div className={style.container}>
            <div className={style.subContainer}>
                <p className={style.error}>Error 404</p>
                <img src={portalFail} alt="Error 404" />
                <p className={style.message}>La ruta que buscas no existe...</p>
                <button className={style.botonVolver} onClick={handleHome}>¡volver!</button>
            </div>
        </div>
    )
}

export default Error;