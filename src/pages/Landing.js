import React from 'react';
import classes from '../styles/landing.module.css'

const Landing = props => {
    return <React.Fragment>
        <div className={classes['landingpage']}>
            <div className={classes['landing-meta']}>
            <span className="large-text uppercase-text bold-500 centered-text">Hello i'm</span>
            <span className="extra-large-text uppercase-text bold-700 centered-text">michael ashefor</span>
            <span className="margin-tb bold-500 uppercase-text centered-text">Frontend developer</span>
            </div>
        </div>
    </React.Fragment>
}

export default Landing