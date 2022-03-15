import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Searched() {
  const [searched, setSearched] = useState([]);
  let params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipies = await data.json();
    setSearched(recipies.results);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);

  return <div>Searched</div>;
}

export default Searched;
