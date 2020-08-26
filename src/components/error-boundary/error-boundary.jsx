import React, { Component, Fragment } from "react"

import ErrorComponent from "./error-component/error-component.jsx"


class ErrorBoundary extends Component {
    constructor() {
        super();

        this.state = {
            hasErrored: false,
        }
    }

    static getDerivedStateFromError(error) {

        return { hasErrored: true }
    }

    componentDidCatch(error, info) {
        console.log(error);
    }


    render() {
        const { hasErrored } = this.state
        const { children } = this.props

        return (
            <Fragment>
                {hasErrored
                    ? (<ErrorComponent />)
                    : (children)
                }
            </Fragment>
        )
    }
}

export default ErrorBoundary;