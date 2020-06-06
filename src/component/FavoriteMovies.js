import React, {useState, useEffect } from 'react';
import Card from './Card';

import './Styles/favmovies.css';


function FavoriteMovies (props){

  const [favMovies, setFavMovies] = useState([])
  const favMovieID = ['tt0884328', 'tt1028532','tt0209144','tt0468569']
  
  const getFavMovie = (imdbid) => {
     fetch(`http://www.omdbapi.com/?i=${imdbid}&apikey=2f1d5a46`)
      .then(res => res.json())
      .then(data => {
        setFavMovies(state => [...state, data])
      })
  }
  
  useEffect(()=> {
      favMovieID.map(id=> getFavMovie(id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[favMovieID.length])

  return (
    <div className="container-favmovies">
      <h3>My Favorite Movies</h3>
      <div className="favmovies"> 
      {
        favMovies.map((movie, i) => {
          return (
            <div key={i}>
              <Card
                id={movie.imdbID}
                image={movie.Poster}
                title={movie.Title}
                year={movie.Year}
                type={movie.Type}
              />
            </div>
          )
        })
      }
      </div>
    </div>
  )
}

export default FavoriteMovies;