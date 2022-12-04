import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MovieCard } from './MovieCardComponent';
import { moviesData } from './data'

function App() {

  const movies = moviesData

  return (
    <div className="App">
      {movies.map(movie => <MovieCard movie={movie}/>)}
    </div>
  );
}

export default App;
