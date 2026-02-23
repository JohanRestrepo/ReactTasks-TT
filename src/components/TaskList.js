import React, { useState } from "react";
import "../styles/TaskList.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import Filter from "./Filter";

function TaskList(){
    
    const [tareas, setTareas] = useState([]);

    const agregarTarea = tarea => {
        console.log(tarea)
        if(tarea.title.trim()){
            tarea.title = tarea.title.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas)
        }
        console.log(tareas)
    }

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if(tarea.id === id){
                tarea.completed = !tarea.completed;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    }
    
    return(
        <>
            <TaskForm agregarTarea={agregarTarea}/>
            <div>
                <Filter/>
            </div>
            <div className='tarea-lista-contenedor'>
                {
                    tareas.map((tarea) =>
                        <Task
                            key={tarea.id}
                            id={tarea.id} 
                            title={tarea.title} 
                            description={tarea.description} 
                            completed={tarea.completed} 
                            priority={tarea.priority}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    )
                }
                
            </div>
        </>    
    )
}

export default TaskList;