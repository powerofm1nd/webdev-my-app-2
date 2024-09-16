import { Button } from 'react-bootstrap';
export default function LoginButton({ShowAuthModalForm}) 
{
    return (
        <Button variant="light" onClick={()=> ShowAuthModalForm()}>Login</Button>
    );
}