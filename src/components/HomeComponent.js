import React, { Component } from 'react';
import { Media, Carousel, CarouselItem, CarouselCaption, CarouselIndicators, CarouselControl } from 'reactstrap';

import { Link } from 'react-router-dom';

import '../App.css'

class Home extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const heros = this.props.heros.map( (hero) => {
            return(
                
                <Media tag="li" className="mediaborder mt-5">
                    
                    <div className="row relative">
                        <div className="col-12 col-md-4 ">
                            <Media left middle>
                                <Media object src={hero.image} alt={hero.name} className="heroimg"/>
                            </Media>
                        </div>
                        <div className="col-12 col-md-8 align-self-justify mt-3">
                            <Media body>
                                <Media heading> {hero.name} </Media>
                                <p> {hero.description} </p>
                                
                            </Media>
                        </div>
                        <div className="position">
                            <Link to={`/heros/${hero.id}`}>
                                See more
                            </Link> 
                        </div>
                    </div>
                    
                </Media>
                
            );
            
        });

        

        return(
            <div className="container">
                <Media list>
                    {heros}
                </Media>
            </div>
        );
}

}

export default Home;