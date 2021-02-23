import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../store/actions/gamesAction";
import { getGameDetail } from "../store/actions/gameDetailAction";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Link, useHistory, useLocation } from "react-router-dom";
import GameDetail from "./GameDetail";
import { imageResize } from "../util";
import Loading from "./Loading";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => state.gamesList);
  const { upcomingGames, newGames, popularGames } = gamesList;

  const gameInfo = useSelector((state) => state.gameInfo);
  const gameDetailReady = gameInfo.returned;

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const clickCardHandler = (id) => {
    dispatch(getGameDetail(id));
    history.push(`/game/${id}`);
  };

  const gameList = (list) =>
    list.map((game) => {
      return (
        <Card key={game.id} onClick={() => clickCardHandler(game.id)}>
          <h3>{game.name}</h3>
          <p>{game.released}</p>
          <img src={imageResize(game.background_image, 640)} alt="" />
        </Card>
      );
    });

  const upcomingGamesSection = gameList(upcomingGames);

  const popularGamesSection = gameList(popularGames);

  const newGamesSection = gameList(newGames);

  const path = useLocation().pathname;
  const isGameDetailPath = path.includes("game");

  return (
    <>
      {!isGameDetailPath ? "" : gameDetailReady ? <GameDetail /> : <Loading />}

      <StyledHome style={{ height: gameDetailReady ? "100vh" : "" }}>
        <h2>Upcoming Games</h2>
        <Cards>{upcomingGamesSection}</Cards>
        <h2>Popular Games</h2>
        <Cards>{popularGamesSection}</Cards>
        <h2>New Games</h2>
        <Cards>{newGamesSection}</Cards>
      </StyledHome>
    </>
  );
};

const StyledHome = styled(motion.div)`
  overflow: hidden;
  width: 90%;
  margin: auto;
  h2 {
    margin: 3rem;
  }
`;

const Cards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
`;

const Card = styled(motion.div)`
  box-shadow: 5px 5px 10px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2rem;
  overflow: hidden;

  text-align: center;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  margin: 3rem;
  cursor: pointer;
`;

export default Home;
