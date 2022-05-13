import React, { FC } from "react";
import { Link } from "react-router-dom";

export const Home: FC = () => {
  return (
    <>
      <h1>Pokedex</h1>
      <Link to="/pokemon">Pokemon</Link>
    </>
  );
};

export default Home;
