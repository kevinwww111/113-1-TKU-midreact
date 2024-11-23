import React from 'react';
import './MovieDetail.css';

type MovieDetailProps = {
  title: string;
  releaseDate: string;
  overview: string;
  posterPath: string;
  onClose: () => void; // 關閉詳細資訊的按鈕
};

const MovieDetail: React.FC<MovieDetailProps> = ({
  title,
  releaseDate,
  overview,
  posterPath,
  onClose,
}) => {
  return (
    <div className="movie-detail">
      <button className="close-btn" onClick={onClose}>
        X
      </button>
      <h2>{title}</h2>
      <img
        src={`https://image.tmdb.org/t/p/w500/${posterPath}`}
        alt={title}
        className="movie-poster"
      />
      <p><strong>Release Date:</strong> {releaseDate}</p>
      <p>{overview}</p>
    </div>
  );
};

export default MovieDetail;