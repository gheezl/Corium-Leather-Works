import React, { Fragment, useContext } from 'react';

import './header.css';

import { ItemsContext } from "../../contexts/providers/item-provider.jsx"


const Header = () => {
    const value = useContext(ItemsContext)
    const increment = 2

    console.log(value)
    return (
        <Fragment>
            <img alt="belt-loop" src={value.items[0].img[increment]} height="100px" width="100px" />
            <div className="header-border">
                <span className="title">Corium Leathor Works</span>
                <span className="shop-link">Shop</span>
            </div>
        </Fragment>
    )
}


export default Header;