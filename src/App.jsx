import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Fragment } from 'react';
import Home from './components/Home';
import DetailPokemon from './components/DetailPokemon';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Footer from './components/Footer';
import AllPokemons from './components/AllPokemons/AllPokemons';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Hero
          firstText="Nintendo Kits"
          secondText="Pokemon Unite"
          text="A Seed Pokemon tht is the evolved form of Bulbasaur. It has a flower bulb on its back, the weight wich has made it develop strong legs and hips"
        >
          <Header />
        </Hero>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/all-pokemons" component={AllPokemons} />
          <Route exact path="/detail/:id" component={DetailPokemon} />
        </Switch>
      </Router>
      <Footer />
    </Fragment>
  );
};

export default App;
