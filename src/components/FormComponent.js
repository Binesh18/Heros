import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Button, Input} from 'reactstrap';

class FormComponent extends Component{

    constructor(props){
        super(props);

        this.state={
            name: '',
            telNo: '',
            email: '',
            selected: 'Wolverine',
            agree: false
        }
        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    

    handleSubmit(event){
        alert("This is only for your Information!!! \nName : " + JSON.stringify(this.state.name) + "\nTel No. : " + JSON.stringify(this.state.telNo) +
                "\nEmail : " + JSON.stringify(this.state.email) + "\nFavorite Hero : " + JSON.stringify(this.state.selected) + 
                "\nSend me Notification : " + JSON.stringify(this.state.agree));
        event.preventDefault();
    }

    onInputChange(event){
        var target = event.target;
        var name = target.name;
        var value = name == 'agree'? target.checked : target.value;
        
        this.setState({
            [name]: value
        });
    }

    render(){        

        return(
            <div className="container">
                <Form onSubmit={this.handleSubmit} >
                    <FormGroup row>
                        <Label htmlFor="name" md={2}>
                            Name
                        </Label>
                        <Col md={10}>
                            <Input type="text" name="name" id="name" value={this.state.name}  placeholder="NAME" 
                                                onChange={this.onInputChange}
                                               />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="telNo" md={2} >
                            Tel No.
                        </Label>
                        <Col md={10} >
                            <Input type="tel" name="telNo" id="telNo" value={this.state.telNo} placeholder="TEL NO." onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="email" md={2}>
                            Email
                        </Label>
                        <Col md={10}>
                            <Input type="email" name="email" id="email" placeholder="Email" value={this.state.email} onChange={this.onInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={6}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="agree" checked={this.state.agree} onChange={this.onInputChange}/>
                                    <b> Send Me Notification </b>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{ size:3, offset:3 }}>
                            <Input type="select" name="selected"  value={this.state.selected} onChange={this.onInputChange} >                                
                                <option>Wolverine</option>
                                <option>Spider Man</option>
                                <option>Thor</option>
                                <option>Ironman</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ offset:2}} >
                            <Button type="submit" color="primary">
                                Submit
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}

export default FormComponent;