import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import MovieDisplay from "./components/MoveDisplay";
import "./App.css";

function App() {
  return (
    //BEM
    <div className="app">
      <Header />
      <Search />
      <MovieDisplay />
    </div>
  );
}

export default App;
