import { createContext, useContext, useState } from "react";
import React from 'react';
// import { useLocalStorage } from '../utils/localStorage';




const TaskContext = createContext([]);

export default TaskContext;

export const useTaskContext = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }) => {

    const [task, setTask] = useState([]);

    const alreadyExists = (tarea) => task.some((buscada) => buscada.title === tarea.title);

    const newTask = (tarea) => {
        if (!alreadyExists(tarea.title)) {
            const createdTask = { ...tarea };
            console.log(createdTask);
            setTask([...task, createdTask])
        } else {
            alert(`Task ${tarea.title} already exists`);
        };
    }
    
    const clear = () => {
        setTask([]);
    }

    const actualizeState = (tarea) => {
        const taskCopy = [...task];
        const actualizeTask = taskCopy.map((currentTask) =>{
            if(currentTask.title === tarea) {
                return { ...currentTask, checked: !currentTask.checked}
            } else {
                return currentTask;
            }
        });
        setTask(actualizeTask);
    }

    const toUse = {
        task,
        alreadyExists,
        newTask,
        clear,
        actualizeState
    }

    return (
        <TaskContext.Provider value={ (toUse) } >
            { children }
        </TaskContext.Provider>
    )
}
