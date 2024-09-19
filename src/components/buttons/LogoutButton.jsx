import { Button } from 'react-bootstrap';
export default function AuthButton({Logout}) 
{
    return (
        <Button variant="danger" onClick={()=>{ Logout() }} className='m-1'>Logout</Button>
    );
}