import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Load from "../components/Loader/Load";
import Error from "../components/error/Error";

const Meal = () => {
  const [meal, setMeal] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  useEffect(() => getMeal(), []);
  const getMeal = async () => {
    try {
      setIsLoading(true);
      const result = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      setMeal(...result.data.meals);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  return isLoading ? (
    <Load />
  ) : isError ? (
    <Error />
  ) : (
    <div className="meal-info">
      <div className="meal-preview">
        <h1>{meal.strMeal}</h1>
        <img src={meal.strMealThumb} alt="meal" width={800} height={500} />
      </div>
      <div className="meal-description">
        <h1>Category</h1>
        <p>{meal.strCategory}</p>
        <h1>Area</h1>
        <p>{meal.strArea}</p>
        <h1>Description</h1>
        <p>{meal.strInstructions}</p>
      </div>
    </div>
  );
};

export default Meal;
