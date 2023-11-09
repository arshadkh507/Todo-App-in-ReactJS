import image1 from "../assets/logo.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={image1} className="header-image" alt="Logo" />
      </div>
      <nav>
        <ul className="nav-list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
