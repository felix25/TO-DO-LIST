import React from 'react';
import styled from 'styled-components';
const IN = styled.input`
    width: 100%;
    border-radius: 2px;
    border: 1px solid #ced4da;
    padding: .375rem .75rem;
    box-sizing: border-box;
    outline: none;
    height: calc(2rem + 2px)
`;
const Label = styled.label`
    display: block;
    text-transform: capitalize;
    padding-top: calc(.375rem + 1px);
    padding-bottom: calc(.375rem + 1px);
    margin-bottom: 0;
    font-size: inherit;
    line-height: 1.5;
`;
const Input =({label,...otherProps})=>(
    <div>
        {
            label ?
            (<Label>{label}</Label>)
            :''
        }
        <IN {...otherProps}/>
    </div>
    
)
export default Input;