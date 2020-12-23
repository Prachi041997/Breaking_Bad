import React, { useEffect, useState } from 'react';
import { getCharbyId, getQuotes } from '../API/api';
import BackPallete from '../Components/BackPallete/BackPallete';
import Head from '../Components/Head/Head';
import Nav from '../Components/Nav/Nav';
import Sayings from '../Components/Sayings/Sayings';
import queryString from 'query-string';
import './Character.css';
import CharImage from '../Components/CharImage/CharImage';
import { Link, withRouter } from 'react-router-dom';

const Character = ({ match, location, history }) => {
    const [details, setDetails] = useState({});
    const [quotes, setQuotes] = useState([]);
    const [charFlag, setCharFlag] = useState(false)
    const [reload, setReload] = useState('')
    useEffect(() => {
        let url = location.search;
        let params = queryString.parse(url);
        if (params.name) {
            getQuotes(params.name.toLowerCase().replace(/\s/g, '+'))
                .then(data => {
                    if (data !== []) {
                        setQuotes(data)
                    }
                }).catch(err => console.log(err));
        }
    }, [reload])
    useEffect(() => {
        setCharFlag(true)
        getCharbyId(match.params.id)
            .then(data => {
                console.log(data);
                setDetails(data[0])
            }).catch(err => console.log(err))
    }, [reload])
    
    const gobackHandle = ()=> {
        history.goBack();
    }

    return (
        <React.Fragment>
            <Nav charFlag={true} reload={reload} setReload={setReload}/>
            <Link to='/' className='link'>
            <div className='goback_btn_div'>
                <div className='nextpagebtn_div' >
                    <i class="ri-arrow-left-s-line" ></i>
                </div>
                <p className='nextpagebtn_p' >Go Back to Home</p>
            </div>
            </Link>
            <div className='body_container'>
                <BackPallete />
                <div className='character_main'>
                    <Head />
                    {details !== {} ? <div className='character_flex'>
                        <div className='character_image'>
                            <CharImage image={details.img}></CharImage>
                        </div>
                        <div className='character_details'>
                            <h2>{details.name}</h2>
                            <h6>Dob- {details.birthday}</h6>
                            <div className='details_flex'>

                                <div className='details_one'>
                                    <h5>Occupation</h5>
                                    <div className='detail_div'>
                                        {details.occupation ? details.occupation.map(el => {
                                            return <p>{el}</p>
                                        }) : null}
                                    </div>
                                    <h5>Status</h5>
                                    <div className='detail_div'>
                                        <p>{details.status}</p>
                                    </div>
                                    <h5>Nickname</h5>
                                    <div className='detail_div'>
                                        <p>{details.nickname}</p>
                                    </div>
                                </div>
                                <div className='details_two'>
                                    <h5>Potrayed by</h5>
                                    <div className='detail_div'>
                                        <p>{details.portrayed}</p>
                                    </div>
                                    {details.appearance ? <React.Fragment>
                                        <h5>Seasons played</h5>
                                        <div className='detail_div'>
                                            <p>{details.appearance.toString()}</p>
                                        </div>
                                    </React.Fragment> : null}
                                </div>

                            </div>
                        </div>
                    </div>
                        : null}

                   {quotes.length!==0 ?  <React.Fragment>
                    <h2 className='saying_head'> Sayings</h2>
                    
                    {quotes.map(q => {
                        return <Sayings quote={q} key={q.quote_id} />
                    })}
                   </React.Fragment>: null}

                </div>

            </div>
        </React.Fragment>
    )
}
export default withRouter(Character);