import React from "react";
import { Button, Container } from "react-bootstrap";
import "./Items.css";

function Items(props) {
  if (props.showDelete === true) {
    return (
      <Container className="items">
        {props.items.map((item, i) => (
          <div className="row">
            <li className="listItem" key={i}>
              {item}
            </li>
            <Button
              size="sm"
              className="deleteBtn"
              variant="danger"
              onClick={() => props.handleDelete(i)}
            >
              -
            </Button>
          </div>
        ))}
      </Container>
    );
  } else {
    return (
      <Container className="items">
        {props.items.map((item, i) => (
          <div className="row">
            <li className="listItem" key={i}>
              {item}
            </li>
          </div>
        ))}
      </Container>
    );
  }
}

export default Items;
