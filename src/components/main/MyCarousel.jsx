import Carousel from 'react-bootstrap/Carousel';
import firstImg from '../../images/1.jpg';
import secondImg from '../../images/2.jpg';
import thirdImg from '../../images/3.jpg';

const MyCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img src={firstImg} className='w-100 rounded' alt='sunflower1'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={secondImg} className='w-100 rounded' alt='sunflower2'></img>
            </Carousel.Item>
            <Carousel.Item>
                <img src={thirdImg} className='w-100 rounded' alt='sunflower3'></img>
            </Carousel.Item>
        </Carousel>
    );
}
export default MyCarousel;