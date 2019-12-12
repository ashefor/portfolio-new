import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Row, Col, Icon } from 'antd';
import Navbar from './Navbar';
import Landing from '../pages/Landing';
import Aboutme from '../pages/Aboutme';
import Education from '../pages/Education';
import Employment from '../pages/Employment';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';
import Logo from '../assets/images/logo.png';
import { HashLink as Link } from 'react-router-hash-link';
import Skills from '../pages/Skills';

const { Sider, Content, Footer } = Layout;

const Home = props => {
    const handleClick = () => {
        const sidebar = document.querySelector(".side-bar")
        const menu = document.querySelector(".menu-button");
        menu.classList.toggle("menu-button--open");
        sidebar.classList.toggle("sm-d-block");
    }
    const closeMenuOnClick = () => {
        const sidebar = document.querySelector(".side-bar")
        const menu = document.querySelector(".menu-button");
        menu.classList.remove("menu-button--open");
        sidebar.classList.remove("sm-d-block");
    }
    return <React.Fragment>
        <Layout>
            <Sider
                className="side-bar"
                style={{
                    overflow: 'auto',
                    height: '100vh',
                    position: 'fixed',
                    left: 0,
                    zIndex: 4,
                    flex: '0 0 250px'
                }}>
                <Navbar />
            </Sider>
            <div className="navbar-toggle">
                <Link smooth to="#home" onClick={closeMenuOnClick}>
                    <img src={Logo} alt="" width="50" />
                </Link>
                <button onClick={handleClick} className="menu-button">
                    <span>Menu</span>
                </button>
            </div>
            <Layout style={{ marginLeft: 250 }} className="body-stack">
                <Content id="home">
                    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Landing />
                    </div>
                </Content>
                <Content className="main-body" id="about-me">
                    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Aboutme />
                    </div>
                </Content>
                <Content className="main-body" id="skills">
                    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Skills />
                    </div>
                </Content>
                <Content className="main-body" id="education">
                    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Education />
                    </div>
                </Content>
                <Content className="main-body" id="employment">
                    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Employment />
                    </div>
                </Content>
                <Content className="main-body" id="portfolio">
                    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Portfolio />
                    </div>
                </Content>
                <Content className="main-body" id="contact">
                    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Contact />
                    </div>
                </Content>
                <Footer className="footer">
                    <div style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Row className="footer-row">
                            <Col xs={24} sm={18} md={16}>
                                <div className="social-footer left-text">
                                    <Link to="">
                                        <Icon type="twitter" style={{ fontSize: 22 }} />
                                    </Link>
                                    <Link to="">
                                        <Icon type="facebook" style={{ fontSize: 22 }} />
                                    </Link>
                                    <Link to="">
                                        <Icon type="github" style={{ fontSize: 22 }} />
                                    </Link>
                                    <Link to="">
                                        <Icon type="linkedin" style={{ fontSize: 22 }} />
                                    </Link>
                                </div>
                            </Col>
                            <Col xs={24} sm={6} md={8} className="xs-margin-10-top centered-text">
                                <div>
                                    <img src={Logo} alt="" width="70" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="bottom-footer" style={{ maxWidth: '1000px', margin: 'auto' }}>
                        <Row>
                            <Col sm={24} md={24} className="centered-text">
                                <span className="uppercase-text"> <Icon type="copyright" /> {new Date().getFullYear()} Michael Ashefor</span>
                            </Col>
                        </Row>
                    </div>
                </Footer>
            </Layout>
        </Layout>
    </React.Fragment>
}

export default Home