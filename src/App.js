import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './views/Home'
import About from './views/About'
import Services from './views/Services'
import Showroom from './views/Showroom'
import Contactus from './views/Contactus'

import './App.css';

function Wrapper(props){
  return (
    <div>
      <NavBar />
      {/* <BrowserRouter> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/aboutus" component={About} />
          <Route path="/services" component={Services} />
          <Route path="/showroom" component={Showroom} />
          <Route path="/contactus" component={Contactus} />
          <Route render={() => <h2>Page not found</h2>} />
        </Switch>
      {/* </BrowserRouter> */}
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component={Wrapper}/>
      </BrowserRouter>
    );
  }
}

export default App;
