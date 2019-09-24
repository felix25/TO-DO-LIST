import React from 'react';
import SingIn from '../../components/sign-in/sign-in.components';
import SingUp from '../../components/sign-up/sign-up.components';
import styled from 'styled-components';
const SingUpContent = styled.div`
    width: 850px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto;
    `;
const Title = styled.h1`
    display: block;
    width: 65%;
    margin: 3rem auto;
    text-align: center;
    text-transform: uppercase;
`;
export default class Signin extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            message : this.props.location.state?this.props.location.state.message: '',
        };
    }
    render(){
        return (
            <div>
                <Title>bienvenidos a todo list</Title>
                <SingUpContent className="sing-in-and-sign-up">
                    <SingIn message={this.state.message}/>
                    <SingUp/>
                </SingUpContent>
            </div>
           
        )
    }
}