import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Button, Table, Alert, ListGroup, ListGroupItem} from 'react-bootstrap';
import Print from 'rc-print';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import DepartmentSubNav from '../../component/DepartmentSubNav';

import http from '../../common/http';
import util from '../../common/util';
import storage from '../../common/storage';

class Check extends Component {
    constructor(props) {
        super(props);

        this.state = {
            result_type: '',
            result_message: '',
            menu_index: 1,
            signup_pupil: {},
            tip: ''
        }
    }

    componentDidMount() {
        util.scrollToTop(0);
        if (storage.getPrimaryToken()) {
            this.handleFind();
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleEdit() {
        this.props.history.push({
            pathname: "/primary/edit",
            query: {}
        });
    }

    handleFind() {
        this.setState({
            result_type: ""
        });

        http.request({
            url: '/desktop/xietong/signup/pupil/find',
            data: {},
            token: storage.getPrimaryToken(),
            success: function (data) {
                this.setState({
                    tip: data.tip,
                    signup_pupil: data.signup_pupil
                });
            }.bind(this),
            error: function (data) {
                this.setState({
                    result_type: 'danger',
                    result_message: data.message,
                    is_update: false
                });
            }.bind(this),
            complete: function () {

            }
        })
    }

    render() {
        return (
            <div>
                <Header history={this.props.history} website_menu_id=""/>
                <div className="content container">
                    <div className="title margin-top-20">
                        <div className="title-icon"></div>
                        <div className="title-breadcrumb">
                            <Link to="/index">首页</Link> > 小学报名结果查询
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            <Print ref="print" insertHead={false}>
                            <div>
                                <div style={{marginBottom: '50px'}}></div>
                                <Row>
                                    <Col md={12} style={{textAlign: 'center'}}>
                                        <h4>佛山协同佛山协同（国际）学校一年级新生报名表</h4>
                                    </Col>
                                </Row>
                                <div style={{marginBottom: '50px'}}></div>
                                <table width="100%" style={{width: '100%', border: 'solid 1px black'}}>
                                    <tr>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black'}}>
                                            姓名
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.student_name}
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            性别
                                        </td>
                                        <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.student_sex}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            出生年月日
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.student_birthday}
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            原就读幼儿园
                                        </td>
                                        <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.kindergarten}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            证件类型
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.id_type}
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            证件号码
                                        </td>
                                        <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.id_no}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            户籍地址
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.permanent_address}
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            居住地址
                                        </td>
                                        <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.live_addresss}
                                        </td>
                                    </tr>
                                    <tr dangerouslySetInnerHTML={{__html: `<td colspan='4' style="padding: 10px; border-bottom: solid 1px black; text-align: center">家庭主要成员</td>`}}></tr>
                                    <tr>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            姓名
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            称谓
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            联系电话
                                        </td>
                                        <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            工作单位
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.father_name}
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            父亲
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.father_phone}
                                        </td>
                                        <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.father_work}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.mother_name}
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            母亲
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.mother_phone}
                                        </td>
                                        <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            {this.state.signup_pupil.mother_work}
                                        </td>
                                    </tr>
                                    <tr dangerouslySetInnerHTML={{__html: `<td colspan='4' style="padding: 10px; border-bottom: solid 1px black; text-align: center">需要说明事项</td>`}}></tr>
                                    <tr dangerouslySetInnerHTML={{__html: `<td colspan='4' style="padding: 10px; border-bottom: solid 1px black; text-align: left">${this.state.signup_pupil.remark}</td>`}}></tr>
                                    <tr>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            家长签名
                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>

                                        </td>
                                        <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                            学校受理人签名
                                        </td>
                                        <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>

                                        </td>
                                    </tr>
                                    <tr dangerouslySetInnerHTML={{__html: `<td colspan='1' style="padding: 10px; border-right: solid 1px black; text-align: center">报名状态</td><td colspan='3' style="padding: 10px; text-align: left">${this.state.tip}</td>`}}></tr>
                                </table>
                            </div>
                            </Print>
                            <div style={{marginBottom: '50px'}}></div>
                            <Row>
                                <Col smOffset={4} md={7}>
                                    <Button style={{backgroundColor: '#C26B60', color: 'white'}} bsSize="large" onClick={() => {this.refs.print.onPrint();}}>
                                        打印查询结果
                                    </Button>
                                    <Button style={{backgroundColor: '#C26B60', color: 'white', marginLeft: '30px'}} bsSize="large" onClick={this.handleEdit.bind(this)}>
                                        编辑
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                <Col md={11}>
                                    {
                                        this.state.result_type === "" ?
                                            ""
                                            :
                                            <Alert bsStyle={this.state.result_type}>
                                                <h4>系统提示</h4>
                                                <div className="margin-top-15"
                                                     dangerouslySetInnerHTML={{__html: this.state.result_message}}></div>
                                            </Alert>
                                    }
                                </Col>
                            </Row>
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
})(Check);
