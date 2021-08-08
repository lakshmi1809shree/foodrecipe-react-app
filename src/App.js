import './key'
import './App.css';

import { useState } from "react";
import Axios from 'axios';
import RecipeTile from './RecipeTile';

function App() {

   const [query, setquery] = useState("")  
  const [recipes, setrecipes] = useState([])
 

  const YOUR_APP_ID = "48f83988";
  const YOUR_APP_KEY = "68a8d07802774bfda38350243d4f4022";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }

  return (
    <div className="app">
      <h1 >
        Food Recipe Plaza
      </h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input className="app__input" type="text" placeholder="enter ingridient" value={query} onChange={(e) => setquery(e.target.value)} />
        <input className="app__submit" type="submit" value="Search" />
        
       
      </form>
      <div className="app__recipes">
        {recipes.map(recipe => {
          return <RecipeTile recipe={recipe}/>
        })}
      </div>
    </div>
   
  );
}

export default App;
