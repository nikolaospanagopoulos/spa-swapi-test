import React from 'react';
import starwars from './starwarslogo.png'
import {Card,CardImg} from 'react-bootstrap'
import './logo.css'
const Logo = () => {
    return ( 
        <div className='logo-container'>
            <CardImg  src={starwars} alt="star wars logo"/>
            <h3> movies and people</h3>
        </div>
     );
}
 
export default Logo;