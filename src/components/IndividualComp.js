import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Button, Card} from "react-bootstrap";

import "../css/style.css";

import { addBasketItem } from "../redux/actions/prodActions";

import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/react";

const IndividualComponent = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const addItemCard = (product) => {
    dispatch(addBasketItem(product));
  };
  const productList = products.map((product) => {
    return (
      <Card style={{ width: "18rem" }} key={product.id} className="mt-3">
        <Card.Img
          variant="top"
          src={product.image}
          className="image"
          width="150px"
          height="220px"
        />
        <Card.Body>
          <Card.Title>
            <p className="title">{product.title}</p>
          </Card.Title>
          <Card.Text>
            <h3>${product.price}</h3>
          </Card.Text>
          <Card.Text>
            <p>{product.category}</p>
          </Card.Text>
          <Button
            onClick={() => addItemCard(product)}
            variant="outline-primary"
            className="w-100"
          >
            Add to Card
          </Button>
        </Card.Body>
      </Card>
      
    );
  });
  const override = css`
    display: flex;
    margin: 10px 650px;
    border-color: blue;
    
  `;
  

  return (
    <div className="Card">
      {loading ? (
        <ClipLoader
          color={"1A7AEA"}
          loading={loading}
          css={override}
          size={150}
          
        />
      ) : 
      (
        productList
      )}
    </div> 
  );
};

export default IndividualComponent;
