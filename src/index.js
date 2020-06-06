import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
// import {createStore} from 'redux';
// import {Provider} from 'react-redux';
// import rootReducer from './Redux/Reducer/rootReducer';

// const storeRedux = createStore(rootReducer);

// ReactDOM.render(<Provider store={storeRedux}><App /></Provider>,document.getElementById('root'));
ReactDOM.render(
        <Router>
          <App />
        </Router>
        ,document.getElementById('root'));

// const nama = 'Huda Damar';
// function sapa (){
//   return 'Halo ' + nama;
// }
// const element = <h1>{sapa()} !!</h1>;
// ReactDOM.render(element, document.getElementById('nama'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
