import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Meal from "./pages/Meal";
import NavBar from "./components/NavBar/NavBar";
import { useState } from "react";
import Error from "./pages/Error";
import { Button } from "@material-ui/core";
import PrivateRoute from "./router/PrivateRoute";
import User from "./pages/User";
function App() {
  const [search, setSearch] = useState("");
  const [isAuth, setIsAuth] = useState(false);
  const [likes, setLikes] = useState([]);

  return (
    <div className="App">
      <NavBar setSearch={setSearch} isAuth={isAuth} />
      <Button
        variant="contained"
        style={{
          background: "#333",
          color: "#fff",
          position: "absolute",
          top: "0",
          right: "0",
          marginTop: "71px",
          borderRadius: "10px",
        }}
        onClick={() => setIsAuth(!isAuth)}
      >
        {!isAuth ? "LOG IN" : "LOG OUT"}
      </Button>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Home search={search} setLikes={setLikes} likes={likes} />
          )}
        />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/meal/:id" component={Meal} />
        <PrivateRoute
          path="/user"
          component={User}
          isAuth={isAuth}
          likes={likes}
        />

        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;
