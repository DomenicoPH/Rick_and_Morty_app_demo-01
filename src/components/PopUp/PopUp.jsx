import style from './PopUp.module.css'
import { useEffect } from 'react'
import { FaWindowClose } from "react-icons/fa";
import { FiAlertTriangle } from "react-icons/fi";

const rick = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712457877/rick_and_morty/rick_fxx0pc.png'

const PopUp = ({handlePopUp, message}) => {

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            handlePopUp(''); // Cierra el PopUp al presionar la tecla 'Esc'
        }
    };
    
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return(
        <div className={style.overlay}>
            <div className={style.messageBox}>
                <div className={style.topContainer}>
                    <button className={style.closeButton} onClick={handlePopUp}><FaWindowClose size={30} /></button>
                </div>
                <div className={style.imageContainer}>
                    <img className={style.rick} src={rick} alt="Rick" />
                </div>
                <p className={style.messageText}><FiAlertTriangle size={25} />{message}</p>
            </div>
        </div>
    )
}

export default PopUp;