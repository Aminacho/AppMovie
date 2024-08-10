import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "./card.css";

function MovieItem({ title, description, poster, rating }) {
  return (
    <Card className="card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={poster} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{"⭐".repeat(rating)}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Watch</Card.Link>
        <Card.Link href="#">Download</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default MovieItem;
