import Logo from "../assets/image1.jpg"
import "./Header.css";

export const Header = () => {
  return (
    <header>
        <img src={Logo} alt="" />
        <a href="/">Home</a>
    </header>
  )
}