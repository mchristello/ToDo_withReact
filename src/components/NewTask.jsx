import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useTaskContext } from "../context/taskContext";
// import { TaskForm } from "../utils/form";
import Select from 'react-select'
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { Link } from "react-router-dom";



const NewTask = () => {

    const { userState, linkTask } = useContext(UserContext)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [estado, setEstado] = useState();
    const [expected, setExpected] = useState()

    const { agregarTarea } = useTaskContext();

    // Funcion para el formulario   
    const onSubmit = (e) => {
        e.preventDefault();
        agregarTarea({ title, description, estado, expected }, userState.email);
        setTitle("");
        setDescription("");
        setExpected("")
    };

    //* Array que le se utiliza en el componente react-select para las opciones
    const options = [
        { label: "Pending", value: false },
        { label: "Done", value: true },
    ];

    return (
        <Container>
            {!userState ? 
            (
                <Container>
                    <h2 className="mt-5">Please LogIn to Add New Tasks</h2>
                    <Button className="mt-5 login_btn" as={Link}to='/logIn' variant="success">LogIn</Button>
                    <h3 className="mt-5">Or...</h3>
                    <Button className="mt-5 register_btn" as={Link}to='/newUser' >Register</Button>
                </Container>
            ) :
            (
                <Container className="form_container">
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
                            <Button variant="success" className="btn mt-5" type="submit" value="Registrar tarea" onClick={ linkTask } >Apoint this Task </Button>
                        </Form>
                </Container>
            )}
        </Container>
    );
}

export default NewTask;