import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FcTodoList } from "react-icons/fc";
import { FiLogIn, FiLogOut, FiEdit, FiUserCheck } from 'react-icons/fi';
import { useTaskContext } from "../context/taskContext";
import { UserContext } from "../context/userContext";
import { useContext, useEffect, useState } from "react";

const NavBar = () => {

    const { pendientes, tareas } = useTaskContext();
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
                            <Nav.Link as={Link}to='/' className="me-5">Home</Nav.Link>
                            <Nav.Link as={Link}to="/newTask" className="me-5">New Task</Nav.Link>
                            {userState ? (
                                <div className='account_menu'>
                                    <Nav.Link as={Link}to="/userAccount" className="me-5">Mi Cuenta | <FiUserCheck /></Nav.Link>
                                    <Nav.Link as={Link}to='/logIn' variant='light' onClick={ logOut } className="me-5">LogOut | <FiLogOut /></Nav.Link>
                                </div>
                            ) : (
                                <div className='account_menu'>
                                    <Nav.Link as={Link}to="/logIn" className="me-5">Login <FiLogIn /></Nav.Link>
                                    <Nav.Link as={Link}to="/newUser" className="me-5">Register <FiEdit /></Nav.Link>
                                </div>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                    </Container>
                    <Container>
                        Pending
                        <FcTodoList />
                        {userState ? (
                            <Badge className="m-2" pill bg="primary">
                                    {pendientes(userState) >= 0 &&
                                        pendientes(userState)
                                    }
                            </Badge>
                        ) : (
                            <Badge className="m-2" pill bg="primary">
                                    0
                            </Badge>
                        )}
                    </Container>
            </Container>
        </Navbar>
    );
}

export default NavBar;