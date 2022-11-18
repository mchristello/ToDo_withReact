import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";
import { FiLogIn, FiLogOut, FiEdit, FiUserCheck } from 'react-icons/fi';
import { useTaskContext } from "../context/taskContext";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const NavBar = () => {

    const { pendientes } = useTaskContext();
    const { userState, logOut } = useContext(UserContext);

    return (
        <Navbar collapseOnSelect expand="lg" bg="light">
            <Navbar.Brand as={Link}to='/' className='brand ml-auto' size='lg'>
                ToDo App
            </Navbar.Brand>
            <Container>
                    <Container className='navbar_container'>
                    <Navbar.Toggle className="mx-5 mx-5" aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="align-items-center">
                            <Nav.Link as={Link}to='/'>Home</Nav.Link>
                            <Nav.Link as={Link}to="/newTask">New Task</Nav.Link>
                            {userState ? (
                                <div className='account_menu'>
                                    <Nav.Link as={Link}to="/userAccount">Mi Cuenta | <FiUserCheck /></Nav.Link>
                                    <Nav.Link as={Link}to='/logIn' variant='light' onClick={ logOut }>LogOut | <FiLogOut /></Nav.Link>
                                </div>
                            ) : (
                                <div className='account_menu'>
                                    <Nav.Link as={Link}to="/logIn">Login <FiLogIn /></Nav.Link>
                                    <Nav.Link as={Link}to="/newUser">Register <FiEdit /></Nav.Link>
                                </div>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    <Container>
                        Pending
                        <FcTodoList />
                        <Badge className="m-2" pill bg="primary">
                                {pendientes() > 0 &&
                                    pendientes()
                                }
                        </Badge>
                    </Container>
            </Container>
        </Navbar>
    );
}

export default NavBar;