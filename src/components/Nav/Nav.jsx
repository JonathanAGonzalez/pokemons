import { links } from '../../data';
import './scss/Nav.scss';
const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        {links.map((link, i) => (
          <li key={i}>{link}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
