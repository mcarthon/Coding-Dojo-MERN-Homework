import React, { useState } from 'react';

const Task = ({tasks}) => {

    const [ taskList, setTaskList ] = useState(tasks);

    const [ taskDescription, setTaskDescription ] = useState("");
 
    const deleteTask = (index) => {

        const updatedTaskList = [ ...taskList ];

        updatedTaskList.splice( index, 1);

        setTaskList(updatedTaskList);

    }

    const createTask = (e) => {

        e.preventDefault();

        const newTask = {

            text: taskDescription,

            completed: false

        };

        const updatedTaskList = [ ...taskList, newTask ];        

        setTaskList(updatedTaskList);

    }

    const toggleCompleted = (index) => {

        const updatedTaskList = [  ...taskList ];

        updatedTaskList[index].completed = !updatedTaskList[index].completed; 

        setTaskList(updatedTaskList);

    }

    return (

        <div>

            <form onSubmit={ createTask }>

                <input type="text" value={taskDescription} onChange={ (e) => setTaskDescription(e.target.value) } />

                <input type="Submit" value="Add New Task" />

            </form>            

                { taskList.map( ( task, index ) =>
                
                    <div key={ index }>

                    <label>{ task.text }</label>
                
                    <input type="checkbox" checked={ task.completed } onChange={ () => toggleCompleted( index ) } />

                    <input type="submit" value="Delete" onClick={ () => deleteTask(index) }/>

                    </div>

                ) }

        </div>

    );

}

export default Task;