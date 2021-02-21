import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../store/actions/gamesAction";

const Home = () => {
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => state.gamesList);
  const { upcomingGames, newGames, popularGames } = gamesList;

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const upcomingGamesSection = upcomingGames.map((game) => {
    return (
      <div className="game_card">
        <h3>{game.name}</h3>
        <p>{game.released}</p>
        <img src={game.background_image} alt="" />
      </div>
    );
  });

  return (
    <div className="homepage">
      <h2>Upcoming Games</h2>
      {upcomingGamesSection}
    </div>
  );
};

export default Home;
