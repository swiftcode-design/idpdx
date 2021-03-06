import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
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
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/aboutus" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/showroom" component={Showroom} />
        <Route path="/contactus" component={Contactus} />
        <Route render={() => <h2>Page not found</h2>} />
      </Switch>
      <Footer />
    </div>
  )
}
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <Route path="/" component={Wrapper}/>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
