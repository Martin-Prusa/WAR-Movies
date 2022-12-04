import { useState } from "react";
import { Movie } from ".";
import { IconStar } from '@tabler/icons'
import './movie-card.css'

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {

    const [stars, setStars] = useState(0)

    const numbers = Array.from(Array(5).keys())

    const handleClick = (n: number) => {
        if(n === stars) setStars(0)
        else setStars(n)
    }

  return (
    <div className="movie-card">
      <div className="content">
        <div>
          <img src={movie.img} alt={movie.title} />
        </div>
        <div className="info">
          <div className="title">{movie.title}</div>
          <div className="director">{movie.director}</div>
        </div>
      </div>
      <div className="stars">
        {numbers.map((i, n) => <IconStar onClick={() => handleClick(n+1)} style={n+1 <= stars ? {fill: '#005bd1'} : {}} />)}
      </div>
    </div>
  );
};
