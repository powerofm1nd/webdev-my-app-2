import CardGroup from 'react-bootstrap/CardGroup'
import GoodCard from './GoodCard';
import { useCallback, useState } from 'react';
import { Badge, Row } from 'react-bootstrap';

export default function MyGoods({ goods }) 
{
  const [basket, setBasket] = useState(goods)
  const selectedCount = basket.filter((obj) => obj.checked === true).length;

  const handleSelectionGood = useCallback((good) => {
    let currentBasket = basket.slice();
    currentBasket.find(g => g.id === good.id).checked = true;
    setBasket(currentBasket);
    console.log(basket);
  }, []);

  const handleUnselectionGood = useCallback((good) => {
    let currentBasket = basket.slice();
    currentBasket.find(g => g.id === good.id).checked = false;
    setBasket(currentBasket);
    console.log(basket);
  }, []);

  return (
    <>
    <CardGroup>
      {
        goods?.map((good, i) => {
          return (<GoodCard good={good} key={i} onSelect={handleSelectionGood} onUnselect={handleUnselectionGood}/>);
        })
      }
    </CardGroup>
    
    <Row style={{ padding: '15px' }}><Badge >Selected: {selectedCount}</Badge></Row>
    </>
  );
}