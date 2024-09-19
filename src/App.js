import './index.css';
import MyNavbar from './components/main/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/main/MyCarousel';
import Footer from './components/main/Footer';
import Products from './components/product/Products';
import ProductDetails from './components/product/ProductDetails';
import AuthModalForm from './components/AuthModalForm';
import { Container } from 'react-bootstrap';
import { useState, useCallback } from 'react';

let products = [
  {
    id: 1,
    name: 'Sunny Blooms',
    price: 1,
    description: "Grow vibrant sunflowers in your garden! Easy-to-plant seeds for bright, tall flowers.",
    fullDescription: "Introducing 'Sunny Blooms' — a vibrant collection of handpicked flowers that radiate joy and warmth. Each bouquet is thoughtfully curated to bring a splash of color and a touch of nature into your home or special event. Perfect for any occasion, Sunny Blooms features seasonal favorites, ensuring freshness and beauty with every arrangement. Whether you're celebrating love, friendship, or simply the beauty of life, let our flowers brighten your day and uplift your spirits. Experience the essence of sunshine with Sunny Blooms!",
    src: '/images/goods/1.jpg',
    comments:
      [
        {
          author: 'Bob Pumpkin',
          content: 'It\'s the best product in the world! I would like to buy more. I wanna share it with my friends!!! Thx!!!',
          createdAt: 1726743760447,
        },
        {
          author: 'Rob Jackson',
          content: 'I need more! The best of the best! Im enjoying with this product!',
          createdAt: 1726743750243,
        },
        {
          author: 'Benjamin Franklin',
          content: 'If you have never tried it - you must buy it! It just turned my perception! Amazing experience!',
          createdAt: 1726743751342,
        },
      ]
  },
  {
    id: 2,
    name: 'Radiant Sunflowers',
    price: 1.25,
    description: "Start your sunflower journey with these quality seeds. Perfect for any garden space!",
    fullDescription: "Introducing \"Radiant Sunflowers\"—a stunning collection of cheerful blooms that bring warmth and positivity to any space. Each arrangement features vibrant sunflowers, carefully selected for their bold color and long-lasting beauty. Perfect for brightening up your home or celebrating special occasions, \"Radiant Sunflowers\" captures the essence of summer in every bouquet. Whether you're expressing love, gratitude, or simply the joy of nature, let these radiant flowers illuminate your day and uplift your spirits. Experience the sunshine with \"Radiant Sunflowers\"!",
    src: '/images/goods/2.jpg'
  },
  {
    id: 3,
    name: 'Brighten Your Garden',
    price: 2.25,
    description: "High-quality sunflower seeds for bold, golden blooms. Ideal for sunny spots!",
    fullDescription: "Introducing \"Brighten Your Garden\"—your ultimate solution for transforming outdoor spaces into vibrant oases. This curated selection of colorful plants and flowers is designed to bring life and joy to any garden. Each plant is chosen for its beauty and resilience, ensuring a stunning display that thrives in various conditions. Perfect for seasoned gardeners and beginners alike, \"Brighten Your Garden\" inspires creativity and fosters a love for nature. Let your outdoor sanctuary shine with colors and fragrances that uplift your spirit and enhance your surroundings!",
    src: '/images/goods/3.jpg'
  },
];

const App = () => {
  const [isAuth, setAuth] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [currentProduct, setCurrentDetailedProduct] = useState(null)
  const [basket, setBasket] = useState([])
  const [currency, setCurrency] = useState('USD')

  const Login = useCallback(() => { setAuth(true) }, [])
  const Logout = useCallback(() => { setAuth(false) }, [])
  const ShowAuthModalForm = useCallback(() => { setModalShow(true) }, [])
  const HideAuthModalForm = useCallback(() => { setModalShow(false) }, [])

  const handleNewComment = (newComment) => {

    setCurrentDetailedProduct(prevProduct => ({
      ...prevProduct,
      comments: [newComment, ...prevProduct.comments || []]
    }));
  };

  function onCurrencyChanged() {
    const newCurrency = currency === 'USD' ? 'UAH' : 'USD'

    setCurrency(newCurrency)

    products.forEach((p) => {
      if (newCurrency === 'USD') {
        p.price = p.price / 40;
      }

      if (newCurrency === 'UAH') {
        p.price = p.price * 40;
      }
    });
  }

  return (
    <Container>
      <MyNavbar
        ShowAuthModalForm={ShowAuthModalForm}
        Logout={Logout}
        isAuth={isAuth}
        currency={currency}
        onCurrencyChanged={onCurrencyChanged}
      />
      <AuthModalForm show={modalShow} onHide={HideAuthModalForm} onAuth={Login} />
      {
        currentProduct === null ?
          <>
            <MyCarousel />
            <br />
            <Products
              products={products}
              onOpenProductDetails={setCurrentDetailedProduct}
              onBasketChanged={setBasket}
              currency={currency}
            />
          </>
          :
          <ProductDetails
            currentProduct={currentProduct}
            onCloseProductDetails={() => { setCurrentDetailedProduct(null) }}
            onNewComment={handleNewComment}
            currency={currency}
          />
      }
      <Footer />
    </Container>
  );
}

export default App;