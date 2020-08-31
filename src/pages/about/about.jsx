import React, { Fragment } from 'react';

import './about.css';


const About = () => {
    return (
        <Fragment>
            <div className="about-border">
                <span className="welcome">Welcome</span>
                <span className="second-introduction">
                    Hi! We are a leather crafts company that is dedicated to creating items and tools to aid you in any construction related work.
                </span>
                <span className="second-introduction">
                    We have a varitey of great and affordable products like a hammer holster and a tape measure clip.
                </span>
                <span className="second-introduction">
                    We hope our products will be of service!
                </span>
            </div>
        </Fragment>
    )
}

export default About;