import React, { useEffect } from "react";

import IndividualComponent from "./IndividualComp";

import { Carousel, Col, Container, Row } from "react-bootstrap";
import menClothing from "../images/menClothing.jpg";
import womenClothing from "../images/womenClothing.jpg";
import electronics from "../images/electronics.png";
import jewellery from "../images/diamond.jpg";

import axios from "axios";

import { useDispatch } from "react-redux";
import { setProducts } from "../redux/actions/prodActions";

import "../css/style.css";
const ProductList = () => {
  const dispatch = useDispatch();

  const axiosProduct = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log(err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    axiosProduct();
  });

  return (
    <Container fluid>
    <Row>
      <Col sm={12}>
        <Carousel className="Corusel">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={menClothing}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>The Best Model's Clothing For Men</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={womenClothing}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>This Season Clothing for Women </h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={electronics}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ color: "black" }}>The best Useful Electronics</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={jewellery} alt="First slide" />
            <Carousel.Caption>
              <h3>These jewelries are for those who want to look better </h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Col>
      
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "5px",
          }}
        >
          Latest Products
        </h2>
        <hr />
        <div >
        <IndividualComponent />
        </div>
      
    </Row>
    </Container>
  );
};

export default ProductList;
