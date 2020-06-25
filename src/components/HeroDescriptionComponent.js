import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import Loading from './LoadingComponent';



class HeroDescription extends Component{

    
    render(){  
        
        if( this.props.herosLoading ){
            return(
                <Loading />
            );
        }
        else if( this.props.heroErrMess ){
            return(
                <div>
                    <p>{this.props.heroErrMess}</p>
                </div>
            );
        }
        else{
            return(
                <div className="container">
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem>
                                <Link to='/home'>Home</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem>
                                <Link to='/heros'>Heros</Link>
                            </BreadcrumbItem>
                            <BreadcrumbItem active> {this.props.hero.name} </BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                    <Card >
                        <div>
                            <CardImg src={this.props.hero.image} alt={this.props.hero.name} />
                        </div>
                    
                        <CardBody>
                            <CardTitle>{this.props.hero.name}</CardTitle>
                            <CardText>{this.props.hero.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            );
        }
    }
}

export default HeroDescription;