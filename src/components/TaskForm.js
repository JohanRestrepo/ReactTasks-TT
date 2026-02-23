import { useForm } from 'react-hook-form';
import '../styles/TaskForm.css';
import { v4 as uuidv4 } from 'uuid'

function TaskForm({agregarTarea}){

    const {register, handleSubmit} = useForm();

    const enviar = (data) => {
        
        const tareaNueva = {
            id: uuidv4(),
            title: data.title,
            description: data.description,
            completed: data.completed,
            priority: data.priority
        }
        
        agregarTarea(tareaNueva);
    }

    const priorities = [
        { value: 'low', label: 'Low' },
        { value: 'medium', label: 'Medium' },
        { value: 'high', label: 'High' }
    ]

    return (
        <form className='tarea-formulario' onSubmit={handleSubmit(enviar)}>
            <input className='tarea-input' type='text' placeholder="Ingresa un titulo" {... register("title")}/>
            <textarea className='tarea-input' type='text' placeholder="Ingresa una descripcion" {... register("description")}/>
            <input className='tarea-input' type='hidden' value="false" {... register("completed")}/>
            <select className='tarea-input' {... register("priority")}>
                <option value="" disabled>--Seleccione--</option>
                {
                    priorities.map(prio => (
                        <option key={prio.value} value={prio.value}>
                            {prio.label}
                        </option>
                    ))
                }
            </select>
            <button className='tarea-boton' type="submit">Agregar Tarea</button>
        </form>
    );
}

export default TaskForm;