import React, {Fragment, useState} from 'react';
import {dispatch} from '../globalState/States';
import { Link, withRouter } from 'react-router-dom';

import './Styles/navbar.css'

function Navbar (props){
  const [search, setSearch] = useState(false);
  const [toggleShow, setToggleShow] = useState(false)
  
  const showSearch = () => {
    if(search === false){
      setSearch(true)
    }
    const inputSearch = document.querySelector('.input-search');
    inputSearch.focus()
    props.history.push('/')
  }

  return(
    <Fragment>
      <nav>
        <h3 className="web-name">{props.name}</h3>
        
        <ul className={toggleShow ? 'show-nav' : ''}>
          { 
            props.navname.map((nav, i) => {
            return (
              <Fragment key={i}>
              {
                nav === 'search'
                  ? <li className={`search ${search ? 'active' : ''}`}
                        onClick={showSearch}>
                        {!search ? 'Search' : ''}
                      <div className={`search-nav ${search ? 'show-input-search' : ''}`}>
                      <input className='input-search' value={props.keyword}
                            onKeyUp={(e) => dispatch({type: 'SetKeyword', value: e.target.value})}
                            placeholder="search movie.."/>
                      <button className="close-search" onClick={()=> {setSearch(false)}}>x</button>
                      </div>
                    </li>
                  : nav === 'home'
                  ? <li onClick={()=> {setToggleShow(false)}}>
                      <Link to={`/`}>{nav}</Link>
                    </li>
                  : <li onClick={()=> {
                        setSearch(false)
                        setToggleShow(false)
                      }}>
                      <Link to={`/${nav}`}>{nav}</Link>
                    </li>
              }
              </Fragment>
              )
            })
          }
        </ul>
        <div className={`menu-toggle ${toggleShow ? 'show-toggle' : ''}`}
             onClick={()=> setToggleShow(state => !state)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </Fragment>
  )
}

export default withRouter(Navbar);