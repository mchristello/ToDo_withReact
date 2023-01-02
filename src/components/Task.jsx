import { useContext, useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";
import { UserContext } from "../context/userContext";

const Task = () => {

    const { tareas, actualizarEstado, removerTarea } = useTaskContext();
    const { userState } = useContext(UserContext)

    const [ userTasks, setUserTasks ] = useState([])

    useEffect(() => {
        const wantedTasks = tareas.filter(t => t.email === userState.email)
        setUserTasks(wantedTasks);
    }, [userState])

    return (
        <Container>
            {userTasks.length > 0 ? (
                <Container className="d-inline-flex justify-content-center flex-wrap mt-5 gap-5">
                    {tareas.map(tasks => {
                        if(tasks.email === userState.email) {
                            return (
                                (tasks.estado === true) ? (
                                    <Card className="bg-success text-light task_card" border="light" key={tasks.id} style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title as='h3'>{tasks.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-info">{tasks.expected}</Card.Subtitle>
                                            <Card.Text className="mb-5">
                                                {tasks.description}  - <i><b>Done</b></i>
                                            </Card.Text>
                                            <Card.Footer className="d-flex gap-3 card-btn">
                                                <Button variant="info" className="mb-1" onClick={() => actualizarEstado(tasks, tasks.estado)} >Change Status</Button>
                                                <Button variant="danger" className="mb-1" onClick={() => removerTarea(tasks)} >Delete</Button>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                ) : (
                                    <Card className="task_card" border="warning" key={tasks.id} style={{ width: '18rem' }}>
                                        <Card.Body>
                                            <Card.Title as='h3'>{tasks.title}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{tasks.expected}</Card.Subtitle>
                                            <Card.Text className="mb-5">
                                                {tasks.description}
                                            </Card.Text>
                                            <Card.Footer className="d-flex gap-0 card-btn">
                                                <Button variant="info" className="mb-1" onClick={() => actualizarEstado(tasks, tasks.estado)} >Change Status</Button>
                                                <Button variant="danger" className="mb-1" onClick={() => removerTarea(tasks)} >Delete</Button>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                )
                            )
                        }
                    })}
                </Container>
            ) : (
                <Container className="mt-5">
                    <h2>There's no task in your agenda, add a new one!</h2>
                    <Button className="home_btn mt-5" variant="success" as={Link}to="/NewTask">New Task</Button>
                </Container>
            )}
        </Container>
    );
}

export default Task;