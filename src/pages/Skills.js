import React from 'react';
import { Row, Col, Icon } from 'antd';
import Icons from '../components/customIcons'

const Skills = props => {
    return <React.Fragment>
        <div>
            <Row type="flex" justify="start">
                <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                    <div>
                        <h4 className="uppercase-text bold-700 margin-13-b heading-text">Skills</h4>
                        <p>Lorem Ipsum dummy bla bla</p>
                        <Row>
                            <Col xs={24} sm={24} md={8} >
                                <div>
                                    <span className="bold-600 uppercase-text margin-3-b d-block black-font">languages
                                    </span>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                                <Icon component={()=><i className="devicon-javascript-plain colored"></i>

                                            } style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   javascript
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <Icon component={()=><i className="devicon-typescript-plain colored"></i>
                                        } style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   typescript
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <Icon component={()=><i className="devicon-html5-plain colored"></i>
                                        } style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   html
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <Icon component={()=><i className="devicon-css3-plain colored"></i>
                                        } style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   css
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={8} >
                                <div>
                                    <span className="bold-600 uppercase-text margin-3-b d-block black-font">Frameworks/Libraries
                                    </span>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <Icon component={()=><i className="devicon-angularjs-plain colored"></i>
                                        } style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   angular
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <Icon component={()=><i className="devicon-react-original colored"></i>
                                        } style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   react
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <Icon component={()=><i className="devicon-bootstrap-plain colored"></i>
                                            } style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   bootstrap
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <Icons.BulmaIcon style={{fontSize: 20}}/> 
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   bulma
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <Icons.AntIcon style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   ant design
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <span>
                                            <Icon component={()=><i className="devicon-angularjs-plain colored"></i>
                                        } style={{fontSize: 20}}/>
                                            </span>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   angular material
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col xs={24} sm={24} md={8} >
                                <div>
                                    <span className="bold-600 uppercase-text margin-3-b d-block black-font">Database
                                    </span>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                        <span>
                                            <Icons.FirebaseIcon style={{fontSize: 20}}/>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   firebase
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={3} sm={3} md={3} lg={3} xl={3}>
                                            <span>
                                            <span>
                                            <Icon component={()=><i className="devicon-angularjs-plain colored"></i>
                                        } style={{fontSize: 20}}/>
                                            </span>
                                            </span>
                                        </Col>
                                        <Col xs={21} sm={21} md={21} lg={21} xl={21}>
                                            <p>
                                                <span className="uppercase-text">
                                                   angular in-memory web api
                                                </span>
                                            </p>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    </React.Fragment>
}

export default Skills