import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";
import { useTaskContext } from "../context/taskContext";

const NavBar = () => {

    const { pendientes } = useTaskContext();

    return (
        <>
            <Navbar className="navbar" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link}to='/'>ToDo App</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                        <Nav.Link as={Link}to='/'>Home</Nav.Link>
                        <Nav.Link as={Link}to='/newTask'>New Task</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <FcTodoList />
                    {pendientes() > 0 &&
                        <Badge pill bg="info">
                            {pendientes()}
                        </Badge>
                    }
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;