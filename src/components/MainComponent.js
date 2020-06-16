import React, {Component} from 'react';
import '../App.css';

import Heros from './heroscomponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import {HEROS} from '../shared/heros.js';

class Main extends Component{
    
    constructor(props){
        super(props);

        this.state={
            heros: HEROS
        }
    }

    render(){
        return(
            <div className="App">
                
                <Header />

                <Heros heros={this.state.heros} />

                <Footer />
            </div>
        );
    }
}

export default Main;

