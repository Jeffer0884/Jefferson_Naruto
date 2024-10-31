import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import CharacterDetail from "./pages/Detalles/Detallles";
import FavoritesList from "./pages/Favoritos/Favoritos";
import CharacterCard from "./components/Card/Card";
import axios from "axios";
import About from "./pages/about";

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllCharacters = async () => {
    try {
      const response = await axios.get(
        "https://dattebayo-api.onrender.com/characters"
      );
      setCharacters(response.data.characters);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data from API", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllCharacters();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <Router>
      <Header />
      <div className="App">
        <div className="main-content">
          <Routes>
            <Route
              path="/inicio"
              element={<CharacterCard characters={characters} />}
            />
            <Route path="/characters/:id" element={<CharacterDetail />} />
            <Route path="/favorites" element={<FavoritesList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
