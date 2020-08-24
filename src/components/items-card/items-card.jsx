import React, { Fragment } from 'react';

import './items-card.css';


const ItemsCard = (item) => {
    console.log(item)
    return (
        <Fragment>
            <div>
                <img className="item-image" alt="item" src={item.item.img[0]} width="384" height="512" />
            </div>
        </Fragment>
    )
}

export default ItemsCard