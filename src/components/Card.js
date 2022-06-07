import React from "react";
import { useSelector,useDispatch } from "react-redux";

import { Col, Container, Row, ListGroup,Button,Modal } from "react-bootstrap";
import "../css/style.css";
import { removeBasketItem } from "../redux/actions/prodActions";

import emptyOrder from "../images/sadPhoto.jpg"

const emptyCard =()=>{
  return(
       <div className="emptyOrder">
         <img src={emptyOrder}  alt="noOrder"/>
         <h3 className="noOrder">You have not got any order (:</h3>
       </div>
  )
}

const Basket = () => {
  const basketItems = useSelector((state) => state.basketItems);
  const total =basketItems.map((item)=>{
    return item.price
  })
  const totalMoney = total.reduce((x,y)=>(x+y),0)
  console.log(totalMoney);
  return (
    <Container fluid>
      <Row>
          <div className="Header">
          <h1>Basket</h1>
          <div className="totalMoney">
            <p><strong>You Choise  <br/>{basketItems.length}</strong></p> <h4>Total Money  <br/>${totalMoney}</h4>
          </div>
          </div>
          <hr/>
        
          <div className="MainCard">
            {basketItems.length ===0 && emptyCard()}
            {basketItems.length !==0 && basketItems.map((basketItem) => (
              <BasketItem key={basketItem.id} basketItem={basketItem} basketItems={basketItems} />
            ))}
          </div>
        
      </Row>
    </Container>
  );
};

const BasketItem = ({ basketItem,basketItems }) => {
  const dispatch = useDispatch();
  
  const handleRemove = () => {
    dispatch(removeBasketItem(basketItem.id));
  };

  return (
    <Container key={basketItem.id}>
      <Row>
        <Col sm={8}>
          <div className="addCard">
            <img src={basketItem.image} className="CardImage" alt="" />
            <h2>{basketItem.category}</h2>
            <h3>${basketItem.price}</h3>
            <button className="CardButton" onClick={handleRemove}>
              Remove item
            </button>
          </div>
        </Col>
        
        <Col sm={4}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>Category : {basketItem.category}</Modal.Title>
            </Modal.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>Cost: ${basketItem.price}</ListGroup.Item>
              <ListGroup.Item>Title : {basketItem.title}</ListGroup.Item>
              <ListGroup.Item>
                Rating: {basketItem.rating.rate} ✩
              </ListGroup.Item>
              <ListGroup.Item>Description : {basketItem.description}</ListGroup.Item>
            </ListGroup>

            <Modal.Footer>
              <Button variant="outline-primary" className="w-100">
                Order Item
              </Button>
            </Modal.Footer>
          </Modal.Dialog>
        </Col>
      </Row>
    </Container>
  );
};


export default Basket;