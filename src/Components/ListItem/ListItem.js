import React from 'react';
import { Link } from 'react-router-dom';
import CharImage from '../CharImage/CharImage';
import ViewDetailsBtn from '../ViewDetailsBtn/ViewDetailsBtn';
import './ListItem.css';
const ListItem = ({char})=> {
    return (
        <div className='listitem_container'>
            <div className='listitem_image_container'>
                <CharImage image={char.img}/>
            </div>
            <div className='listitem_details'>
                <h4>{char.name}</h4>
                <h6>Dob- {char.birthday}</h6>
                <Link to={`/character/${char.char_id}?name=${char.name}`}>
                <div className='listitem_btnwrapper'>
                    <ViewDetailsBtn/>
                </div>
                </Link>
            </div>
        </div>
    )
}

export default ListItem;