import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function RecipeDetails() {
  const [element, setElement] = useState({});
  const { id } = useParams();
  console.log(element);
  console.log(typeof id, "this is id ");

  useEffect(() => {
    axios
      .get("http://localhost:3000/data.json")
      .then((res) => {
       const founded=  res.data.find((e,i)=>e.id === +id)
       setElement(founded)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <Card style={{ width: "18rem" }} key={element.id} onClick={()=>navigate(`/recipeDetails/${element.id}`)}>
      <Card.Img variant="top" src={element.image_url} height="250px" />
      <Card.Body>
        <Card.Title className="text-danger">{element.name}</Card.Title>
      
        <Card.Text>{element.description}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default RecipeDetails;