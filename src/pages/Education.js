import React from 'react';
import {Row, Col} from 'antd';
const Education = props => {
return <React.Fragment>
    <div>
        <Row type="flex" justify="start">
        <Col xs={24} sm={24} md={20} lg={16} xl={16}>
        <div>
           <h4 className="uppercase-text bold-700 margin-13-b heading-text">Education</h4>
           <p>Lorem Ipsum dummy bla bla</p>
           <Row>
               <Col className="margin-7-b" xs={24} sm={24} md={12} >
               <div>
                   <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                   <span>
                       1
                    </span>
                    </Col>
                   <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                       <span className="bold-600 uppercase-text margin-3-b d-block black-font">University of Lagos</span>
                       <p>
                       <span className="uppercase-text">
                               Comp Eng
                               <br />
                               2012 - 2018
                           </span>
                       </p>
                   </Col>
               </div>
               </Col>
               <Col className="margin-7-b" xs={24} sm={24} md={12} >
               <div>
                   <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                   <span>
                       2
                    </span>
                    </Col>
                   <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                       <span className="bold-600 uppercase-text margin-3-b d-block black-font">University of Lagos</span>
                       <p>
                       <span className="uppercase-text">
                               Comp Eng
                               <br />
                               2012 - 2018
                           </span>
                       </p>
                   </Col>
               </div>
               </Col>
               <Col xs={24} sm={24} md={12} >
               <div>
                   <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                   <span>
                       3
                    </span>
                    </Col>
                   <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                       <span className="bold-600 uppercase-text margin-3-b d-block black-font">University of Lagos</span>
                       <p>
                       <span className="uppercase-text">
                               Comp Eng
                               <br />
                               2012 - 2018
                           </span>
                       </p>
                   </Col>
               </div>
               </Col>
               <Col xs={24} sm={24} md={12} >
               <div>
                   <Col xs={4} sm={4} md={4} lg={4} xl={4}>
                   <span>
                       4
                    </span>
                    </Col>
                   <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                       <span className="bold-600 uppercase-text margin-3-b d-block black-font">University of Lagos</span>
                       <p>
                           <span className="uppercase-text">
                               Comp Eng
                               <br />
                               2012 - 2018
                           </span>
                       </p>
                   </Col>
               </div>
               </Col>
           </Row>
         </div>
         </Col>
        </Row>
        </div>
</React.Fragment>
}

export default Education