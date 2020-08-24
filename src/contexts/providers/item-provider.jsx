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
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    img: [multiPurposeBeltLoop1, multiPurposeBeltLoop2, multiPurposeBeltLoop3]
                },
                {
                    name: "Braided Braclet",
                    price: "$15",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    img: [braidedBracelet1, braidedBracelet2, braidedBracelet3, braidedBracelet4]
                },
                {
                    name: "Tape Measure Clip",
                    price: "%15",
                    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    img: [tapeMeasureClip1, tapeMeasureClip2, tapeMeasureClip3]
                },
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