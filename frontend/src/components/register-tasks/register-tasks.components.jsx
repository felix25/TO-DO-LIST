import React from 'react';
import { Link } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import styled from 'styled-components';
import Input from '../input-box/input-box.components';
import CustomButton from '../custom-button/custom-button.components';

const Container = styled.div`
    display: block;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    background: #fff;
    border-radius: 3px;
    padding: 1rem;
    box-sizing: border-box;
`;
const Left = styled.div`
    display: inline-block;
    width: 80%;
    vertical-align: top;
    margin: 0 auto;
    display: block;
`;
class RegisterTasks extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            dataTasks:[],
            descripcion:'',
            editing: false,
            date: new Date(),
            _id: '',
            placeholder:'',
            title:''
        }
    }
    onClick = async (e)=>{
        e.preventDefault();
        let _value = this.state.descripcion;
        let fecha = this.state.date;
        const method = this.state.editing ? `PUT` : `POST`;
        const urlFetch = this.state.editing ? `http://localhost:3005/api/tareas/${this.state._id}`: `http://localhost:3005/api/tareas/`;
        
        await fetch(urlFetch,{
            method:method,
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({
                descripcion:_value,
                status:'pending',
                fecha:fecha
            })
        })
        .then(resp =>this.getTasks())
        .catch(err=>console.log(err))
        window.location.href = '/';
    }

    async componentDidMount(){
       if(this.props.id){
            await fetch(`http://localhost:3005/api/tareas/${this.props.id}`)
            .then(response => response.json())
            .then(resp => {
                this.setState({
                    descripcion:resp[0].descripcion,
                    date:new Date(resp[0].fecha),
                    _id: resp[0].id,
                    editing: true,
                    placeholder:'Editar',
                    title:'Editar Tarea'
                })
            });
       }else{
        this.setState({placeholder:'Registrar Tarea',title:'Registrar Tarea'}) 
       }
        this.getTasks();


    }

    getTasks(){
        fetch(`http://localhost:3005/api/tareas`)
        .then(response => response.json())
        .then(resp => this.setState({dataTasks:resp}));
    }
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onChangeDate = date => {
        this.setState({ date });
    }
    render(){
        const {descripcion,placeholder,title} = this.state;
        return(
            <Container className="main-register">
                <Left>
                    <h1>{title}</h1>
                    <Input type="text" name="descripcion" onChange={this.onInputChange} value={descripcion} placeholder={placeholder}  id="_desp" required />
                    <DatePicker className="form-date" selected={this.state.date} onChange={this.onChangeDate} />
                    <CustomButton onClick={this.onClick}>Save</CustomButton>
                    <Link to="/">Volver</Link>
                </Left>
            </Container>
        )
    }
}
export default  RegisterTasks;