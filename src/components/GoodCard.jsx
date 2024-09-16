import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Form } from 'react-bootstrap';

export default function GoodCard({ good, onSelect, onUnselect }) {
  const [checked, setChecked] = useState(false);

  function handleChange() {
    if (!checked) {
      onSelect(good);
    }
    else {
      onUnselect(good)
    }
    setChecked(!checked);
  }

  return (
    <Card style={{ width: '18rem', padding: '10px' }}>
      <Card.Img variant="top" src={good.src} />
      <Card.Body>
        <Card.Title >
          <Form.Check type="checkbox" onChange={handleChange} label={good.name} />
        </Card.Title>
        <Card.Text>
        
        {good.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}