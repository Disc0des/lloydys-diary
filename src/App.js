import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";
import NavBar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import NewClient from "./components/NewClient";
import SearchClients from "./components/SearchClients";
// import PrivateRoute from "./components/PrivateRoute";
import Context from "./utils/Context";
import "./styles/App.css";

const App = () => {
  const [details, setDetails] = useState({ username: "", password: "" });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    details,
    setDetails,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <Router>
      <Context.Provider value={value}>
        <NavBar />
        {/* {isLoggedIn === true && <Redirect to="/login" />}
        {isLoggedIn === false && <Redirect exact to="/" />} */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Route path="/new-client" component={NewClient} />
          <Route path="/search-clients" component={SearchClients} />
        </Switch>
      </Context.Provider>
    </Router>
  );
};

export default App;
