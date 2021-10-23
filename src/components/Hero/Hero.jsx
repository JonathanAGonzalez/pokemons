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
        <Button text="See more Pokemons" />
      </div>
    </div>
  );
};

export default Hero;
