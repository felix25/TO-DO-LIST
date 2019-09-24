import React from 'react';
import { format } from 'timeago.js';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
const ListItems = styled.li`
    background: #fff;
    border: none;
    border-bottom: 1px solid #ddd;
    list-style: none;
`;

const DivBox = styled.div`
    position: relative;
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;
`;
const DateTime = styled.span`
    width: 52%;
    display: inline-block;
    color: #b9b6b6;
    margin-left: 2rem;
    `;
const ItemListToDo =({id,text,status,date,...Otherprops})=>(
    <ListItems className={status}>
        <DivBox className="checkbox">
            <label >
                <input type="checkbox"  {...Otherprops} id={id} />
                {text}
            </label>
            <DateTime>- {format(date)}</DateTime>
            {
                status === "pending" ?
                (
                    <Link to={`/edit/${id}`} className="btn-edit">
                    Edit
                    </Link>
                )
                :( <span className="btn-edit">Edit</span>)
            }
        </DivBox>
    </ListItems> 
)
export default ItemListToDo;