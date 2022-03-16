import { FaPizzaSlice, FaHamburger, FaRecycle } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";

//Using NavLink instead of Link adds a class of "active "
import { NavLink } from "react-router-dom";

import React from "react";

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Italian'}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </SLink>
      <SLink to={'/cuisine/American'}>
        <FaHamburger />
        <h4>American</h4>
      </SLink>
      <SLink to={'/cuisine/Chinese'}>
        <GiNoodles />
        <h4>Chinese</h4>
      </SLink>
      <SLink to={'/cuisine/Japanese'}>
        <GiChopsticks />
        <h4>Japanese</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  @media only screen and (min-device-width: 200px) and (max-device-width: 844px) {

  }
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949, #313131);
    width: 6rem;
    height: 6rem;
    transform: scale(0.8);

    h4{
      color: white;
      font-size: 0.8rem;
    }
    svg{
      color: white;
      font-size: 1.5rem;
    }
    &.active{
      background: linear-gradient(to right, #f27121, #e94057 );
      svg{
        color: white;
      }
      h4{
        color: white;
      }
    }
    @media only screen and (min-device-width: 200px) and (max-device-width: 844px) {
width: 30vw ;
height: 9vh ;
margin-right: 0 ;

    }
`
export default Category;
