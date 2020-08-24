import React, { Fragment, useState } from 'react';

import './items-card.css';


const ItemsCard = (item) => {
    const [toggle, setToggle] = useState(false)


    return (
        <Fragment>
            <div className="item-border">
                <img
                    onMouseEnter={() => setToggle(!toggle)}
                    onMouseLeave={() => setToggle(!toggle)}
                    className="item-image"
                    alt="item"
                    src={item.item.img[0]}
                    width="384" height="512"

                />
                {
                    toggle
                        ? (
                            <div className="item-drop-down">
                                <span className="item-name">{item.item.name}: {item.item.price}</span>
                                <span className="item-description">{item.item.description}</span>
                            </div>
                        )
                        : (null)
                }
            </div>
        </Fragment>
    )
}

export default ItemsCard