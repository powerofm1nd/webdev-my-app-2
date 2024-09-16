import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';



const MyNavbar = ({ShowAuthModalForm, Logout, isAuth}) => 
{
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
            <Navbar.Brand href="#home">MyNavbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
                {!isAuth ? <LoginButton ShowAuthModalForm={ShowAuthModalForm}></LoginButton> : ""}
                {isAuth ? <LogoutButton Logout={Logout}></LogoutButton> : ""}
            </Nav>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;