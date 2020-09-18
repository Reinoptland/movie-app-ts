import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage";
import MovieDetailPage from "./pages/MovieDetailPage";
import NavBar from "./components/NavBar";
import { useSelector } from "react-redux";
import { selectLoading } from "./store/appState/selectors";
import Spinner from "./components/Spinner";

function App() {
  const loading = useSelector(selectLoading);
  return (
    <div className="App">
      <NavBar />
      {loading && <Spinner />}
      <Switch>
        <Route path="/movies/:imdbID" component={MovieDetailPage} />
        <Route path="/discover/:searchText?" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
