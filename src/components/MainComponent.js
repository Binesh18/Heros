import React, {Component} from 'react';
import '../App.css';

import Heros from './heroscomponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent';
import HeroDescription from './HeroDescriptionComponent';

import {HEROS} from '../shared/heros.js';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    
    constructor(props){
        super(props);

        this.state={
            heros: HEROS
        }
    }

    render(){

        const home = () =>{
            return(
                <Home />
            );
        }

        const hero =({match}) => {
            return(
                <HeroDescription  hero={this.state.heros.filter( (hero) => hero.id === parseInt(match.params.heroId,10))[0] } />
            );
        }

        return(
            <div className="App">
                
                <Header />

                <div>
                    <Switch>
                        <Route path="/home" component={home} />
                        <Route exact path="/heros" component={() => <Heros heros={this.state.heros} /> } />
                        
                        <Route path="/heros/:heroId" component={hero} />

                        <Redirect to="/home" />
                    </Switch>
                    
                </div>
                

                <Footer />
            </div>
        );
    }
}

export default Main;

