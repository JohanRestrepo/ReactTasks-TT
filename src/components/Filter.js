import React from "react";
import '../styles/Filter.css';

function Filter(){
    return(
        <div>
            <button>All</button>
            <button>Completed</button>
            <button>Pending</button>
            <button>By Priority</button>
        </div>
    )
}

export default Filter;