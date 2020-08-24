import React, { Fragment, useContext, lazy } from 'react';

import './shop-page.css';

import { ItemsContext } from "../../contexts/providers/item-provider.jsx"

const ItemsCard = lazy(() => import("../../components/items-card/items-card.jsx"))



const ShopPage = () => {
    const value = useContext(ItemsContext)

    console.log(value)
    return (
        <Fragment>
            <div className="item-map">
                {
                    value.items.map(item =>
                        <ItemsCard item={item} />
                    )
                }
            </div>
        </Fragment>
    )
}

export default ShopPage;