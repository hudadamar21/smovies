import React from 'react';
import './Styles/about.css';
import sans from '../assets/images/sans.jpg';

// get our fontawesome imports
import { faUser } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function About (props){
  const sosmed = [
    {
      url: 'https://www.facebook.com/hudasevanfold',
      icon: faFacebook,
      color: 'royalblue'
    },
    {
      url: 'https://www.linkedin.com/in/huda-damar-ba95191a0',
      icon: faLinkedin,
      color: 'royalblue'
    },
    {
      url: 'https://www.youtube.com/channel/UCtoPnWKTqawtlYa9lqmEsRg',
      icon: faYoutube,
      color: 'red'
    },
    {
      url: 'https://www.instagram.com/hudadamar21/',
      icon: faInstagram,
      color: 'red'
    }
  ]
  return(
    <section>
      <div class="kotak">
        <div class="konten">
            <img src={sans} height="400" width="600" alt="sans"/>
            <h2>Huda Damar</h2>
            <p>hudadamar21@gmail.com</p>
        </div>
        </div>
        <div class="bola">
          <div class="sosmed">
            <FontAwesomeIcon icon={faUser} />
          </div>
        <ul>
           {
             sosmed.map(sosmed => {
               return (
                <li>
                  <a className="icon" href={sosmed.url} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon color={sosmed.color} icon={sosmed.icon} />
                  </a>
                </li>
               )
             })
           }
           
        </ul>
    </div>
    </section>
  )
}

export default About;