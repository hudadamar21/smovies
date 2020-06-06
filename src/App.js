import React, { Component,Fragment } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

// Component
import Navbar from './component/Navbar';

// Views
import Main from './views/Main';
import About from './views/About';
import Donate from './views/Donate';

class App extends Component{

  render(){
    return (
      <Fragment>
        <div className="container">
          <Navbar name="SMovies" navname={['search','home','about','donate']} />
        </div>
        <Route exact path="/" component={Main}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/donate" component={Donate}/>
      </Fragment>
    ) 
  }
}

// agar dapat di import dimana saja
export default App;
