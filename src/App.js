import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, NavbarBrand } from 'reactstrap';
import Heros from './components/heroscomponent';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">MARVEL</NavbarBrand>
          </div>
        </Navbar>

        <Heros />

      </div>
    );
  }
}

export default App;
