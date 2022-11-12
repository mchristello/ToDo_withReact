import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";
import TaskList from "./TaskList";

const TaskListContainer = () => {

    const { tareas } = useTaskContext();

    return (
        <Container>
            {
                tareas.length > 0 ? <TaskList /> : 
                <Container className="mt-5">
                    <h3>Your Tasks List it's <b>empty</b></h3>
                    <Button as={Link}to='/NewTask' variant="success" className="mt-5" >Set a new one</Button>
                </Container>
            }
            
        </Container>
    );
}

export default TaskListContainer;