import React from 'react';
import {dispatch} from '../globalState/States';
import './Styles/card.css';

function Card (props){

  return(
      <div key={props.id} className="card" onClick={() => {
        dispatch({type: 'SetImdbID', value: props.id})
        dispatch({type: 'SetIsDetail', value: true})
        
      }}>
        <div className="image">
          <img src={props.image} alt="mai"/>
        </div>
        <div className="detail">
          <h3 className="title">{props.title} (<span>{props.year}</span>)</h3>
        </div>
      </div>
  )
}
export default Card;