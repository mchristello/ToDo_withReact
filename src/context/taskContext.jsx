import React from 'react';
import { createContext, useContext } from "react";
import { useLocalStorage } from "../utils/localStorage";
import Swal from "sweetalert2";
import uuid from "react-uuid";


const TaskContext = createContext([]);

export default TaskContext;

export const useTaskContext = () => useContext(TaskContext);

export const TaskContextProvider = ({ children }) => {

    const [tareas, setTareas] = useLocalStorage('Tasks', []);;

    const existe = (tarea) => {
        return tareas.some((buscada) => buscada.title === tarea.title);
    };

    const agregarTarea = (tarea, email) => {
        if (existe(tarea)) {
            return Swal.fire({
                title: 'La tarea ya existe en la lista',
                icon: 'warning',
                showCloseButton: true,
                confirmButtonText: 'Ok'
            });
        }

        const id = uuid();
        const nuevaTarea = { ...tarea, id, email };

        setTareas([...tareas, nuevaTarea]);
        console.log(nuevaTarea);

        return Swal.fire({
                title: 'Tarea agregada',
                icon: 'success',
                showCloseButton: true,
                confirmButtonText: 'Ok'
            });
    };

    const removerTarea = (tarea) => {
        const removerTarea = tareas.filter((buscada) => buscada.id !== tarea.id);
        return setTareas(removerTarea);
    };

    const vaciarLista = () => {
        setTareas([]);
    };

    const pendientes = (user) => {
        const wantedTasks = tareas.filter(t => t.email === user.email)
        const pendientes = wantedTasks.reduce(
        (acum, tarea) => (tarea.estado === false ? acum + 1 : acum),
        0
        );
        return pendientes;
    };

    const actualizarEstado = (tarea, estado) => {
        const copiaTareas = [...tareas];
        const actualizarTarea = copiaTareas.map((actual) => {
            if (actual.id === tarea.id) {
                return { ...actual, estado: estado ? false : true };
            } else {
                return actual;
            }
        });
        setTareas(actualizarTarea);
    };


    return (
        <TaskContext.Provider
            value={{
            tareas,
            existe,
            agregarTarea,
            removerTarea,
            vaciarLista,
            pendientes,
            actualizarEstado,
        }}
        >
            {children}
        </TaskContext.Provider>
        );
};
    