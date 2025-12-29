import { FaReact } from "react-icons/fa";
import { SiVite, SiRedux } from "react-icons/si";
import style from './Footer.module.css';

export default function Footer() {
  return (
    <p className={style.credits}>
      This App was created using <FaReact /> React <SiVite /> Vite and{" "}
      <SiRedux /> Redux by &copy; Gnomono - 2024
    </p>
  )
}
