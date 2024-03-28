import style from './Form.module.css'
import { useState } from 'react'
import validation from './validation';
import logo from '../../assets/img/rym-banner-1.webp'

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

    const handleSubmit = (e) => {
        e.preventDefault()
        props.login(userData)
    }

    return (
        <div className={style.container}>

            <form className={style.form} onSubmit={handleSubmit}>

                <div className={style.logo}>
                    <img className={style.logoImg} src={logo} alt="Rick & Morty" />
                </div>

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

            <p className={style.credits}>An App created by Gnomono © 2024</p>

        </div>
    )
}

export default Form;