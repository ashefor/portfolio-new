import React from 'react';
import { Row, Col} from 'antd';
import Contactform from '../components/contactForm';

const Contact = props => {
    return <React.Fragment>
        <div>
            <Row type="flex" justify="start">
                <Col xs={24} sm={24} md={20} lg={16} xl={16}>
                    <div>
                        <h4 className="uppercase-text bold-700 margin-13-b heading-text">Contact</h4>
                        <Row>
                            <Col className="margin-7-b no-padding" xs={24} sm={24} md={12} >
                                <Contactform />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
        </div>
    </React.Fragment>
}

export default Contact