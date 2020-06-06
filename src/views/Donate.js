import React, { Fragment } from 'react';
import './Styles/donate.css';

function Donate (props){

  const CopyNumber = () => {
      let el = document.createElement('textarea');
      el.value = '089614266484';
      el.setAttribute('readonly', '');
      el.style = {visibility: 'hidden',display: 'none'};
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      alert('Copied')
  }

    return (
      <Fragment>
        <div className="donate">
          <h2>Support Me</h2>
          <p>dengan memberikan donasi berupa pulsa dengan jumlah berapapun</p>
          <p>donasi seikhlasnya yaa <span role="img" aria-label="">😃</span></p>
          <div className="phone-number" onClick={CopyNumber}>
            <h2>Nomor saya :</h2>
            <h1>089614266484</h1>
          </div>
          <h5>Click untuk copy nomor</h5>
        </div>
      </Fragment>
    )
}

export default Donate;