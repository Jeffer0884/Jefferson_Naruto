import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ characters }) => {
  return (
    <div className="character-list">
      {characters.map((character) => (
        <div className="card" key={character.id}>
          <Link
            to={`/characters/${character.id}`}
            state={{ character }}
            className="card-link"
          >
            <img
              src={character.images[0]}
              alt={character.name}
              className="card-image"
            />
            <div className="card-content">
              <h2>{character.name}</h2>
              <p>
                <strong>ID:</strong> {character.id}
              </p>
              <p>
                <strong>Genero:</strong>{" "}
                {character.personal.sex || "Not available"}
              </p>
              <p>
                <strong>Fecha de Nacimiento:</strong>{" "}
                {character.personal.birthdate || "Not available"}
              </p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CharacterCard;
