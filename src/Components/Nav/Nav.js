import React from 'react';
import Search from '../Search/Search';
import './Nav.css';
const Nav = ({filterValues, setFilterValues, charFlag, reload, setReload})=> {
    console.log(charFlag);
    return (
        
        <div className='nav_container'>
            <div className='nav_brand'>
            <i className="ri-menu-2-line"></i>
            <h6>BBad</h6>    
            </div> 
            <div className='nav_search'>
                <Search reload={reload} setReload={setReload}/>
            </div>
           
           {charFlag? null : <div className='nav_filter'>
                <div className='h6_wrapper'>
                <h6>Filter actors who worked on both <span>Breaking Bad</span> and <span>Better Call for Saul</span></h6>
                </div>
                <button onClick={()=> setFilterValues({...filterValues, isFilter: !filterValues.isFilter})}>{filterValues.isFilter? 'Remove Filter': 'Filter'}</button>
            </div>}
        </div>
    )
}
export default Nav;