import style from './About.module.css'
import gnomono from '../../assets/img/greenlogo.png'

const About = () => {
    return(
        <div className={style.container}>
            <h1>What about this?</h1>
            <img className={style.image} src={gnomono} alt="Gnomono" />
            <h2>Domenico Pagano (Gnomono)</h2>
            <p>This app is a practical exercise in full-stack development.</p> 
            <p>Technologies used:</p>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Redux</li>
            </ul>
        </div>
    )
}

export default About;