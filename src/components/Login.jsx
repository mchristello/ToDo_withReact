import { useContext } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";
import { UserForm } from "../utils/forms";
import UserAccount from './UserAccount';


const LogIn = () => {

    const { userState, signIn } = useContext(UserContext);
    const { form, handleChange } =  UserForm({
        email: '',
        password: ''
    })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        signIn(form);
    }


    return (
        <Container>
            {userState ? 
            (
                    <UserAccount />
            ) :
            (
                <Container>
                    <Form className="m-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <FloatingLabel controlId="floatingEmail" label='Enter Your Email'>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange} />
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <FloatingLabel controlId="floatingPassword" label='Enter Your Password'>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={(evt) => {handleSubmit(evt)}}>
                            LogIn
                        </Button>
                    </Form>
                    <Button as={Link}to='/newUser' variant="info" >New around this place? Create an account</Button>
                </Container>
            )}
        </Container>
    );
}

export default LogIn;