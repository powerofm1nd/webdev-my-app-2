import { Button } from 'react-bootstrap';
export default function AuthButton({Logout}) 
{
    return (
        <Button variant="danger" onClick={()=>{ Logout() }}>Logout</Button>
    );
}