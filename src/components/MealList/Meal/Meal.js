import { noAuto } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import { Link } from "react-router-dom";
import "./Meal.css";

const Meal = ({ el, setLikes, likes }) => {
  return (
    <div className="small">
      <article className="recipe">
        <div className="pizza-box">
          <img src={el.strMealThumb} width={1500} height={1368} alt="" />
        </div>
        <div className="recipe-content">
          <p className="recipe-tags">
            <span className="recipe-tag">{el.strArea}</span>
            <span className="recipe-tag">{el.strCategory}</span>
          </p>
          <h1 className="recipe-title">
            <a href="#">{el.strMeal}</a>
          </h1>

          <p className="recipe-desc">{el.strInstructions}</p>
        </div>
      </article>
      <div className="btns">
        <button
          className="recipe-save"
          type="button"
          onClick={() => setLikes([...likes, el])}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="#000000"
          >
            <path
              d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
              fill="currentColor"
            />
          </svg>
          Save
        </button>
        <Link to={`/meal/${el.id}`} style={{ textDecoration: "none" }}>
          <button className="recipe-save" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="#000000"
            >
              <path
                d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                fill="currentColor"
              />
            </svg>
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Meal;
