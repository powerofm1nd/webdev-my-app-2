import { useState } from 'react'
import Card from 'react-bootstrap/Card'
import { Form, Button } from 'react-bootstrap'

export default function ProductCard({ product, onSelect, onUnselect, onOpenProductDetails, currency }) {
  const [checked, setChecked] = useState(product.checked);

  function handleChange() {
    if (!checked) {
      onSelect(product);
    }
    else {
      onUnselect(product)
    }
    setChecked(!checked);
  }

  return (
    <Card style={{ width: '18rem', padding: '10px' }}>
      <Card.Img variant="top" className="rounded" src={product.src} />
      <Card.Body>
        <Card.Title >
          <Form.Check type="checkbox" onChange={handleChange} label={product.name + ' (' + product.price + ' ' + currency +')'} checked={product.checked}/>
        </Card.Title>
        <Card.Text>
          {product.description} 
        </Card.Text>
        <Button variant='success' className='w-100' onClick={()=> {onOpenProductDetails(product)}}>Details</Button>
      </Card.Body>
    </Card>
  );
}