import React from "react";
import ReactStars from "react-stars";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

function NavBar({ setSearch, setRate }) {
  const ratingChanged = (newRating) => {
    setRate(newRating);
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand className="text" href="#">
          Yalsa-Movies
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link className="text" href="#action1">
              Home
            </Nav.Link>
            <Nav.Link className="text" href="#action2">
              Movies
            </Nav.Link>

            <Nav.Link href="#" disabled>
              Trailers
            </Nav.Link>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              color2={"#ffd700"}
              half={false}
            />
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <Button variant="outline-success" type="button">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
