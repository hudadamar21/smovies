import React, {useState, Fragment, useEffect } from 'react';
import { useGlobalState, dispatch} from '../globalState/States';
import './Styles/detailMovie.css';

function DetailMovie (props){
  let [detail, setDetail] = useState([])
  const [imdbID] = useGlobalState('imdbID')
  let [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getDetailMovie(imdbID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  
  const getDetailMovie = async (imdbID) => {
    setIsLoading(isLoading=true)
    await fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=2f1d5a46`)
    .then(res => res.json())
    .then(data => {
      setDetail(detail = data)
      setIsLoading(isLoading=false)
      console.log('DETAIL', detail)
      })
  }
  return(
    <Fragment>
      <div className="overlay"></div>
      <div className="detail-card">
        {
          !isLoading
          ? 
          <Fragment>
          <div className="poster" style={{ backgroundImage: `url(${detail.Poster})` }}></div>
        <div className="detail-desc">
          <h2 className="title-detail">{detail.Title} ({detail.Year})</h2>
          <ul>
            <li>- Director : {detail.Director}</li>
            <li>- Actor : {detail.Actors}</li>
            <li>- Genre : {detail.Genre}</li>
            <li>- Rating : {detail.imdbRating}</li>
            <li>- Tgl Rilis : {detail.Released}</li>
            <li>- Waktu : {detail.Runtime}</li>
            <li>- Sinopsis : <p>{detail.Plot}</p></li>
          </ul>
        <button className="close-detail" onClick={()=> {
          dispatch({type: 'SetIsDetail', value: false})
          setDetail(detail = [])
        }}>close</button>
        </div>
          </Fragment>
        : <h3 className="is-loading">Loading..</h3>
        }
      </div>
    </Fragment>
  )
}

export default DetailMovie;