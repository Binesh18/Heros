import React, { Component } from 'react';
import { Button, Modal, ModalBody, ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';


class UncontrolledForm extends Component{

    constructor(props){
        super(props);

        this.state={
            isModalOpen: false
        }

        this.handleModal = this.handleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(){
        alert("Thanks for your Information!!!");
    }

    render(){
        return(
            <div>
                <Button className="btn" onClick={this.handleModal}> Suggest Your Favorite Hero </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.handleModal}>
                    <ModalHeader toggle={this.handleModal}>
                        Your Favorite Hero
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit}>
                            <FormGroup>
                                <Label htmlFor="name"> Name </Label>
                                <Input type="text" name="name" id="name"/>
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="fav"> Favorite Hero </Label>
                                <Input type="select" name="fav" id="fav">
                                    <option>Wolverine</option>
                                    <option>Spiderman</option>
                                    <option>Ironman</option>
                                    <option>Thor</option>
                                </Input>
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

export default UncontrolledForm;