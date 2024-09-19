import { Button } from 'react-bootstrap';

export default function CurrencyButton({onCurrencyChanged, currency})
{
    return (
        <Button variant="success" className='m-1' onClick={onCurrencyChanged}>{currency}</Button>
    );
}