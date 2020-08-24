import React, { Fragment, useState } from 'react';

import './items-card.css';


const ItemsCard = (item) => {
    const [toggle, setToggle] = useState(false)
    const [increment, setIncrement] = useState(0)


    const onRight = () => {
        if (increment < 2) {
            setIncrement(increment + 1)
        }
    }

    const onLeft = () => {
        if (increment > 0) {
            setIncrement(increment - 1)
        }
    }


    return (
        <Fragment>
            <div onMouseEnter={() => setToggle(true)} onMouseLeave={() => setToggle(false)} className="item-border">
                <button onClick={onLeft} className="left">🡰</button>
                <img
                    className="item-image"
                    alt="item"
                    src={item.item.img[increment]}
                    width="384" height="512"
                />
                <button onClick={onRight} className="right">🡲</button>
                <a href={item.item.url} className="buy-product" >Buy Product on Amazon</a>
                {
                    toggle
                        ? (
                            <Fragment>
                                <span className="item-name">{item.item.name} : {item.item.price}</span>
                                {/* <div className="item-drop-down">
                                    <span className="item-description">{item.item.description}</span>
                                </div> */}
                            </Fragment>
                        )
                        : (null)
                }
            </div>
        </Fragment>
    )
}

export default ItemsCard