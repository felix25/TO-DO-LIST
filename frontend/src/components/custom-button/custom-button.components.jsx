import React from 'react';
import styled from 'styled-components';
const Button = styled.button`
    width: 250px;
    display: block;
    height: 30px;
    border-radius: 3px;
    border: 0;
    text-align: center;
    text-transform: uppercase;
    background-color: #007bff;
    border-color: #007bff;
    color: #ffffff;
    margin: 1rem 0;
    cursor:pointer
    &:hover{
        background-color: #0069d9;
        border-color: #0062cc;
    }
`;

const CustomButton = ({children, isGoogleSingIn, ...otherProps}) =>(
    <Button className={`custom-button`} {...otherProps}>
        {children}
    </Button>
)
export default CustomButton;