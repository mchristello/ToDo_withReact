import { useContext } from "react";
import { Button, Card, Container, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const UserAccount = () => {

    const { userState } = useContext(UserContext);

    return (
        <Container>
            <h2>My Account</h2>
            {userState ? (
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png" />
                    <Card.Body>
                        <Card.Title as='h3'>Hi, {userState.name}!</Card.Title>
                        <Card.Text>
                            Wellcome to your "ToDo" Account. Here you can manage all your task.
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                            <Card.Link href="#">My Task List</Card.Link>
                        </ListGroup.Item>
                        <ListGroup.Item>
                        <Card.Link href="#">Set a new Task</Card.Link>
                        </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#">Log Out</Card.Link> 
                    </Card.Body>
                </Card>
            ) : 
            (
                <div>
                    <h3>LogIn to chek your ToDos!</h3>
                    <Button as={Link}to='/logIn'>LogIn</Button>
                </div>
            )}
        </Container>
    );
}

export default UserAccount;