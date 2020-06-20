import React, {Component} from 'react';
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, NavItem, Collapse } from 'reactstrap';
import '../App.css'

import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state={
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){


        return(
            <div>
                <Navbar dark color="primary" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav}/>

                        <NavbarBrand className="mr-auto" href="/">
                            <img src="/images/logo.png" alt="MARVEL" width="60px"/>
                        </NavbarBrand>

                        <Collapse navbar isOpen={this.state.isNavOpen}>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/'> 
                                        <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/heros'>Heros</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/form">Form</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/uform">UForm</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1> MARVEL </h1>
                                <p> We can see some Heroes from the Marvel Universe. </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;