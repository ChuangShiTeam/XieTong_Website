import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {ButtonGroup, Button} from 'react-bootstrap';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import PageSubNav from '../../component/PageSubNav';
import DepartmentSubNav from '../../component/DepartmentSubNav';

import util from '../../common/util';

class Entry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false,
            result_type: '',
            result_message: '',
            menu_index: 1
        }
    }

    componentDidMount() {
        util.setTitle('佛山协同(国际)学校2018年一年级新生报名');

        util.scrollToTop(0);
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleBrochures() {
        this.props.history.push({
            pathname: "/page/e8417cd60aeb474aad40d4ecc8d52b22",
            query: {}
        });
    }

    handleCheck() {
        this.props.history.push({
            pathname: "/primary/check",
            query: {}
        });
    }

    handleSignup() {
        this.props.history.push({
            pathname: "/primary/signup",
            query: {}
        });
    }

    render() {
        return (
            <div>
                <Header history={this.props.history} website_menu_id=""/>
                <div className="content container">
                    <div className="title margin-top-20">
                        <div className="title-icon"></div>
                        <div className="title-breadcrumb">
                            <Link to="/index">首页</Link> > 招生招聘 > 小学报名
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <PageSubNav website_menu_id="a8398373a697416eba6847c2e42c781d" page_id="5b68b36ca31c49839f38aacf6ac65450"/>
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            <ButtonGroup justified vertical>
                                <Button style={{backgroundColor: '#C26B60', color: 'white'}} bsSize="large" onClick={this.handleBrochures.bind(this)} href="#">招生简章</Button>
                                <Button style={{backgroundColor: '#C26B60', color: 'white'}} bsSize="large" onClick={this.handleSignup.bind(this)} href="#">开始报名</Button>
                                <Button style={{backgroundColor: '#C26B60', color: 'white'}} bsSize="large" onClick={this.handleCheck.bind(this)} href="#">报名查询</Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default connect((state) => {
    return {}
})(Entry);
