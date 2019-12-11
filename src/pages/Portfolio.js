import React from 'react';
import { Row, Col } from 'antd';

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
                            <Col className="margin-7-b" xs={24} sm={24} md={18} >
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
                            </Col>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    </React.Fragment>
}

export default Portfolio