import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <TaskList/>
      </div>
    </div>
  );
}

export default App;
