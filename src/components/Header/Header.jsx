import { Link } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import logoN from '../../assets/image/logo_nintendo.png';
import Nav from '../Nav/';
import './scss/Header.scss';
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo--nav">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="header__nintendo">
        <img src={logoN} alt="Logo Nintendo" />
      </div>
      <Nav />
    </header>
  );
};

export default Header;
