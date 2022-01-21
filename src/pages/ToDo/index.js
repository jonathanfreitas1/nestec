import './ToDo.css';
import { ArrowLeftOutlined, PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import { Checkbox } from 'antd';
import { useEffect, useState } from 'react';


export default function ToDo() {
    const [teste, setTeste] = useState([]);
    const [id, setId] = useState(1);

    const [addTesk, setTaskAdd] = useState("");

    function addTesks () {
        console.log(addTesk);
        setTeste(prev => [...prev, {id: id, name: addTesk}])
        /* tasks.push({id: id, name: addTesk}); */
        setId(id+1);
        console.log(teste);
    }

    function deletar(id) {
        setTeste(teste.filter(item => item.id !== id))
        console.log(teste) 
    }

    return(
        <div className='container'>
            <div className='header'>
            <div className='icon'>
                <Link to='/'>
                    <ArrowLeftOutlined/>
                </Link>
                
                <h1>ToDo</h1>
            </div>
            
            <div className='centralizarBloco'>
                <div className='bloco'>
                    <div className='cabecalho'>
                        <h1>Minhas Tasks</h1>
                        <div className='inputBotao'>
                            <input  type={'text'} value={addTesk} onChange={e => setTaskAdd(e.target.value)}/>
                            <button onClick={addTesks}>
                                <PlusOutlined />
                            </button>
                        </div>
                    </div>
                    <div className='checks'>
                        {teste.map((task) =>
                            <div key={task.id } className='task'>
                                <Checkbox >
                                    {task.name}
                                </Checkbox>
                                <DeleteOutlined onClick={() => deletar(task.id)} className='deletar'/>
                            </div>
                        )}
                        
                    </div>
                    
                </div>
            </div>
            </div>
            
            
        </div>
        
    );
}