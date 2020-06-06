import React, {useState,useEffect, Fragment} from 'react';
import { useGlobalState} from '../globalState/States';
import './Styles/main.css';
import Card from '../component/Card';
import DetailMovie from '../component/DetailMovie';
import FavoriteMovies from '../component/FavoriteMovies';

function Main (props){
  const [movies, setMovies] = useState([])
  const [keyword] = useGlobalState('keyword')
  const [isDetail] = useGlobalState('isDetail')
  const [isError, setError] = useState('')

  useEffect(() => {
    getMovies(keyword)
    console.log('movies',movies)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyword.length]) 

  const getMovies = (keyword) => {
     fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=2f1d5a46`)
      .then(res => res.json())
      .then( (data) => setMovies(data.Search))
      .catch(error => setError(state => state = error.toString()))
  }

  return(
    <Fragment>
        <main className="container">
            {
              isError ? <div className="error"><h3>{isError === 'TypeError: Failed to fetch' ? 'Tidak ada Koneksi internet' : isError }</h3></div> 
              : movies ? movies.map((movie, i) => {
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
              : keyword.length > 0 && movies === undefined
                ? <div className="error"><h3>Movies not Found</h3></div>
              : <FavoriteMovies/>
            }
            { isDetail ? <DetailMovie/> : '' }
        </main>
    </Fragment>
  )
}

export default Main;