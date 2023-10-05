import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>
        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.epfl.ch%2Fcampus%2Fservices%2Fwebsite%2Fwp-content%2Fuploads%2F2020%2F07%2Ferror404-en.png&tbnid=-8ehKI28Kq78_M&vet=12ahUKEwjM1uqK6d6BAxXvbWwGHec_CWYQMygQegQIARBo..i&imgrefurl=https%3A%2F%2Fwww.epfl.ch%2Fcampus%2Fservices%2Fwebsite%2Fpublier-sur-le-web-epfl%2Fwordpress%2Fadministration-de-site%2Fepfl-404-en%2F&docid=z5qK_X4uILMa-M&w=1920&h=1080&q=error%20image%20address&ved=2ahUKEwjM1uqK6d6BAxXvbWwGHec_CWYQMygQegQIARBo"
            }
            alt=""
          />
        </div>
        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
