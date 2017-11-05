import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';
import {AutoAffix} from 'react-overlays';
import {Link} from 'react-router'

import constant from '../util/constant';
import http from '../util/http';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        if (this.props.menu.list.length === 0) {
            http.request({
                url: '/desktop/website/menu/list',
                data: {
                    task_id: '',
                    page_index: 1,
                    page_size: 8
                },
                success: function (data) {
                    this.props.dispatch({
                        type: 'menu',
                        data: {
                            list: data
                        }
                    });
                }.bind(this),
                complete: function () {

                }
            });
        }
    }

    componentWillUnmount() {

    }

    handleClickeMenu(url) {
        // this.props.history.pushState(null, url);
        this.props.history.push({
            pathname: url,
            query: {}
        });
    }

    render() {
        return (
            <div className="header">
                <Navbar className="hidden-sm hidden-md hidden-lg mobile-header" fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/index">欢迎光临佛山协同(国际)学校</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            {
                                this.props.menu.list.map(function (menu) {
                                    return (
                                        <NavDropdown key={menu.website_menu_id} title={menu.website_menu_name}
                                                     id="basic-nav-dropdown">
                                            {
                                                menu.children.map(function (children) {
                                                    return (
                                                        <div key={children.website_menu_id}>
                                                            <MenuItem onClick={this.handleClickeMenu.bind(this, children.page_id === '' ? children.website_menu_url : '/page/' + children.page_id)}>{children.website_menu_name}</MenuItem>
                                                            <MenuItem divider/>
                                                        </div>
                                                    )
                                                }.bind(this))
                                            }
                                        </NavDropdown>
                                    )
                                }.bind(this))
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="navigation hidden-xs">
                    <div className="container col-padding">
                        <div className="pull-left"><a href="/index">您好，欢迎光临佛山协同(国际)学校！</a></div>
                        <div className="pull-right hidden-xs">
                            <a className="margin-right" href="/not/found">我是学生</a>
                            |
                            <a className="margin-left" href="/not/found">我是老师</a>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="container col-padding">
                        <div className="pull-left">
                            <a href="/index">
                                <img className="logo" src="/image/logo.png" alt=""/>
                            </a>
                        </div>
                        <div className="pull-right hidden-xs">
                            <a href="/404.html">
                                <div className="search">
                                    <div className="search-input">

                                    </div>
                                    <div className="search-bottom">
                                        全站搜索
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <AutoAffix viewportOffsetTop={0}>
                    <div className="menu hidden-xs">
                        <ul className="container col-padding">
                            <li className={this.props.website_menu_id === "home" ? "active" : ""}>
                                <Link to="/index">首页</Link>
                            </li>
                            {
                                this.props.menu.list.map(function (menu) {
                                    return (
                                        <li key={menu.website_menu_id} className={this.props.website_menu_id === menu.website_menu_id ? "active" : ""}>
                                            {menu.website_menu_name}
                                            <ul>
                                                {
                                                    menu.children.map(function (children) {
                                                        return (
                                                            <li key={children.website_menu_id} onClick={this.handleClickeMenu.bind(this, children.page_id === '' ? children.website_menu_url : '/page/' + children.page_id)}>
                                                                <a>{children.website_menu_name}</a>
                                                            </li>
                                                        )
                                                    }.bind(this))
                                                }
                                            </ul>
                                        </li>
                                    )
                                }.bind(this))
                            }
                        </ul>
                    </div>
                </AutoAffix>
                {
                    this.props.is_show_banner ?
                        <Carousel className="banner hidden-xs" interval={5000} keyboard={false}>
                            <Carousel.Item>
                                <a href="/xxjj.html">
                                    <img className="banner-image"
                                         src={constant.host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/045f78f2bbe044caa97a9a7f1aa5b3af.jpg"}
                                         alt=""/>
                                </a>
                            </Carousel.Item>
                            <Carousel.Item>
                                <a href="/xsst.html">
                                    <img className="banner-image"
                                         src={constant.host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/8cafd8e71833445c946a308ed5e9ee93.jpg"}
                                         alt=""/>
                                </a>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="banner-image"
                                     src={constant.host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/281d8f1b11084f939a98488864221bdf.png"}
                                     alt=""/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="banner-image"
                                     src={constant.host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/e13d5cf3dcc64ffc82aaf29bbb576463.png"}
                                     alt=""/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="banner-image"
                                     src={constant.host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/e2579cebf60047b599f8b849f6c7c419.jpg"}
                                     alt=""/>
                            </Carousel.Item>
                        </Carousel>
                        :
                        ''
                }
            </div>
        );
    }
}

Header.propTypes = {
    history: React.PropTypes.object.isRequired,
    website_menu_id: React.PropTypes.string.isRequired,
    is_show_banner: React.PropTypes.bool
};

Header.defaultProps = {
    website_menu_id: '',
    is_show_banner: true
};

export default connect((state) => {
    return {
        menu: state.menu
    }
})(Header);