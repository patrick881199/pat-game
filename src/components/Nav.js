import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { faChessKnight, faSearch } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gameSearch } from "../store/actions/gameSearchAction";
import { useDispatch } from "react-redux";
import { CLEAR_SEARCH } from "../store/types";
const Nav = () => {
  const logo = <FontAwesomeIcon icon={faChessKnight} />;
  const logoSearch = <FontAwesomeIcon icon={faSearch} />;

  const [searchString, setSearchString] = useState("");

  const dispatch = useDispatch();

  const clickSearchHandler = (e) => {
    e.preventDefault();
    dispatch(gameSearch(searchString));
  };

  const logoClickHandler = () => {
    setSearchString("");
    dispatch({
      type: CLEAR_SEARCH,
    });
  };

  return (
    <StyledNav>
      <Logo onClick={logoClickHandler}>{logo}</Logo>
      <form action="#">
        <InputArea>
          <input
            type="text"
            value={searchString}
            onChange={(e) => {
              setSearchString(e.target.value);
            }}
          />
          <button onClick={(e) => clickSearchHandler(e)}>
            Search {logoSearch}
          </button>
        </InputArea>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  width: 50%;
  margin: auto;
  min-height: 20vh;
  padding: 3rem 0rem;
  text-align: center;
`;

const Logo = styled.div`
  font-size: 5rem;
  padding-bottom: 2rem;
  cursor: pointer;
`;

const InputArea = styled.div`
  display: flex;
  input {
    height: 4rem;
    font-size: 2rem;
    box-shadow: 2px 2px 10px 5px rgba(0, 0, 0, 0.1);
    padding: 0.5rem;
  }
  button {
    height: 4rem;
    border: none;
    background-color: lightblue;
    padding: 0rem 2rem;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      background-color: #528fa4;
    }
  }
  justify-content: center;
`;

export default Nav;
