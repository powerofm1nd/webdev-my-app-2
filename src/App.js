import MyNavbar from './components/MyNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyCarousel from './components/MyCarousel';
import MyFooter from './components/MyFooter';
import MyGoods from './components/MyGoods';
import { Container } from 'react-bootstrap';
import { useState, useCallback } from 'react';
import AuthModalForm from './components/AuthModalForm';

let goods = [
  {
    id: 1,
    name: 'Sunny Blooms',
    description: "Grow vibrant sunflowers in your garden! Easy-to-plant seeds for bright, tall flowers.",
    src: '/images/goods/1.jpg'
  },
  {
    id: 2,
    name: 'Radiant Sunflowers',
    description: "Start your sunflower journey with these quality seeds. Perfect for any garden space!",
    src: '/images/goods/2.jpg'
  },
  {
    id: 3,
    name: 'Brighten Your Garden',
    description: "High-quality sunflower seeds for bold, golden blooms. Ideal for sunny spots!",
    src: '/images/goods/3.jpg'
  },
];

const App = () => {
  
  const [isAuth, setAuth] = useState(false)
  const [modalShow, setModalShow] = useState(false);

  const Login = useCallback(() => {
    setAuth(true)
  }, []); 

  const Logout = useCallback(() => {
    setAuth(false)
  }, []); 

  const ShowAuthModalForm = useCallback(() => {
    setModalShow(true)
  }, []); 

  const HideAuthModalForm = useCallback(() => {
    setModalShow(false)
  }, []); 

  return (
    <Container>
      <MyNavbar ShowAuthModalForm={ShowAuthModalForm} Logout={Logout} isAuth={isAuth}></MyNavbar>
      <MyCarousel></MyCarousel>
      <br></br>
      <MyGoods goods={goods} />
      <MyFooter></MyFooter>
      <AuthModalForm
        show={modalShow}
        onHide={HideAuthModalForm}
        onAuth={Login}
      />
    </Container>
  );
}

export default App;