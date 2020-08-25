import React, { Fragment, useContext, lazy, Suspense } from 'react';

import './shop-page.css';

import { ItemsContext } from "../../contexts/providers/item-provider.jsx"


import Loader from '../../components/loader/loader.jsx';

const ItemsCard = lazy(() => import("../../components/items-card/items-card.jsx"))



const ShopPage = () => {
    const value = useContext(ItemsContext)
    return (
        <Fragment>
            <span className="shop-page-header">Our Products</span>
            <div className="item-map">
                <Suspense fallback={<Loader />}>
                    {
                        value.items.map(item =>
                            <ItemsCard item={item} key={item.name} />
                        )
                    }
                </Suspense>
            </div>
        </Fragment>
    )
}

export default ShopPage;