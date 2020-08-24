import React, { Fragment } from 'react';

import './header.css';


const Header = () => {
    return (
        <Fragment>
            <div className="header-border">
                <span className="title">Corium Leathor Works</span>
                <span className="shop-link">Shop</span>
            </div>
        </Fragment>
    )
}


export default Header;