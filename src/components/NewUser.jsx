import { useContext } from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";
import { UserContext } from "../context/userContext";
import { UserForm } from "../utils/forms";
import Swal from 'sweetalert2';
import UserAccount from "./UserAccount";


const NewUser = () => {

    const { userState, newUser } = useContext(UserContext)
    const { form, handleChange } = UserForm({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const { password, confirmPassword } = form;
        if (password === confirmPassword) {
            newUser(form);
        } else {
            Swal.fire ({
                title: `Ups!!`,
                text: `Revisá los datos ingresados`,
                icon: `error`,
                showConfirmButton: false,
                timer: 1500
            })
        }
    }


    return (
        <Container>
            { userState ?
            (
                    <UserAccount />
            ) :
            (
                <Container>
                    <Form className="m-5" onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <FloatingLabel controlId="floatingName" label='Enter Your Full Name'>
                                <Form.Control type="text" placeholder="Name" name="name" onChange={handleChange}/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <FloatingLabel controlId="floatingEmail" label='Enter Your Email'>
                                <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleChange}/>
                            </FloatingLabel>
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <FloatingLabel controlId="floatingPassword" label='Enter Your Password'>
                                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange}/>
                            </FloatingLabel>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <FloatingLabel controlId="floatingPassword" label='Confirm Your Password'>
                                <Form.Control type="password" placeholder="Password" name="confirmPassword" onChange={handleChange} />
                            </FloatingLabel>
                        </Form.Group>
                        <Button className="mt-5 register_btn" variant="success" type="submit" >
                            Register
                        </Button>
                    </Form>
                </Container>
            )}
        </Container>
    );
}

export default NewUser;