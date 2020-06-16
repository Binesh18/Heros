import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardTitle, CardText } from 'reactstrap';
import '../App.css';

class Heros extends Component{

    constructor(props){
        super(props);

        this.state={
            selectedHero: null
        };
    }

    onHeroSelected(hero){
        this.setState({
            selectedHero: hero
        });
    }

    renderHero(){
        if(this.state.selectedHero != null){
            return(
                <Card>
                    <CardImg src={this.state.selectedHero.image} alt={this.state.selectedHero.name}/>
                    <CardTitle>
                        <b>{this.state.selectedHero.name}</b>
                    </CardTitle>
                    <CardBody>
                        <CardText> {this.state.selectedHero.description} </CardText>
                    </CardBody>
                </Card>
            );
        }
        else{
            return(
                <div></div>
            );
        }
    }

    render(){

        const heros = this.props.heros.map( (hero) => {
            return(
                <div className="col-5 ml-5 mt-5">
                    <Card key={hero.id}  onClick={ () => this.onHeroSelected(hero)}>
                        <CardImg src={hero.image} alt={hero.name}/>
                        <CardImgOverlay>
                            <CardTitle className="heroname"> {hero.name} </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return(
            <div className="container">
                <div className="row">
                    {heros}
                </div>
                <div className="row">
                    {this.renderHero()}
                </div>
            </div>
        );
    }


}

export default Heros;