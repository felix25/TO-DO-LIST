import  React from 'react';
import { Link } from 'react-router-dom'
import ItemToDoLIst from '../item-list-to-do/item-list-to-do.components';
import Input from '../input-box/input-box.components';
import Footer from '../list-to-do-footer/list-to-do-footer.components';
import styled from 'styled-components';

const Wrapper = styled.div`
    background-color: #FFF;
    padding: 20px 20px 10px 20px;
    width: 600px;
    margin: 30px auto;
    border: 1px solid #ddd;
    border-radius: 2px;
    position: relative;
`;

const Title = styled.h1`
    margin: 0;
    padding-bottom: 20px;
    text-align: center;
    text-transform: uppercase;
`;

const List = styled.ul`
    width: 100%;
    padding: 0;
`;

const NotData = styled.div`
    margin: 10px 0;
    padding: 10px;
    border-radius: 0;
    background: #f2f2f2;
    border: 1px solid rgba(229, 229, 229, 0.5);
    color: #888;
`;
class ListToDo extends React.Component{
    //pending
    constructor(props){
        super(props);
        this.state ={
            dataTasks:[],
            status:'',
            filter:''
        }
    }
   
    /**
     * evento completado
     */
    handleClickCompleted =(e)=>{
        e.preventDefault();
        this.setState({filter:'completed'});
        document.getElementById('pendientes').classList.remove('selected');
        document.getElementById('all').classList.remove('selected');
        e.target.classList.add('selected');
    }

    /**
     * evento pendiente
     */
    handleClickActive =(e)=>{
        e.preventDefault();
        this.setState({filter:'pending'});
        document.getElementById('completada').classList.remove('selected');
        document.getElementById('all').classList.remove('selected');
        e.target.classList.add('selected');
    }

    /**
     * evento todos
     */
    handleClickAll =(e)=>{
        e.preventDefault();
        this.setState({filter:''});
        document.getElementById('pendientes').classList.remove('selected');
        document.getElementById('completada').classList.remove('selected');
        e.target.classList.add('selected');
    }

    /**
     * evento click check (tarea completada)
     */
    handleClickCheck =(e)=>{
        let id = e.target.id;
        let val = e.target.value;
        fetch(`http://localhost:3005/api/tareas/${id}`,{
            method:'PUT',
            headers: {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({
                descripcion:val,
                status:'completed'
            })
        })
        .then(resp =>this.getTasks())
        .catch(err=>console.log(err))
    }

    /**
     * evento seachs
     */
    onChange =(e)=>{
        
        this.setState({filter:e.target.value});
    }

    async componentDidMount(){
        await this.getTasks();
    }

    getTasks(){
        fetch(`http://localhost:3005/api/tareas`)
        .then(response => response.json())
        .then(resp => this.setState({dataTasks:resp}));
    }
    render(){
        const {dataTasks,filter} = this.state;
        const fildataTasks = dataTasks.filter(dataTasks=>
            dataTasks.status.toLowerCase().includes(filter.toLocaleLowerCase()) ||
            dataTasks.descripcion.toLowerCase().includes(filter.toLocaleLowerCase())
        );
        return(
            <Wrapper>
            <Link to="/logout">cerrar session</Link>
                <Title>lista de tareas</Title>
                <Input type="text" onChange={this.onChange} />
                <List>
                    {
                        fildataTasks.length > 0 ?
                            fildataTasks.map(resp=>(
                                <ItemToDoLIst key={resp.id}
                                    onClick={this.handleClickCheck} 
                                    id={resp.id}
                                    className={resp.status}
                                    status={resp.status}
                                    checked={resp.status === "completed" ? 'checked':''}
                                    text={resp.descripcion}
                                    value={resp.descripcion}
                                    date={resp.fecha}
                                    
                                />
                            ))
                        :(
                            <NotData>not data</NotData>
                        )
                    }
                </List>
                <Footer 
                    onClickCompleted={this.handleClickCompleted}
                    onClickPending={this.handleClickActive}
                    onClickAll={this.handleClickAll}
                />
            </Wrapper>
        )
    }
}
export default ListToDo;