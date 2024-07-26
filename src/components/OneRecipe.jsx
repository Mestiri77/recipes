import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function OneRecipe({ element }) {
  const navigate = useNavigate()

  return (
    <Card style={{ width: "18rem" }} key={element.id} onClick={()=>navigate(`/recipeDetails/${element.id}`)}>
      <Card.Img variant="top" src={element.image_url} height="250px" />
      <Card.Body>
        <Card.Title>{element.name}</Card.Title>
        <Card.Text>{element.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default OneRecipe;
