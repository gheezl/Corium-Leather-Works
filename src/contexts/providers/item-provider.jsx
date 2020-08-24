import React, { createContext, Component } from "react"

import multiPurposeBeltLoop1 from "../../images/belt-loop/multipurpose-belt-loop-1.jpg"
import multiPurposeBeltLoop2 from "../../images/belt-loop/multipurpose-belt-loop-2.jpg"
import multiPurposeBeltLoop3 from "../../images/belt-loop/multipurpose-belt-loop-3.jpg"

import braidedBracelet1 from "../../images/bracelet/braided-bracelet-1.jpg"
import braidedBracelet2 from "../../images/bracelet/braided-bracelet-2.jpg"
import braidedBracelet3 from "../../images/bracelet/braided-bracelet-3.jpg"
import braidedBracelet4 from "../../images/bracelet/braided-bracelet-4.jpg"

import tapeMeasureClip1 from "../../images/tape-clip/tape-measure-clip-1.jpg"
import tapeMeasureClip2 from "../../images/tape-clip/tape-measure-clip-2.jpg"
import tapeMeasureClip3 from "../../images/tape-clip/tape-measure-clip-3.jpg"


export const ItemsContext = createContext()


class ItemsProvider extends Component {
    constructor() {
        super();

        this.state = {
            items: [
                {
                    name: "Multipurpose Belt Loop",
                    price: "$15",
                    description: "A belt loop for hammers, hatchets, and etc.",
                    img: [multiPurposeBeltLoop1, multiPurposeBeltLoop2, multiPurposeBeltLoop3]
                },
                {
                    name: "Braided Braclet",
                    price: "$15",
                    description: "A hand braided wrist bracelet.",
                    img: [braidedBracelet1, braidedBracelet2, braidedBracelet3, braidedBracelet4]
                },
                {
                    name: "Tape Measure Clip",
                    price: "$15",
                    description: "A Tape Measure construction clip.",
                    img: [tapeMeasureClip1, tapeMeasureClip2, tapeMeasureClip3]
                },
                {
                    img: [tapeMeasureClip3]
                },
                {
                    img: [braidedBracelet2]
                }
            ]
        }
    }

    render() {
        const { children } = this.props
        const items = this.state

        return (
            <ItemsContext.Provider value={items} >{children}</ItemsContext.Provider>
        )
    }
}


export default ItemsProvider;