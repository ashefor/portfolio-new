import React from 'react';
import { Row, Col } from 'antd';
import classes from '../styles/portfolio.module.css';
import filmhub from '../assets/images/filmhub.png';
import musicfest from '../assets/images/musicfest.png';
import radrecipe from '../assets/images/radrecipe.png';
import shopmart from '../assets/images/shopmart.png';
import newsheadline from '../assets/images/newsheadline.png';
import wedding from '../assets/images/wedding.png';
import bordman from '../assets/images/bordman.png';
import applenotes from '../assets/images/applenotes.png';
import randomquotes from '../assets/images/randomquotes.png';

const Portfolio = props => {
    return <React.Fragment>
        <div>
            <Row type="flex" justify="start">
                <Col xs={24} sm={24} md={20} lg={22} xl={22}>
                    <div>
                        <h4 className="uppercase-text bold-700 margin-13-b heading-text">Portfolio</h4>
                        <Row>
                            <Col className="margin-7-b" xs={24} sm={24} md={6}>
                                <span>
                                    Find some of my works
                                </span>
                            </Col>
                            <Col xs={24} sm={24} md={18}>
                                <div className={classes['masonry']}>
                                    <div className={classes['brick']}>
                                        <figure>
                                       <img src={filmhub} alt="FilmHub" />
                                        <figcaption>
                                            <h4 className="uppercase-text">
                                                <a href="https://google.com" target="_blank" rel="noopener noreferrer">Filmhub</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className={classes['brick']}>
                                        <figure>
                                        <img src={musicfest} alt="musicfest" />                                       
                                         <figcaption>
                                            <h4 className="uppercase-text">
                                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">musicfest</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className={classes['brick']}>
                                        <figure>
                                        <img src={radrecipe} alt="radrecipe" />                                      
                                         <figcaption>
                                            <h4 className="uppercase-text">
                                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">rad-recipe</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className={classes['brick']}>
                                        <figure>
                                        <img src={shopmart} alt="shopmart" />                                     
                                         <figcaption>
                                            <h4 className="uppercase-text">
                                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">shopmart</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className={classes['brick']}>
                                        <figure>
                                        <img src={newsheadline} alt="newsheadline" />                                    
                                         <figcaption>
                                            <h4 className="uppercase-text">
                                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">newsheadline</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className={classes['brick']}>
                                        <figure>
                                        <img src={wedding} alt="wedding" />                                    
                                         <figcaption>
                                            <h4 className="uppercase-text">
                                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">wedding</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className={classes['brick']}>
                                        <figure>
                                        <img src={bordman} alt="bordman" />                                    
                                         <figcaption>
                                            <h4 className="uppercase-text">
                                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">bordman</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className={classes['brick']}>
                                        <figure>
                                        <img src={applenotes} alt="applenotes" />                                    
                                         <figcaption>
                                            <h4 className="uppercase-text">
                                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">applenotes</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                    <div className={classes['brick']}>
                                        <figure>
                                        <img src={randomquotes} alt="randomquotes" />                                    
                                         <figcaption>
                                            <h4 className="uppercase-text">
                                            <a href="https://google.com" target="_blank" rel="noopener noreferrer">randomquotes</a>
                                            </h4>
                                        </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                {/* <Col className="margin-7-b" xs={24} sm={24} md={18} >
                                <div>
                                    <span className="bold-600 uppercase-text margin-3-b d-block black-font">
                                        Google
                                    </span>
                                    <span className="bold-500 uppercase-text d-block">
                                        Team Lead
                                    </span>
                                    <span className="d-block">
                                        2022 - 2023
                                    </span>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={6} >
                                <div>
                                    <span className="bold-600 uppercase-text margin-3-b d-block black-font">
                                        Google
                                    </span>
                                    <span className="bold-500 uppercase-text d-block">
                                        Team Lead
                                    </span>
                                    <span className="d-block">
                                        2022 - 2023
                                    </span>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={12} lg={8} xl={6} >
                                <div>
                                    <span className="bold-600 uppercase-text margin-3-b d-block black-font">
                                        Google
                                    </span>
                                    <span className="bold-500 uppercase-text d-block">
                                        Team Lead
                                    </span>
                                    <span className="d-block">
                                        2022 - 2023
                                    </span>
                                </div>
                            </Col> */}
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    </React.Fragment>
}

export default Portfolio