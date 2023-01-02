import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { FcRightDown2 } from 'react-icons/fc';
import { Link } from "react-router-dom";
import { useTaskContext } from "../context/taskContext";
import { UserContext } from "../context/userContext";
import TaskList from "./TaskList";

const TaskListContainer = () => {

    const { userState } = useContext(UserContext)
    const { tareas } = useTaskContext();

    return (
        <Container>
            {!userState ? 
                (
                    <Container>
                        <h2 className="mt-5">Please LogIn to manage your tasks <FcRightDown2 /></h2>
                        <Button className="mt-5 login_btn" as={Link}to='/logIn' variant="success">LogIn</Button>
                        <h3 className="mt-5">Or...</h3>
                        <Button className="mt-5 register_btn" as={Link}to='/newUser' >Register</Button>
                    </Container>
                ) :
                (
                    <Container>
                    {
                        tareas.length > 0 ? <TaskList /> : 
                        <Container className="mt-5">
                            <h3>Your Tasks List it's <b>empty</b></h3>
                            <Button as={Link}to='/NewTask' variant="success" className="mt-5" >Set a new one</Button>
                        </Container>
                    }
                    </Container>
            )}
        </Container>
    );
}

export default TaskListContainer;