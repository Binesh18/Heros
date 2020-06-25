import React, {Component} from 'react';
import '../App.css';

import Heros from './heroscomponent.js';
import Header from './HeaderComponent.js';
import Footer from './FooterComponent.js';
import Home from './HomeComponent';
import HeroDescription from './HeroDescriptionComponent';
import FormComponent from './FormComponent';
import UncontrolledForm from './UncontrolledForm';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { addComments, fetchHeros } from '../redux/ActionCreators';




const mapStateToProps = state => {
    return{
        heros: state.reducer,
        comments: state.commentReducer
    };
}

const mapDispatchToProps = dispatch =>({
    addComments: (name, email, telNo) => dispatch(addComments(name, email, telNo)),
    fetchHeros: () => { dispatch( fetchHeros() )}
});



class Main extends Component{
    
    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.fetchHeros();
    }

    render(){

        
    
        const home = () =>{
            return(
                <Home heros={this.props.heros} />
            );
        }

        const hero =({match}) => {
            return(
                <HeroDescription  hero={this.props.heros.heros.filter( (hero) => hero.id === parseInt(match.params.heroId,10))[0] } 
                                    herosLoading = {this.props.heros.isLoading} 
                                    heroErrMess = {this.props.heros.errMess} />
            );
        }
        

        return(
            <div className="App">
                
                <Header />

                <div>
                    <Switch>
                        <Route path="/home" component={home} />
                        <Route exact path="/heros" component={() => <Heros heros={this.props.heros.heros} 
                                                                           herosLoading = {this.props.heros.isLoading} 
                                                                           heroErrMess = {this.props.heros.errMess} /> } />
                        
                        <Route path="/heros/:heroId" component={hero} />

                        <Route path='/form' component={ () => <FormComponent comments={this.props.comments} 
                                                                            addComments = {this.props.addComments}/> } />

                        <Route path='/uform' component={ () => <UncontrolledForm /> } />

                        <Redirect to="/home" />
                    </Switch>
                    
                </div>
                

                <Footer />
            </div>
        );
    }
    
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

