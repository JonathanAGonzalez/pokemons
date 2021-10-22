import { links } from '../../data';
import './scss/Nav.scss';
const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        {links.map((link) => (
          <li>{link}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
