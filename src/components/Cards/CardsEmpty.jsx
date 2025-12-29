import style from '../Cards/Cards.module.css'
const logo = 'https://res.cloudinary.com/dhaiensb8/image/upload/v1712428822/rick_and_morty/rmlogo_dxntuf.png'

export default function CardsEmpty({characters}) {
  return (
    <div className={characters.length === 0 ? style.logo : style.hidden}>
       <img className={style.logoimage} src={logo} alt='Rick & Morty Logo' />
       <h1 className={style.logotext}>Character Searching Engine</h1>
    </div>
  )
}
