import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import Search from "./Components/Search";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav>
          <GiKnifeFork />
          <Logo to={"/food-app"}>Foodies Delight</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Lobster Two", cursive;
  @media only screen and (min-device-width: 200px) and (max-device-width: 1024px){
    font-size: 3rem ;

  }
`;
const Nav = styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  svg {
    font-size: 2rem;
  }
  @media only screen and (min-device-width: 200px) and (max-device-width: 1024px){
    display: flex ;
    justify-content:center ;
    svg{
      font-size:4rem ;
    }
  }
`;

export default App;
