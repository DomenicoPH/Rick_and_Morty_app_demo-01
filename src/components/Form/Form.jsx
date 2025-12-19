import validation from './validation';
import style from './Form.module.css'
import { useEffect, useState } from 'react'
import { Modal } from '../Modal/Modal';
import rym from '../../assets/img/rym.svg'
//import Morty from '../../assets/img/morty.svg?react'
//import Rick from '../../assets/img/rick.svg?react'
import { FaReact } from 'react-icons/fa'
import { SiVite, SiRedux } from 'react-icons/si'
import { IoInformationCircleOutline } from "react-icons/io5";

const Form = ({login, freepass, useDemoCredentials, demoUser, demoCredentials}) => {

    const [userData, setUserData] = useState({
       username: '',
       password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if(demoUser){
            setUserData(demoUser);
        }
    }, [demoUser]);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setUserData({
            ...userData, 
            [name]: value
        })
        //console.log(userData)
        setErrors(
            validation({
                ...userData,
                [name]: value
            }
        ))
        //console.log(errors)
    }

    // handler del acceso con user y password
    const handleSubmit = (e) => {
        e.preventDefault()
        login(userData)
    }

    // handler del acceso libre
    const handleFreePass = () => {
        freepass()
    }

    return (
        <div className={style.container}>

            <div className={style.subcontainer}>

                <form className={style.form} onSubmit={handleSubmit}>

                    <img className={style.rymlogo} src={rym} alt="Rick and Morty logo" />
                    <h2 className={style.rymlogosub}>Characters App</h2>

                    <div className={style.block}>
                        <label className={style.label} htmlFor="">Username: </label>
                        <input 
                            className={style.input}
                            type='email' 
                            name='username'
                            value={userData.username}
                            onChange={handleInputChange}
                        />
                    </div>

                    <span className={style.error}>{errors.username && errors.username}</span>

                    <div className={style.block}>
                        <label className={style.label} htmlFor="">Password: </label>
                        <input 
                            className={style.input}
                            type='password'
                            name='password'
                            value={userData.password}
                            onChange={handleInputChange} 
                        />
                    </div>

                    <span className={style.error}>{errors.password && errors.password}</span>

                    <button 
                        type='button'
                        className={style.information}
                        onClick={() => setShowModal(true)}
                    >
                        <IoInformationCircleOutline size={20} />
                        Username & Password
                    </button>

                    <button className={style.submitButton} type='submit'>Login</button>

                </form>

                {/* <button onClick={handleFreePass} className={style.freepassbutton}>Free Pass</button> */}

            </div>

            <p className={style.credits}>This App was created using <FaReact/> React <SiVite/> Vite and <SiRedux/> Redux by &copy; Gnomono - 2024</p>

            //..Modal..
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              title="This is a Demo App"
              onConfirm={useDemoCredentials}
              confirmText='Use demo credentials'
            >

              <p>
                This is a sample application created for educational purposes.
              </p>

              <p>
                You can test the login using the following credentials:
              </p>

              <p>
                <strong>Username:</strong> {demoCredentials.username} <br />
                <strong>Password:</strong> {demoCredentials.password}
              </p>

            </Modal>

        </div>
    )
}

export default Form;