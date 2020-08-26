import React, { Fragment } from "react"

import "./error-component.css"


const ErrorComponent = () => {
    return (
        <Fragment>
            <h1 className="error">ERROR</h1>
            <span className="error-message">I am sorry, but there is an issue with the site atm.</span>
            <span className="error-message" >Please come back later.</span>
        </Fragment>
    )
}


export default ErrorComponent;