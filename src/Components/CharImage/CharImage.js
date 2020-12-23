import React from 'react';
import './CharImage.css';
const CharImage = ({image})=> {
   return (
       <img src={image} className='charimage'></img>
   )
}
export default CharImage;