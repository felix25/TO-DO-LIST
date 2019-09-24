import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
const FooterElement = styled.div`
    border-top: 1px solid #ddd;
    background-color: #F4FCE8;
    margin: 0 -20px -10px -20px;
    padding: 12px 20px;
    position: relative;
    color: #777;
`;

const Button = styled.button`
    cursor: pointer;
    color: inherit;
    margin: 3px;
    padding: 4px 8px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    background: transparent;
    outline: none;
    &:hover {
        border-radius: 3px;
        border-color: rgba(175, 47, 47, 0.2);
        color: #555;
        background: transparent;
    }
`;
const ListT = styled.li`
    float: right;
    margin: 6px 0;
    a{
        font-size: 12px;
    }
`;
const Footer =(props)=>(
    <FooterElement>
        <div className="pull-right">
            <ul className="filters">
                <li><Button className="selected _xb" id="all" onClick={props.onClickAll}>All</Button></li>
                <li><Button className="_xb" id="pendientes" onClick={props.onClickPending}>Pendintes</Button></li>
                <li><Button className="_xb" id="completada" onClick={props.onClickCompleted}>Completadas</Button></li>
                <ListT> <Link to="/tarea">Crear Nueva Tarea</Link></ListT>
            </ul>
        </div>
    </FooterElement>
);
export default Footer;