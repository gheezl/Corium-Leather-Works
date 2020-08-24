import React, { Fragment, useContext, createContext } from 'react';

import './shop-page.css';

import { ItemsContext } from "../../contexts/providers/item-provider.jsx"



const ShopPage = () => {
    const value = useContext(ItemsContext)

    console.log(value)
    return (
        <Fragment>
            <span>hi</span>
        </Fragment>
    )
}

export default ShopPage;