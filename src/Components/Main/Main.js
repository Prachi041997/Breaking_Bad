import React, { useEffect, useState } from 'react';
import BackPallete from '../BackPallete/BackPallete';
import Pagination from 'react-js-pagination';
import Head from '../Head/Head';
import ListItem from '../ListItem/ListItem';
import NextPageBtn from '../NextPageBtn/NextPageBtn';
import './Main.css';
import { getAllChar } from '../../API/api';
const Main = ({values, setValues, pagingOptions, setPagingOptions, filterValues, fetchChar}) => {
    useEffect(() => {
       if(!filterValues.isFilter){
        fetchChar();
       }
    }, [pagingOptions.initialpage])

    const nextPageHandler = ()=> {
       if(pagingOptions.initialpage<=6){
        setPagingOptions({...pagingOptions, initialpage: pagingOptions.initialpage + 1, initialoffset: (pagingOptions.initialpage)*10})
       }
       
    }
    const paginationHandle = (e) => {
        setPagingOptions({ ...pagingOptions, initialpage: e, initialoffset: (e-1) * 10 })
    }

    return (
        <div className='main_container'>
            <Head />
            {values.characters.length !== 0? <React.Fragment>
                <div className='main_boxes'>
                <div className='main_list_container'>
                   {values.characters.map(char=> {
                       return <ListItem char={char} key={char.char_id}/>
                   })}    
                </div>
                <div className='main_nextBtn' onClick={nextPageHandler}>
                     <NextPageBtn clickHandler={nextPageHandler}/>  
                </div>

            </div>
             <div className='pagination_container'>
                 <NextPageBtn btnwidth={`30px`} iconsize={'14px'} psize={`16px`} clickHandler={nextPageHandler}></NextPageBtn> 
                
                 <Pagination
                    activePage={pagingOptions.initialpage}
                    itemsCountPerPage={pagingOptions.itemsperpage}
                    totalItemsCount={pagingOptions.totalCount}
                    pageRangeDisplayed={7}
                    hideDisabled
                    hideFirstLastPages
                    hideNavigation
                    onChange={(e)=> {
                        paginationHandle(e)
                    }}
                />
             </div>
            </React.Fragment>: <h5>No data Available</h5>}
        </div>
    )
}
export default Main;