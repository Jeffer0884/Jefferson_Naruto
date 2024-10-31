import React, { useEffect, useState } from "react";
import { db } from "../../Firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import "./Favoritos.css";

const FavoritesList = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoritesCollection = collection(db, "favorites");
        const favoritesSnapshot = await getDocs(favoritesCollection);
        const favoritesData = favoritesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFavorites(favoritesData);
      } catch (error) {
        console.error("Error al obtener favoritos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  if (loading) return <p>Cargando favoritos...</p>;

  if (favorites.length === 0) return <p>No tienes favoritos guardados.</p>;

  return (
    <div className="favorites-list">
      <h2>Mis Favoritos</h2>
      <div className="favorites-grid">
        {favorites.map((character) => (
          <Link
            to={`/characters/${character.id}`} // Ajusta la ruta para que coincida con "/characters/:id"
            state={{ character }} // Pasa el personaje en el state
            key={character.id}
          >
            <div className="favorite-card">
              <img src={character.images[0]} alt={character.name} />
              <div className="character-name">{character.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
