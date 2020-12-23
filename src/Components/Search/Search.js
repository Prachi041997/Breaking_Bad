import React, {useState} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { searchChar } from '../../API/api';
import './Search.css';
const Search = ({history, reload, setReload}) => {

    const [searchResults, setSearchResults] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const handleSearch = (e) => {
        if (e.target.value !== '') {
            console.log(e.target.value);
            setSearchValue(e.target.value)
            searchChar(e.target.value)
                .then(data => {
                    console.log(data);
                    setSearchResults(data);
                })
        } else{
            console.log('inside else')
            console.log(e.target.value);
            setSearchValue('')
            setSearchResults([]);
        }
    }

    const clickHandle = (r)=> {
        if(setReload){
            setReload(!reload)
        }
        setSearchValue('')
        setSearchResults([])
        history.push(`/character/${r.char_id}?name=${r.name}`)
    }
    return (
        <React.Fragment>
            <input type='text'
                className='serach_input'
                placeholder='Search Character' value={searchValue}
                onChange={(e) => handleSearch(e)}></input>
            <div className='search_dropdown'>
                {searchResults.map(r => {
                    return <React.Fragment>
                       <div className='serach_list' onClick={()=> {clickHandle(r)}}>
                            <h6>{r.name}</h6>
                        </div>
                       
                    </React.Fragment>
                })}
            </div>
        </React.Fragment>
    )
}
export default withRouter(Search);