import React from 'react';
import { Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import Logo from '../assets/images/logo.png';
// import Scrollspy from 'react-scrollspy';

const Navbar = props => {
    // <Scrollspy items={['home', 'about-me','education', 'employment', 'portfolio', 'contact']} currentClassName={"is-current"} scrolledPastClassName={'is-current'} onUpdate={event} offset={100}/>
    return <React.Fragment>
            <Menu className="uppercase-text side-bar-nav" mode="inline" selectedKeys={[props.location.hash]} style={{ height: '100vh', overflow: 'scroll' }}>
                <Menu.ItemGroup className="margin-15-b"
                    title={
                        <Link smooth to="#home" style={{ display: 'block', marginBottom: '10%', position: 'relative' }}>
                            <img src={Logo} alt="" width="50" />
                        </Link>
                    }>
                    <Menu.Item key="#about-me">
                        <Link smooth to="#about-me">
                            <span className="nav-text">about me</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="#skills">
                        <Link smooth to="#skills">
                            <span className="nav-text">skills</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="#education">
                        <Link smooth to="#education">
                            <span className="nav-text">education</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="#employment">
                        <Link smooth to="#employment">
                            <span className="nav-text">employment</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="#portfolio">
                        <Link smooth to="#portfolio">
                            <span className="nav-text">portfolio</span>
                        </Link>
                    </Menu.Item>
                    <Menu.Divider></Menu.Divider>
                    <Menu.Item key="#contact">
                        <Link smooth to="#contact">
                            <span className="nav-text">contact</span>
                        </Link>
                    </Menu.Item>
                </Menu.ItemGroup>
                <div className="navbar-widget padding-15-top">
                    <div className="navbar-footer-widget">
                        <Link to="">
                            <Icon type="twitter" />
                        </Link>
                        <Link to="">
                            <Icon type="facebook" />
                        </Link>
                        <Link to="">
                            <Icon type="github" />
                        </Link>
                        <Link to="">
                            <Icon type="linkedin" />
                        </Link>
                    </div>
                </div>
            </Menu>
    </React.Fragment>
}

export default withRouter(Navbar)