import React from "react";
import Pagination from "react-bootstrap/Pagination";
import "./card.css";
function Numb() {
  return (
    <Pagination className="page">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Ellipsis />
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
}

export default Numb;
