import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import "./movie.css";
import { type } from "@testing-library/user-event/dist/type";

function AddMovie({ setMoviesData, moviesData }) {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    poster: "",
    rating: "",
  });
  function handleAddNewMovie() {
    setMoviesData([...moviesData, newMovie]);
  }
  return (
    <Form className="form">
      <Row className="row">
        <Col>
          <Form.Control
            placeholder="Movie Title"
            onChange={(e) => {
              setNewMovie({ ...newMovie, title: e.target.value });
            }}
            value={newMovie.title}
          />
        </Col>
        <Col>
          <Form.Control
            placeholder="Movie Description"
            onChange={(e) => {
              setNewMovie({ ...newMovie, description: e.target.value });
            }}
            value={newMovie.description}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Control
            placeholder="Movie Poster-link"
            onChange={(e) => {
              setNewMovie({ ...newMovie, poster: e.target.value });
            }}
            value={newMovie.poster}
          />
        </Col>
        <Col>
          <Form.Control
            type="number"
            min={1}
            max={5}
            placeholder="Movie Rating"
            onChange={(e) => {
              setNewMovie({ ...newMovie, rating: Number(e.target.value) });
            }}
            value={newMovie.rating}
          />
        </Col>
      </Row>

      <button
        className="but"
        type="button"
        onClick={() => {
          handleAddNewMovie();
        }}
      >
        Submit
      </button>
    </Form>
  );
}

export default AddMovie;
