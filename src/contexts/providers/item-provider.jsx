import React, { createContext, useState, useEffect, Component } from "react"

const ItemsContext = createContext()


class ItemsProvider extends Component {
    constructor() {
        super();

        this.state = {
            items: [
                {
                    name: "Multipurpose Belt Loop",
                    price: "$15",
                    despricption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    img: "%PUBLIC_URL%/multipurpos-belt-loop-1.jpg"
                },
                {
                    name: "Braided Braclet",
                    price: "%15",
                    despricption: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
                    img: "%PUBLIC_URL%/braided-bracelt-1.jpg"
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