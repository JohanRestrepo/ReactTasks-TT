import React, { useEffect, useState } from "react";
import "../styles/TaskList.css";
import TaskForm from "./TaskForm";
import Task from "./Task";
import Filter from "./Filter";

const tareasIniciales = JSON.parse(localStorage.getItem("tareas")) || [];

function TaskList(){
    
    const [tareas, setTareas] = useState(tareasIniciales);
    const [tareasF, setTareasF] = useState(tareasIniciales);

    const agregarTarea = tarea => {
        console.log(tarea)
        if(tarea.title.trim()){
            tarea.title = tarea.title.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas)
            setTareasF(tareasActualizadas)
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
        setTareasF(tareasActualizadas);
    }

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
        setTareasF(tareasActualizadas);
    }

    const filtrarTareas = filtro => {
        if (filtro === 'all'){
            setTareasF(tareas);
        }else if(filtro === 'completed'){
            const tareasActualizadas = tareas.filter(tarea => tarea.completed === true);
            setTareasF(tareasActualizadas);
        }else if(filtro === 'pending'){
            const tareasActualizadas = tareas.filter(tarea => tarea.completed === false);
            setTareasF(tareasActualizadas);
        }else if(filtro === 'priority'){
            const tareashigh = tareas.filter(tarea => tarea.priority === 'high');
            const tareasmedium = tareas.filter(tarea => tarea.priority === 'medium');
            const tareaslow = tareas.filter(tarea => tarea.priority === 'low');

            const tareasActualizadas = [...tareashigh, ...tareasmedium, ...tareaslow];
            setTareasF(tareasActualizadas);
        }
    }

    useEffect(() => {
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);
    
    return(
        <>
            <TaskForm agregarTarea={agregarTarea}/>
            <div>
                <Filter filtrarTareas={filtrarTareas}/>
            </div>
            <div className='tarea-lista-contenedor'>
                {
                    tareasF.map((tarea) =>
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