import Cards from "../Cards/Cards"
import Footer from "../Footer/Footer"

export default function Home({characters, onClose}) {
  return (
    <>
        <Cards 
            characters={characters}
            onClose={onClose}
        />
        <Footer />
    </>
  )
}
