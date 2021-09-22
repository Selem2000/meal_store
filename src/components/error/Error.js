import { faColumns } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import error from "./fast-food-cancel-svgrepo-com.svg";
const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "90vh",
      }}
    >
      <img src={error} width="165" />
      <h1 style={{ fontSize: "60px", color: "#c70024", margin: "5px 0" }}>
        Error
      </h1>
      <p style={{ margin: "-11px", fontWeight: "900", fontSize: "18px" }}>
        No Meals
      </p>
    </div>
  );
};

export default Error;
