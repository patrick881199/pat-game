import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../store/actions/gamesAction";
import styled from "styled-components";
import { motion } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => state.gamesList);
  const { upcomingGames, newGames, popularGames } = gamesList;

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const imageResize = (url, size) => {
    const pattern = /media\/games/;
    let index = 0;
    if (pattern.test(url)) {
      index = url.indexOf("/games");
      return `${url.substr(0, index)}/resize/${size}/-${url.substr(index)}`;
    } else {
      index = url.indexOf("/screenshots");
      return `${url.substr(0, index)}/resize/${size}/-${url.substr(index)}`;
    }
  };

  const gameList = (list) =>
    list.map((game) => {
      return (
        <Card key={game.id}>
          <h3>{game.name}</h3>
          <p>{game.released}</p>
          <img src={imageResize(game.background_image, 640)} alt="" />
        </Card>
      );
    });

  const upcomingGamesSection = gameList(upcomingGames);

  const popularGamesSection = gameList(popularGames);

  const newGamesSection = gameList(newGames);

  return (
    <StyledHome>
      <h2>Upcoming Games</h2>
      <Cards>{upcomingGamesSection}</Cards>
      <h2>Popular Games</h2>
      <Cards>{popularGamesSection}</Cards>
      <h2>New Games</h2>
      <Cards>{newGamesSection}</Cards>
    </StyledHome>
  );
};

const StyledHome = styled(motion.div)`
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
`;

export default Home;
