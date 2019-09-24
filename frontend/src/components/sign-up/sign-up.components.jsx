import React from 'react';
import FormInput from '../input-box/input-box.components';
import CustomButton from '../custom-button/custom-button.components';
import styled from 'styled-components';
const SingUpConte = styled.div`
    display: flex;
    flex-direction: column;
    width: 430px;
    background: #fff;
    border-radius: 3px;
    border: 1px solid rgba(0,0,0,.125);
`;
const SingUpTitle = styled.div`
    background-color: rgb(247,247,247);
    border-bottom: 1px solid rgba(0,0,0,.125);
    padding: 1rem;
    box-sizing: border-box;
    h2{
        margin: 0;
        font-size: 16px;
        text-align: center;
        text-transform: uppercase;
    }
`;
const ConteBody = styled.div`
    padding:1rem;
`;
const Form = styled.form`
    width:80%;
    margin:0 auto;
    display:block
`;
export default class SignUp extends React.Component{
    constructor(){
        super();
        this.state={
            firtName:'',
            lastName:'',
            fullName:'',
            email:'',
            password:'',
            message:''
        }
        
    }
    handleSubmit = async event =>{
        event.preventDefault();
        try{
            await fetch(`http://localhost:3005/api/signup/`,{
                method:'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body:JSON.stringify({
                    data: this.state
                })
            })
            .then(response => response.json())
            .then(resp => {
                this.setState({message:resp.message});                
            })
            .catch(err=>console.log(err))
        }catch(err){
            console.log(`error ${err}`);
        }
    }
    handleChange = event =>{
        const {name,value} = event.target;
        this.setState({
            [name]: value
        })
    }
    render(){
        const { firtName, lastName, fullName, email, password,message } = this.state;
        return(
            <SingUpConte>
                <SingUpTitle>
                    <h2>Registro de usuario</h2>
                </SingUpTitle>
                <ConteBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormInput
                            label="primer nombre"
                            name="firtName"
                            value={firtName}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            label="segundo nombre"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            label="apellidos"
                            name="fullName"
                            value={fullName}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            label="email"
                            name="email"
                            value={email}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            label="password"
                            name="password"
                            value={password}
                            onChange={this.handleChange}
                            required
                        />
                        <CustomButton type="submit">SIGN UP</CustomButton>
                        <span>{message}</span>
                    </Form>
                </ConteBody>
            </SingUpConte>
        )
    }
}