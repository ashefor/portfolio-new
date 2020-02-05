import React from 'react';
import { Row, Col, Button } from 'antd';
import classes from '../styles/aboutme.module.css';
import resume from '../assets/files/Ashefor Michael.pdf';
const Aboutme = props => {
  return <React.Fragment>
    <div>
      <Row type="flex" justify="start">
        <Col xs={24} sm={24} md={20} lg={8} xl={8}>
          <div>
            <h4 className="uppercase-text bold-700 margin-13-b heading-text">About me</h4>
            <p>Frontend Developer from Lagos, Nigeria. </p>
            <ul className={`${classes['about-me-list']} no-margin no-padding`}>
              <li>
                <span>Name:</span>
                Ashefor Michael
             </li>
              <li>
                <span>Email:</span>
                <a href="mailto:mashefor@gmail.com">mashefor@gmail.com</a>
              </li>
              <li>
                <span>Phone:</span>
                080280403095
             </li>
            </ul>
            <Button className="uppercase-text margin-6-top custom-btn" size="large">
              <a href={resume} style={{ transition: 'unset' }} download>download resume</a>
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  </React.Fragment>
}

export default Aboutme