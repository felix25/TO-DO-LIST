import React from 'react';
import RegisterTasks from'../../components/register-tasks/register-tasks.components'
export default class Tasks extends React.Component{
    render(){
        return(
            <div className="">
            <RegisterTasks id={this.props.match.params.id}/>
         </div>
        )
    }
    
}