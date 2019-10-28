import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap'
import Header from '../Components/header';

export default class login extends Component {

    constructor() {
        super()
        this.state = {
            message: '',
        }
    }

    sinIn = () => {
        const data = {email: this.email}

        const requestInfo = {
            method: 'POST',
            body: JSON.stringify(data),
            /*header: new Header({
                'Content-Type': 'application/json'
            }),*/
        };

        fetch('http://localhost:8080/pessoas/user', requestInfo)
        .then(response => {
            if(response.ok) {
                return response.json()
            }
            throw new Error("Login Invalid...")
        })
        .then(token => console.log(token))
        .then(e => {
            this.setState({message: e.message})
        }) 
    }

    render() {
        return(
            <div className="col-md-6">
                <Header title="Login" />
                <hr className="my-3" />
                {
                    this.state.message !== ''? (
                        <Alert color="danger">{this.state.message}</Alert>
                    ) : ''
                }
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value } placeholder="Informe seu email" />
                    </FormGroup>
                    <Button color="primary" block onClick={this.sinIn}>Entrar</Button>
                </Form>
            </div>
        );
    }
}