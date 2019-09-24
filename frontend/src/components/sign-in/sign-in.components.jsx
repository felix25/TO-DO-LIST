import React from 'react';

import FormInput from '../input-box/input-box.components';
import CustomButton from '../custom-button/custom-button.components';
import styled from 'styled-components';

const Container = styled.div`
    width: 380px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    background:#ffffff;
    box-sizing: border-box;
    height: 300px;
    border: 1px solid rgba(0,0,0,.125);`;
const ConteTitle = styled.div`
    color: #807e7e;
    padding: 1rem;
    box-sizing: border-box;
    background-color: rgb(247, 247, 247);
    border-bottom: 1px solid rgba(0,0,0,.125);
    h1{
        margin:0;
        font-size: 16px;
        text-align: center;
        text-transform: uppercase;
    }
`;
const ConteBody = styled.div`
    padding: 1rem;
    box-sizing: border-box;
`;
const Form = styled.form`
    margin: 0 auto;
    display: block;
    width: 80%;`;
export default  class  SingIn extends React.Component{
    constructor(props){
        super(props);
        this.state={
            email:'',
            pw:'',
            message:''
        }
    }
    handleSubmit =  event =>{
        event.preventDefault();
        const {email,pw} = this.state;
        try{
            fetch(`http://localhost:3005/api/user/`,{
                method:'POST',
                headers: {'Content-type': 'application/json; charset=UTF-8'},
                body:JSON.stringify({
                    email: email,
                    pw:pw
                })
            })
            .then(response => response.json())
            .then(resp => {
                localStorage.setItem('token',resp);
                localStorage.setItem('firt_name',resp[0].firt_name);
                localStorage.setItem('id',resp[0].id);
                //this.props.history.push('/home');
                window.location.href = '/home';
                return;               
            })
            .catch(err=>console.log(err))
        }catch(err){
            console.log(`error ${err}`);
        }
    }
    handleChange = event =>{
        const { value, name } = event.target;
        this.setState({[name]:value})
    }
    componentDidMount(){
        this.setState({message:this.props.message})
    }
    render(){
        return(
            <Container>
                <ConteTitle>
                    <h1>ingresar</h1>
                    {
                        this.state.message
                    }
                </ConteTitle>
                <ConteBody>
                    <Form onSubmit={this.handleSubmit}>
                        <FormInput
                            label="email"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                        <FormInput
                            label="password"
                            name="pw"
                            type="password"
                            value={this.state.pw}
                            onChange={this.handleChange}
                            
                            required
                        />
                        <CustomButton type="submit">Sing in</CustomButton>
                    </Form>
                </ConteBody>
            </Container>
        )
    }
}