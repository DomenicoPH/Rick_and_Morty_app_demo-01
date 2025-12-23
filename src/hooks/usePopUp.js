import { useState } from "react"

export default function usePopUp() {

    const [alertActive, setAlertActive] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');

    const handlePopUp = (message) => {
       setPopupMessage(message)   //Establece cual es el mensaje.
       setAlertActive(!alertActive)  //Establece si el popup es visible o no.
    }

    return {
        alertActive,
        popupMessage,
        handlePopUp
    }
}
