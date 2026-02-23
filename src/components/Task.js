import React from "react";
import '../styles/Task.css';
import { AiOutlineCloseCircle } from 'react-icons/ai'

function Task({id, title, description, completed, priority, completarTarea, eliminarTarea}){
    return (
        <div className={completed ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
            <div className="tarea-texto" onClick={() => completarTarea(id)}>
                <p><strong>Priority:</strong> {priority} | <strong>Title:</strong> {title} | <strong>Description:</strong> {description}</p>
            </div>
            <div 
                className='tarea-contenedor-iconos'
                onClick={() => eliminarTarea(id)}>
                <AiOutlineCloseCircle className='tarea-icono' />
            </div>
        </div>  
    )
}

export default Task;