import React from 'react';
import { Row, Col } from 'antd';
import classes from '../styles/employment.module.css'

const Employment = props => {
    return <React.Fragment>
        <div>
            <Row type="flex" justify="start">
                <Col xs={24} sm={24} md={20} lg={22} xl={22}>
                    <div>
                        <h4 className="uppercase-text bold-700 margin-13-b heading-text">Employment</h4>
                        <Row>
                            <Col className={`${classes['columns']}`} xs={24} sm={24} md={12} lg={8} xl={6} >
                                <div className="width-100 hide-overflow">
                                    <span className={`${classes['']} bold-600 uppercase-text margin-3-b d-block black-font`}>
                                        3 wise pixels
                                    </span>
                                    <span className={`${classes['']} bold-500 uppercase-text d-block line-h-25 height-50`}>
                                        frontend developer
                                    </span>
                                    <span className="d-block employment-year uppercase-text black-bg white-font">
                                        Nov 2019 -present
                                    </span>
                                </div>
                            </Col>
                            <Col className={`${classes['columns']}`} xs={24} sm={24} md={12} lg={8} xl={6} >
                                <div className="width-100 hide-overflow">
                                    <span className={`${classes['']} bold-600 uppercase-text margin-3-b d-block black-font`}>
                                        suplias
                                    </span>
                                    <span className={`${classes['']} bold-500 uppercase-text d-block line-h-25 height-50`}>
                                        frontend developer
                                    </span>
                                    <span className="d-block employment-year uppercase-text black-bg white-font">
                                        oct 2019 - nov 2019
                                    </span>
                                </div>
                            </Col>
                            <Col className={`${classes['columns']}`} xs={24} sm={24} md={12} lg={8} xl={6} >
                                <div className="width-100 hide-overflow">
                                    <span className={`${classes['']} bold-600 uppercase-text margin-3-b d-block black-font`}>
                                        uplanit
                                    </span>
                                    <span className={`${classes['']} bold-500 uppercase-text d-block line-h-25 height-50`}>
                                       frontend developer
                                    </span>
                                    <span className="d-block employment-year uppercase-text black-bg white-font">
                                        july 2019 - aug 2019
                                    </span>
                                </div>
                            </Col>
                            <Col className={`${classes['columns']}`} xs={24} sm={24} md={12} lg={8} xl={6} >
                                <div className="width-100 hide-overflow">
                                    <span className={`${classes['']} bold-600 uppercase-text margin-3-b d-block black-font`}>
                                        photizzo
                                    </span>
                                    <span className={`${classes['']} bold-500 uppercase-text d-block line-h-25 height-50`}>
                                        junior software developer
                                    </span>
                                    <span className="d-block employment-year uppercase-text black-bg white-font">
                                        jan 2019 - mar 2019
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    </React.Fragment>
}

export default Employment