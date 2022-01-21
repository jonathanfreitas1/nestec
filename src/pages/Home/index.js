import logo from '../../img/nestec-logo.svg';
import imagem from '../../img/undraw_authentic2.svg'
import { LoginOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import './home.css';




export default function Home() {
    return(
        <div className='container'>
            <div className='info'>
                <img src={logo} className='imagem'/>
                <h1>Olá Dev, entre para fazer uso da nossa ToDoList.</h1>
                <Link to='/ToDo'>
                    <button>Entrar <LoginOutlined /></button>
                </Link>
            </div>
            <div className='coluna2'>
                <img src={imagem}/>
            </div>
            
        </div>
        
    );
}