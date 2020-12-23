import React, { useEffect, useState } from 'react';
import { applyFilter, getAllChar, getQuotes, searchChar } from '../API/api';
import './Home.css';
import Nav from '../Components/Nav/Nav';
import Main from '../Components/Main/Main';
import BackPallete from '../Components/BackPallete/BackPallete';

const Home = () => {

    const [values, setValues] = useState({
        characters: [],
        error: '',
        loading: '',
        filter: false
    })
    const [pagingOptions, setPagingOptions] = useState({
        totalCount: 63,
        itemsperpage: 10,
        initialpage: 1,
        initialoffset: 0
    })
    const [filterValues, setFilterValues] = useState({
        isFilter: false,
        filterData: []
    })

    useEffect(()=> {
        if(filterValues.isFilter){
            applyFilter(pagingOptions.initialoffset)
        .then(data=> {
            console.log(data);
            setValues({...values, characters: data})
            setPagingOptions({...pagingOptions, totalCount: 12 })
        }).catch(err=> console.log(err))
        } else{
            fetchChar()
        }
    }, [filterValues.isFilter, pagingOptions.initialpage])
    
    const fetchChar = ()=> {
        setValues({ ...values, loading: true })
            getAllChar(pagingOptions.initialoffset)
                .then(data => {
                    console.log(data);
                    setValues({ ...values, loading: false, characters: data })
                    setPagingOptions({...pagingOptions, totalCount: 63})
                }).catch(err => {
                    setValues({ ...values, loading: false })
                })
    }

   
    return (
        <React.Fragment>

            <Nav filterValues={filterValues} setFilterValues={setFilterValues}/>
            <div className='body_container'>
                <BackPallete />
                <Main values={values}
                      setValues={setValues}
                      pagingOptions={pagingOptions}
                      setPagingOptions={setPagingOptions}
                      filterValues={filterValues}
                      fetchChar = {fetchChar}/>
            </div>
        </React.Fragment>
    )
}
export default Home;