import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";
import Numb from "./components/Numb";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  return (
    <div className="App">
      <NavBar setSearch={setSearch} />
      {/* <AddMovie /> */}
      <MoviesList search={search} />
      <Footer />
    </div>
  );
}

export default App;
