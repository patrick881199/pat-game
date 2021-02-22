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

  const upcomingGamesSection = upcomingGames.map((game) => {
    return (
      <Card key={game.id}>
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={game.background_image} alt="" />
      </Card>
    );
  });

  return (
    <StyledHome>
      <h2>Upcoming Games</h2>
      <Cards>{upcomingGamesSection}</Cards>
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
