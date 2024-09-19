import CardGroup from 'react-bootstrap/CardGroup'
import ProductCard from './ProductCard';
import { useCallback, useState } from 'react';
import { Badge, Row } from 'react-bootstrap';

export default function Products({ products, onOpenProductDetails, onBasketChanged, currency }) 
{
  const [selectedProductsCount, setSelectedProductsCount] = useState(products.filter((obj) => obj.checked === true).length)

  const handleSelectionProduct = useCallback((product) => {
    products.find(g => g.id === product.id).checked = true;
    onBasketChanged(products.slice());
    setSelectedProductsCount(products.filter((obj) => obj.checked === true).length);
  }, []);

  const handleUnselectionProduct = useCallback((product) => {
    products.find(g => g.id === product.id).checked = false;
    onBasketChanged(products.slice());
    setSelectedProductsCount(products.filter((obj) => obj.checked === true).length);
  }, []);

  

  return (
    <>
      <CardGroup>
      {
        products?.map((product, i) => {
          return (
            <ProductCard 
            product={product} 
            key={i} 
            onSelect={handleSelectionProduct} 
            onUnselect={handleUnselectionProduct}
            onOpenProductDetails={onOpenProductDetails}
            currency={currency}
            />
          );
        })
      }
      </CardGroup>
      <Row style={{ padding: '15px' }}>
        <Badge>Selected: {selectedProductsCount}</Badge>
      </Row>
    </>
  );
}