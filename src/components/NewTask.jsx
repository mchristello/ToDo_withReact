import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useTaskContext } from "../context/taskContext";
// import { TaskForm } from "../utils/form";
import Select from 'react-select'

const NewTask = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estado, setEstado] = useState();
    const [expected, setExpected] = useState()

    const { agregarTarea } = useTaskContext();

    // Funcion para el formulario   
    const onSubmit = (e) => {
        e.preventDefault();
        agregarTarea({ title, description, estado, expected });
        setTitle("");
        setDescription("");
        setExpected("")
    };

    //* Array que le se utiliza en el componente react-select para las opciones
    const options = [
        { label: "Pendiente", value: false },
        { label: "Realizado", value: true },
    ];

    return (
        <Container>
            <h3 className="mt-5 text-info"><u>Here you will be able to add a new task</u></h3>
                <Form className="form-newtask" onSubmit={onSubmit}>
                    <input
                        className="input mt-3"
                        type="text"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Title..."
                        autoComplete="off"
                        required
                    />

                    <input
                        className="mt-3"
                        type="text"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        autoComplete="off"
                        placeholder="Description of the task..."
                        required={true}
                    />

                    <input
                        className="mt-3"
                        type="date"
                        name="expected"
                        value={expected}
                        onChange={(e) => setExpected(e.target.value)}
                        autoComplete="off"
                        placeholder="Deadtime"
                        required={true}
                    />

                    {/* //! SELECT es un componente de react-select y se instala  */}
                    <Select
                        className="mt-3"
                        options={options}
                        onChange={({ value }) => setEstado(value)}
                        defaultValue={{ label: "State of the Task", value: null }}
                        required={true}
                    />
                    <Button variant="success" className="btn mt-5" type="submit" value="Registrar tarea" >Apoint this Task </Button>
                </Form>
        </Container>
    );
}

export default NewTask;