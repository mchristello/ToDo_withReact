import { Button, Card, Container } from "react-bootstrap";
import { useTaskContext } from "../context/taskContext";

const Task = () => {

    const { tareas, actualizarEstado, removerTarea } = useTaskContext();

    return (
        <Container className="d-inline-flex justify-content-center flex-wrap mt-5 gap-5">
            {tareas.map(tasks => {
                return (
                    (tasks.estado === true) ? (
                        <Card className="bg-success text-light" border="light" key={tasks.id} style={{ width: '18rem' }}>
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
                        <Card border="warning" key={tasks.id} style={{ width: '18rem' }}>
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
            })}
        </Container>
    );
}

export default Task;