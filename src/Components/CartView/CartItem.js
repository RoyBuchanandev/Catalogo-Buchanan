import React, { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { CartContext } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

export const CartItem = ({ name, price, quantity, img }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Container className="d-flex vh-100">
      <Row className="m-auto align-self-center">
        <Col>
          <Card
            style={{ width: "45rem", display: "flex", alignItems: "center" }}
          >
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>$ {price}</Card.Text>
              <Card.Text>cantidad de productos: {quantity}</Card.Text>
              <Button variant="primary" onClick={removeItem}>
                eliminar <BsFillTrashFill />
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
