import { useEffect,useState } from "react";

function Popular() {

const [popular, setPopular]= useState([])

//useEffect being used to call API when mounting/ loading of application. Array is added to pass data
  useEffect(() => {
    getPopular();
  },[])

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    // console.log(data);
    setPopular(data.recipes)
  };

  return <div>
    {popular.map((recipe) =>{
      return(
        //adding the recipe.id gives each child an unique "key" prop
        <div key={recipe.id}>
          <p>{recipe.title}</p>
        </div>
      );
    })}
  </div>;
}

export default Popular;
