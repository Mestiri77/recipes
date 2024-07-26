import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllRecipes from './components/AllRecipes';
import OneRecipe from './components/OneRecipe';
import NavBar from './layouts/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <div className="App" >
       <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllRecipes />} />
        <Route path="/recipeDetails/:id" element={<RecipeDetails/>} />
      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
