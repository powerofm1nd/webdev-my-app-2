import { Container, Row, Col, Button } from "react-bootstrap"
import ProductComment from "./ProductComment";
import AddCommentForm from "./AddCommentForm";

export default function ProductDetails({ currentProduct, onCloseProductDetails, onNewComment, currency }) {

    return (
        <>
            <Container>
                <Row>
                    <Col xs={5}>
                        <img src={currentProduct.src} className="w-100 rounded" />
                        <br />
                        <Button className="w-100 mt-1" onClick={onCloseProductDetails}>Back to the Main page</Button>
                    </Col>
                    <Col>
                        <h4>{currentProduct.name} ({currentProduct.price} {currency})</h4>
                        <hr className="bg-danger border-2 border-top border-secondary" />
                        <p className="text-justify">
                            {currentProduct.fullDescription}
                        </p>
                    </Col>
                </Row>
                <br />
                <Row>
                    {   
                        currentProduct?.comments?.length > 0
                        ? currentProduct.comments.map((c, index) => (
                            <ProductComment key={index} comment={c} />
                          ))
                        : <Row><p className="text-center text-body-secondary mt-5 mb-5">There are no comments yet 😞😞😞</p></Row>
                    }
                    <AddCommentForm onNewComment={onNewComment} />
                </Row>
            </Container>
        </>
    );
}