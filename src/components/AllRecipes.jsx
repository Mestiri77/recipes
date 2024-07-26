import React, { useEffect, useState } from "react";


import OneRecipe from "./OneRecipe";
import axios from "axios";

function AllRecipes() {
  const [recipes, setRecipes] = useState([]);


useEffect(()=>{
  axios.get("http://localhost:3000/data.json").then((res)=>{
setRecipes(res.data)
  }).catch((err)=>console.log(err))
},[])

  console.log(recipes, "those are recipes");
  return (
    <div className="d-flex flex-wrap gap-5 justify-content-center p-3">
      {recipes.map((element, index) => {
        return <OneRecipe element={element} key={index} />;
      })}
    </div>
  );
}

export default AllRecipes;
