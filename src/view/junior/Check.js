import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Row, Col, Button, Alert} from 'react-bootstrap';
import Print from 'rc-print';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import PageSubNav from '../../component/PageSubNav';
import DepartmentSubNav from '../../component/DepartmentSubNav';

import http from '../../common/http';
import util from '../../common/util';
import storage from '../../common/storage';

class Check extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false,
            result_type: '',
            result_message: '',
            menu_index: 1,
            signup_junior: {},
            tip: ''
        }
    }

    componentDidMount() {
        util.scrollToTop(0);
        if (storage.getJuniorToken()) {
            this.handleFind();
        }
    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    handleEdit() {
        this.props.history.push({
            pathname: "/junior/edit",
            query: {}
        });
    }

    handleFind() {
        this.setState({
            is_load: true,
            result_type: ""
        });

        http.request({
            url: '/desktop/xietong/signup/junior/find',
            data: {},
            token: storage.getJuniorToken(),
            success: function (data) {
                this.setState({
                    tip: data.tip,
                    signup_junior: data.signup_junior
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
                this.setState({
                    is_load: false
                })
            }.bind(this)
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
                            <Link to="/index">首页</Link>  > <Link to="/page/e8417cd60aeb474aad40d4ecc8d52b22">招生招聘</Link> >  <Link to="/junior/entry">初中报名</Link> > 初中报名结果查询
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <PageSubNav website_menu_id="a8398373a697416eba6847c2e42c781d" page_id="7d32e0491eed4fa58a2e05cf2079303c"/>
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            <Print ref="print" insertHead={false}>
                                <div>
                                    <div style={{marginBottom: '10px'}}></div>
                                    <Row>
                                        <Col md={24} style={{textAlign: 'center'}}>
                                            <span style={{fontSize: '30px', fontWeight: '1000'}}>佛山协同（国际）学校初一新生自荐报名表</span>
                                        </Col>
                                    </Row>
                                    <div style={{marginBottom: '25px'}}></div>
                                    <Row>
                                        <Col md={24}>
                                            报名序号：{this.state.signup_junior.signup_number}
                                            <table width="100%" style={{width: '100%', borderLeft: 'solid 1px black', borderTop: 'solid 1px black', borderRight: 'solid 1px black'}}>
                                                <tr>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        姓名
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.student_name}
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        性别
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.student_sex}
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', textAlign: 'center'}}>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        出生年月日
                                                    </td>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.student_birthday}
                                                    </td>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        原就读小学
                                                    </td>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black',borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.primary_school}
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', textAlign: 'center'}}>
                                                        粘贴照片
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', textAlign: 'center'}}>
                                                        小学班级
                                                    </td>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.primary_school_class}
                                                    </td>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', textAlign: 'center'}}>
                                                        担任职务
                                                    </td>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.job}
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', textAlign: 'center'}}>

                                                    </td>
                                                </tr>
                                            </table>
                                            <table width="100%" style={{width: '100%', borderLeft: 'solid 1px black', borderTop: 'solid 1px black', borderRight: 'solid 1px black'}}>
                                                <tr>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        证件类型
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.id_type}
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        证件号码
                                                    </td>
                                                    <td style={{width: '40%', padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.id_no}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', textAlign: 'center'}}>
                                                        户籍地址
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.permanent_address}
                                                    </td>
                                                    <td style={{width: '20%', padding: '10px', borderRight: 'solid 1px black', textAlign: 'center'}}>
                                                        居住地址
                                                    </td>
                                                    <td style={{width: '40%', padding: '10px', textAlign: 'center'}}>
                                                        {this.state.signup_junior.live_addresss}
                                                    </td>
                                                </tr>
                                            </table>
                                            <table width="100%" style={{width: '100%', border: 'solid 1px black'}}>
                                                <tr dangerouslySetInnerHTML={{__html: `<td colspan='4' style="padding: 10px; border-bottom: solid 1px black; text-align: center">家庭主要成员</td>`}}></tr>
                                                <tr>
                                                    <td style={{width: '25%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        姓名
                                                    </td>
                                                    <td style={{width: '25%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        称谓
                                                    </td>
                                                    <td style={{width: '25%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        联系电话
                                                    </td>
                                                    <td style={{width: '25%', padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        工作单位
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{width: '25%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.father_name}
                                                    </td>
                                                    <td style={{width: '25%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        父亲
                                                    </td>
                                                    <td style={{width: '25%', padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.father_phone}
                                                    </td>
                                                    <td style={{width: '25%', padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.father_work}
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.mother_name}
                                                    </td>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        母亲
                                                    </td>
                                                    <td style={{padding: '10px', borderRight: 'solid 1px black', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.mother_phone}
                                                    </td>
                                                    <td style={{padding: '10px', borderBottom: 'solid 1px black', textAlign: 'center'}}>
                                                        {this.state.signup_junior.mother_work}
                                                    </td>
                                                </tr>
                                                <tr dangerouslySetInnerHTML={{__html: `<td colspan='4' style="padding: 10px; border-bottom: solid 1px black; text-align: center">特长爱好</td>`}}></tr>
                                                <tr dangerouslySetInnerHTML={{__html: `<td colspan='4' style="padding: 10px; border-bottom: solid 1px black; text-align: left">${this.state.signup_junior.remark}</td>`}}></tr>
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
                                                <tr dangerouslySetInnerHTML={{__html: `<td colspan='1' style="padding: 10px; border-right: solid 1px black; text-align: center">报名日期</td><td colspan='1' style="padding: 10px; border-right: solid 1px black; text-align: center"></td><td colspan='1' style="padding: 10px; border-right: solid 1px black; text-align: center">报名状态</td><td colspan='1' style="padding: 10px; text-align: left">已报名</td>`}}></tr>
                                            </table>
                                        </Col>
                                    </Row>
                                    <div style={{marginBottom: '25px'}}></div>
                                    <Row>
                                        <Col md={24}>
                                            <span>温馨提示：</span><br/>
                                            1.面谈时间：2018年6月27日至7月1日，按规定的时间到校参加面谈<br/>
                                            2.面谈内容：人文素养，数理思维，英语交流，共50分钟<br/>
                                            3.面谈资料：报名表、学生户口本复印件、3张一寸近照（其中1张贴报名表右上角）。<br/>
                                        </Col>
                                    </Row>
                                </div>
                            </Print>
                            <div style={{marginBottom: '50px'}}></div>
                            <Row>
                                <Col smOffset={4} md={7}>
                                    <Button disabled={this.state.is_load} style={{backgroundColor: '#C26B60', color: 'white'}} bsSize="large" onClick={() => {this.refs.print.onPrint();}}>
                                        {this.state.is_load ? "加载中.." : "打印报名表"}
                                    </Button>
                                    <Button disabled={this.state.is_load} style={{backgroundColor: '#C26B60', color: 'white', marginLeft: '30px'}} bsSize="large" onClick={this.handleEdit.bind(this)}>
                                        {this.state.is_load ? "加载中.." : "修改报名信息"}
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
