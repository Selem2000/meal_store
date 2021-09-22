import axios from "axios";
import React, { useEffect, useState } from "react";
import Error from "../error/Error";
import Load from "../Loader/Load";
import Meal from "./Meal/Meal";
import "./mealList.css";
import Pagination from "./Pagination/Pagination";

const MealLIst = ({ search, setLikes, likes }) => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [mealsPerPage, setMealsPerPage] = useState(6);

  useEffect(() => getMeals(), []);

  const getMeals = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      setMeals(result.data.meals);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };
  useEffect(() => getMeals(), [search]);

  const indexOfLastPage = currentPage * mealsPerPage;
  const indexOfFirstPage = indexOfLastPage - mealsPerPage;
  const currentMeals = !meals
    ? null
    : meals.slice(indexOfFirstPage, indexOfLastPage);

  return (
    <>
      <div className="meal-list">
        {isLoading ? (
          <Load />
        ) : isError ? (
          <Error />
        ) : !currentMeals ? (
          <Error />
        ) : (
          currentMeals.map((e) => (
            <Meal setLikes={setLikes} likes={likes} el={e} key={e.idMeal} />
          ))
        )}
      </div>
      <Pagination
        totalMeals={!meals ? 0 : meals.length}
        mealsPerPage={mealsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default MealLIst;
