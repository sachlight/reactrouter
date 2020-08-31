import React from 'react';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Error from './Error';
import Search from './Search';

const App =()=>
{
  return(
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/search" component={Search} />
        <Route component={Error} />
      </Switch>

    </>
  )
}
export default App;