import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';
import Heros from './components/heroscomponent';
import {HEROS} from './shared/heros.js';

class App extends Component{

  constructor(props){
    super(props);

    this.state={
      heros:HEROS
    }
  }

  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">MARVEL</NavbarBrand>
          </div>
        </Navbar>

        <Heros heros={this.state.heros} />

      </div>
    );
  }
}

export default App;
