import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import '../App.css';

import { Link } from 'react-router-dom';

class Heros extends Component{

    constructor(props){
        super(props);

    }

    render(){

        const heros = this.props.heros.map( (hero) => {
            return(
                <div className="col-10 col-md-4 offset-1  mt-5">
                    
                        <Card key={hero.id} >
                            <Link to={`/heros/${hero.id}`}>
                                <CardImg width="100%" src={hero.image} alt={hero.name}/>
                                <CardImgOverlay>
                                    <CardTitle className="heroname"> {hero.name} </CardTitle>
                                </CardImgOverlay>
                            </Link>
                        </Card>
                    
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row mt-0">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Heros</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="row">
                    {heros}
                </div>
            </div>
        );
    }


}

export default Heros;