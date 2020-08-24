import React, { Fragment } from 'react';

import './loader.css';


const Loader = () => {
    return (
        <Fragment>
            <div className="spinner-border">
                <div class="hollow-dots-spinner">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>
        </Fragment>
    )
}


export default Loader;