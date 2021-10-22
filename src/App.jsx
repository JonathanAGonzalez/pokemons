import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import DetailPokemon from './components/DetailPokemon';
import { Fragment } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';

const App = () => {
  return (
    <Fragment>
      <Hero>
        <Header />
      </Hero>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={DetailPokemon} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
