import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../store/actions/gamesAction";

const Users = () => {
  const dispatch = useDispatch();
  const gamesList = useSelector((state) => state.gamesList);
  const { upcomingGames, newGames, popularGames } = gamesList;

  useEffect(() => {
    dispatch(getGames());
  }, [dispatch]);

  const ug = upcomingGames.map((game) => {
    return <h2>{game.name}</h2>;
  });

  const ng = newGames.map((game) => {
    return <h2>{game.name}</h2>;
  });

  const pg = popularGames.map((game) => {
    return <h2>{game.name}</h2>;
  });

  return (
    <>
      {ug}
      {ng}
      {pg}
    </>
  );
};

export default Users;
