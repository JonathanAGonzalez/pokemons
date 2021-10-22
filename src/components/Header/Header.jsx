import logo from '../../assets/image/logo.png';
import logoN from '../../assets/image/logo_nintendo.png';
import './scss/Header.scss';
import Search from '../Search/Search';
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo--nav">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header__nintendo">
        <img src={logoN} alt="Logo Nintendo" />
      </div>
      <div className="header__search">
        <Search />
      </div>
    </header>
  );
};

export default Header;
