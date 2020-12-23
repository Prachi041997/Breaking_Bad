import React from 'react';
import './Saying.css'
const Sayings = ({quote})=> {
   return(
       <div className='saying_div'>
           <h5>{quote.quote}</h5>
       </div>
   )
}
export default Sayings;