import { useEffect,useState } from "react";
import styled from "styled-components";
// Splide lets me use carosels. https://splidejs.com/integration/react-splide/
import{Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

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
      return(
        <Wrapper>
          <h3>Popular Picks</h3>

          <Splide>
          {popular.map((recipe) => {
            return(
              <SplideSlide>
              <Card key={recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              </Card>
              </SplideSlide>
            );
          })}
          </Splide>
        </Wrapper>
      );
  </div>;
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  img{
    border-radius: 2rem;
  }
`
export default Popular;
