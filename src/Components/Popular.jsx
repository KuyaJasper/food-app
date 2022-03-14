import { useEffect } from "react";

function Popular() {

//useEffect being used to call API when mounting/ loading of application. Array is added to pass data
  useEffect(() => {
    getPopular();
  },[])

  const getPopular = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const data = await api.json();
    console.log(data);
  };

  return <div>Popular</div>;
}

export default Popular;
