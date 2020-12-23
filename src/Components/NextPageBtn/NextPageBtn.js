import React from 'react';
import './NextPageBtn.css';
const NextPageBtn = ({btnwidth, iconsize, psize, clickHandler}) => {
    return (
        <React.Fragment>
            <div className='nextpagebtn_div' onClick={clickHandler} style={{width: btnwidth, height: btnwidth}}>
                <i class="ri-arrow-right-s-line" style={{fontSize: iconsize}}></i>
            </div>
            <p className='nextpagebtn_p' onClick={clickHandler}  style={{fontSize: psize}}>Next Page</p>
        </React.Fragment>
    )
}
export default NextPageBtn;