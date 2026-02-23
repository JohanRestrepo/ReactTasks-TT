import React, { useState } from "react";
import "../styles/TaskList.css";
import TaskForm from "./TaskForm";

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
    
    return(
        <>
            <TaskForm agregarTarea={agregarTarea}/>
        </>
        
        
    )
}

export default TaskList;