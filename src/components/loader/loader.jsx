import React, { Fragment } from 'react';

import './loader.css';


const Loader = () => {
    return (
        <Fragment>
            <div className="spinner-border">
                <div className="hollow-dots-spinner">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>
            </div>
        </Fragment>
    )
}


export default Loader;