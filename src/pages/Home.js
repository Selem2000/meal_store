import React from "react";
import MealLIst from "../components/MealList/MealLIst";
const Home = ({ search, setLikes, likes }) => {
  return (
    <div>
      <MealLIst search={search} setLikes={setLikes} likes={likes} />
    </div>
  );
};

export default Home;
