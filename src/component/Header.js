import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';
import {AutoAffix} from 'react-overlays';

import constant from '../common/constant';
import http from '../common/http';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        if (this.props.website_menu.list.length === 0) {
            this.handleLoad();
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleLoad() {
        http.request({
            url: '/desktop/xietong/website/init',
            data: {

            },
            success: function (data) {
                var website_menu_list = data.website_menu_list;
                for (var i = 0; i < website_menu_list.length; i++) {
                    for (var j = 0; j < website_menu_list[i].children.length; j++) {
                        website_menu_list[i].children[j].website_menu_parent_id = website_menu_list[i].website_menu_id;
                    }
                }

                this.props.dispatch({
                    type: 'website_menu',
                    data: {
                        list: website_menu_list
                    }
                });

                this.props.dispatch({
                    type: 'advertisement',
                    data: {
                        list: data.advertisement_list
                    }
                });

                this.props.dispatch({
                    type: 'article_category',
                    data: {
                        list: data.article_category_list
                    }
                });
            }.bind(this),
            error: function (data) {

            },
            complete: function () {

            }
        });
    }

    handleClickeMenu(url) {
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
                            <Link to="/index">欢迎光临佛山协同(国际)学校</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            {
                                this.props.website_menu.list.map(function (website_menu) {
                                    return (
                                        <NavDropdown key={website_menu.website_menu_id} title={website_menu.website_menu_name}
                                                     id="basic-nav-dropdown">
                                            {
                                                website_menu.children.map(function (children) {
                                                    return (
                                                        <MenuItem key={children.website_menu_id} onClick={this.handleClickeMenu.bind(this, children.website_menu_url === '' ? '/page/' + children.page_id : children.website_menu_url)}>{children.website_menu_name}</MenuItem>
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
                        <div className="pull-left"><Link to="/index">您好，欢迎光临佛山协同(国际)学校！</Link></div>
                        <div className="pull-right hidden-xs">
                                <Link className="margin-right" to="/student/login">我是学生</Link>
                                |
                                <Link className="margin-left" to="/teacher/login">我是老师</Link>
                            </div>
                    </div>
                </div>
                <div className="main">
                    <div className="container col-padding">
                        <div className="pull-left">
                            <Link to="/index">
                                <img className="logo" src="/image/logo.png" alt=""/>
                            </Link>
                        </div>
                        <div className="pull-right hidden-xs">
                            <Link to="/not/found">
                                <div className="search">
                                    <div className="search-input">

                                    </div>
                                    <div className="search-bottom">
                                        全站搜索
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <AutoAffix viewportOffsetTop={0}>
                    <div className="menu hidden-xs">
                        <ul className="container col-padding">
                            <li className={this.props.website_menu_id === "home" ? "active" : ""} onClick={this.handleClickeMenu.bind(this, '/index')}>
                                <Link to="/index">首页</Link>
                            </li>
                            {
                                this.props.website_menu.list.map(function (website_menu) {
                                    return (
                                        <li key={website_menu.website_menu_id} className={this.props.website_menu_id === website_menu.website_menu_id ? "active" : ""}>
                                            <div onClick={this.handleClickeMenu.bind(this, website_menu.website_menu_url === '' ? '/page/' + website_menu.page_id : website_menu.website_menu_url)}>{website_menu.website_menu_name}</div>
                                            <ul>
                                                {
                                                    website_menu.children.map(function (children) {
                                                        return (
                                                            <li key={children.website_menu_id} onClick={this.handleClickeMenu.bind(this, children.website_menu_url === '' ? '/page/' + children.page_id : children.website_menu_url)}>
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
                            {
                                this.props.advertisement.list.map(function (advertisement) {
                                    return (
                                        <Carousel.Item key={advertisement.advertisement_id}>
                                            <Link to="">
                                                <img className="banner-image" src={constant.image_host + advertisement.file_original_path} alt=""/>
                                            </Link>
                                        </Carousel.Item>
                                    )
                                })
                            }
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
        website_menu: state.website_menu,
        advertisement: state.advertisement,
        article_category: state.article_category
    }
})(Header);