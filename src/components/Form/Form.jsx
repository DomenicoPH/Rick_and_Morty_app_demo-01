import style from './Form.module.css'
import rym from '../../assets/img/rym.svg'
import { useState } from 'react'
import validation from './validation';

const Form = (props) => {

    const [userData, setUserData] = useState({
       username: '',
       password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    })

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
        props.login(userData)
    }

    // handler del acceso libre
    const handleFreePass = () => {
        props.freepass()
    }

    return (
        <div className={style.container}>

            <div className={style.subcontainer}>

                <img className={style.rymlogo} src={rym} alt="Rick and Morty logo" />

                <form className={style.form} onSubmit={handleSubmit}>

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

                    <button className={style.submitButton} type='submit'>Login</button>

                </form>

                <button onClick={handleFreePass} className={style.freepassbutton}>Free Pass</button>

            </div>

            <p className={style.credits}>An App created by Gnomono © 2024</p>

        </div>
    )
}

export default Form;