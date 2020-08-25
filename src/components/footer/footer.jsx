import React, { Fragment } from 'react';

import './footer.css';


const Footer = () => {
    return (
        <Fragment>
            <div className="footer-header">
                <span className="contact" >Contact</span>
                <div className="footer-border">
                    <span className="email-address"> Corium@gmail.com</span>
                    <span className="phone-number" >567-987-4344</span>
                </div>

            </div>
        </Fragment>
    )
}


export default Footer;