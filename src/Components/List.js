import React, { useState } from "react";
import Items from "./Items";
import "./List.css";
import { Button, Container, Row, Col, ButtonGroup } from "react-bootstrap";

function List() {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [deleteName, setDeleteName] = useState("Delete");
  const [btnColor, setBtnColor] = useState("danger");

  function handleIsDelete() {
    if (isDelete === false) {
      setIsDelete(true);
      setDeleteName("Done");
      setBtnColor("success");
    } else {
      setIsDelete(false);
      setDeleteName("Delete");
      setBtnColor("danger");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (item) {
      setItems([...items, item]);
      setItem("");
    }
    console.log(items);
  }
  function handleDelete(valueIndex) {
    console.log("here" + valueIndex);
    setItems(items.filter((item, index) => valueIndex !== index));
  }
  return (
    <Container className="display">
      <h3 className="heading">
        <u>To Do List</u>
      </h3>

      <input
        className="inputDiv"
        value={item}
        onChange={(event) => {
          setItem(event.target.value);
        }}
      />
      <ButtonGroup size="md">
        <Button type="submit" onClick={handleSubmit}>
          Add
        </Button>
        <Button onClick={handleIsDelete} variant={btnColor}>
          {deleteName}
        </Button>
      </ButtonGroup>
      <hr />
      <ul>
        {
          <Items
            items={items}
            handleDelete={handleDelete}
            showDelete={isDelete}
          />
        }
      </ul>
    </Container>
  );
}

export default List;
