import React from "react";
import '../styles/Filter.css';

function Filter({filtrarTareas}){
    return(
        <div>
            <h3>Filters</h3>
            <button className='filter-boton all' onClick={() => filtrarTareas('all')}>All</button>
            <button className='filter-boton completed' onClick={() => filtrarTareas('completed')}>Completed</button>
            <button className='filter-boton pending' onClick={() => filtrarTareas('pending')}>Pending</button>
            <button className='filter-boton priority' onClick={() => filtrarTareas('priority')}>By Priority</button>
        </div>
    )
}

export default Filter;