import { Link } from 'react-router-dom';
import Button from '../../elements/Button';
import './scss/Hero.scss';
const Hero = ({ children, firstText, secondText, text }) => {
  return (
    <div className="hero__container">
      {children}
      <div className="hero__text">
        <h2 className="hero__title">{firstText}</h2>
        <h2 className="hero__title">{secondText}</h2>
        <p>{text}</p>
        <Link to="/all-pokemons">
          <Button text="See more Pokemons" />
        </Link>
      </div>
    </div>
  );
};

export default Hero;
