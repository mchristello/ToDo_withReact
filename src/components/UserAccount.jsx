import { useContext } from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContext";

const UserAccount = () => {

    const { userState } = useContext(UserContext);

    return (
        <Container>
            <h2>My Account</h2>
            {userState ? (
                <h3>Hi, {userState.name}!</h3>
            ) : 
            (
                <div>
                    <h3>LogIn to see your info!</h3>
                    <Button as={Link}to='/logIn'>LogIn</Button>
                </div>
            )}
        </Container>
    );
}

export default UserAccount;