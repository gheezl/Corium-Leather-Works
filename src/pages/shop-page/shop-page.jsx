import React, { Fragment, useContext, lazy, Suspense } from 'react';

import './shop-page.css';

import { ItemsContext } from "../../contexts/providers/item-provider.jsx"

const ItemsCard = lazy(() => import("../../components/items-card/items-card.jsx"))



const ShopPage = () => {
    const value = useContext(ItemsContext)

    console.log(value)
    return (
        <Fragment>
            <span className="shop-page-header">All Products</span>
            <div className="item-map">
                <Suspense fallback="loading...">
                    {
                        value.items.map(item =>
                            <ItemsCard item={item} />
                        )
                    }
                </Suspense>
            </div>
        </Fragment>
    )
}

export default ShopPage;