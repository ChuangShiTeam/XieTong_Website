import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {createForm} from 'rc-form';
import {Form, FormGroup, Col, ControlLabel, FormControl, Radio, Button, Alert} from 'react-bootstrap';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import PageSubNav from '../../component/PageSubNav';
import DepartmentSubNav from '../../component/DepartmentSubNav';

import http from '../../common/http';
import util from '../../common/util';
import storage from '../../common/storage';

class Signup extends Component {
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

    handlSubmit() {
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                var message = '';
                for (var error in errors) {
                    message += "<p>";
                    message += errors[error].errors[0].message;
                    message += "</p>";
                }
                this.setState({
                    result_type: 'danger',
                    result_message: message
                });

                return;
            }

            this.setState({
                is_load: true,
                result_type: ""
            });

            http.request({
                url: '/desktop/xietong/signup/pupil/save',
                data: values,

                success: function (data) {
                    this.setState({
                        result_type: 'success',
                        result_message: '提交成功'
                    });
                    storage.setPrimaryToken(data.token);
                    this.props.form.resetFields();
                }.bind(this),
                error: function (data) {
                    this.setState({
                        result_type: 'danger',
                        result_message: data.message
                    });
                }.bind(this),
                complete: function () {
                    this.setState({
                        is_load: false
                    });
                }.bind(this)
            });
        });
    }

    render() {

        const {getFieldProps, getFieldError, getFieldValue} = this.props.form;

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
                            <Form horizontal className="margin-top-20">
                                <FormGroup {...getFieldProps('student_name', {
                                    rules: [{
                                        required: true,
                                        message: '姓名不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('student_name') ? 'error' : getFieldValue('student_name') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        姓名
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输入姓名"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('student_name')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('student_sex', {
                                    rules: [{
                                        required: true,
                                        message: '性别不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('student_sex') ? 'error' : getFieldValue('student_sex') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        性别
                                    </Col>
                                    <Col md={8} className="col-no-padding">
                                        <Col md={6}>
                                            <Radio name="student_sex" value="男">
                                                男
                                            </Radio>
                                        </Col>
                                        <Col md={6}>
                                            <Radio name="student_sex" value="女">
                                                女
                                            </Radio>
                                            <FormControl.Feedback/>
                                        </Col>
                                        <Col md={12}>
                                            <span className="error-message">{getFieldError('student_sex')}</span>
                                        </Col>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('student_birthday', {
                                    rules: [{
                                        required: true,
                                        message: '出生日期不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('student_birthday') ? 'error' : getFieldValue('student_birthday') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        出生日期
                                    </Col>
                                    <Col md={8}>
                                        <FormControl type="date" placeholder="请输入出生日期"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('student_birthday')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('kindergarten', {
                                    rules: [{
                                        required: true,
                                        message: '原就读幼儿园'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('kindergarten') ? 'error' : getFieldValue('kindergarten') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        原就读幼儿园
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输入原就读幼儿园"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('kindergarten')}</span>
                                    </Col>
                                </FormGroup>


                                <FormGroup {...getFieldProps('id_type', {
                                    rules: [{
                                        required: true,
                                        message: '证件类型'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('id_type') ? 'error' : getFieldValue('id_type') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        证件类型
                                    </Col>
                                    <Col md={8} className="col-no-padding">
                                        <Col md={3}>
                                            <Radio name="id_type" value="身份证">
                                                身份证
                                            </Radio>
                                        </Col>
                                        <Col md={3}>
                                            <Radio name="id_type" value="户口本">
                                                户口本
                                            </Radio>
                                        </Col>
                                        <Col md={3}>
                                            <Radio name="id_type" value="签证">
                                                签证
                                            </Radio>
                                        </Col>
                                        <Col md={3}>
                                            <Radio name="id_type" value="护照">
                                                护照
                                            </Radio>
                                            <FormControl.Feedback/>
                                        </Col>
                                        <Col md={12}>
                                            <span className="error-message">{getFieldError('id_type')}</span>
                                        </Col>
                                    </Col>
                                </FormGroup>

                                <FormGroup {...getFieldProps('id_no', {
                                    rules: [{
                                        required: true,
                                        message: '证件号码'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('id_no') ? 'error' : getFieldValue('id_no') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        证件号码
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输证件号码"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('id_no')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('permanent_address', {
                                    rules: [{
                                        required: true,
                                        message: '户籍地址'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('permanent_address') ? 'error' : getFieldValue('permanent_address') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        户籍地址
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输户籍地址"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('permanent_address')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('live_addresss', {
                                    rules: [{
                                        required: true,
                                        message: '居住地址'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('live_addresss') ? 'error' : getFieldValue('live_addresss') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        居住地址
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输居住地址"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('live_addresss')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('father_name', {
                                    rules: [{
                                        required: true,
                                        message: '父亲姓名'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('father_name') ? 'error' : getFieldValue('father_name') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        父亲姓名
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输父亲姓名"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('father_name')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('father_id_no', {
                                    rules: [{
                                        required: true,
                                        message: '父亲证件号码'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('father_id_no') ? 'error' : getFieldValue('father_id_no') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        父亲证件号码
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输父亲证件号码"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('father_id_no')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('father_work', {
                                    rules: [{
                                        required: true,
                                        message: '父亲工作单位'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('father_work') ? 'error' : getFieldValue('father_work') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        父亲工作单位
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输父亲工作单位"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('father_work')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('father_phone', {
                                    rules: [{
                                        required: true,
                                        message: '手机号码不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('father_phone') ? 'error' : getFieldValue('father_phone') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        手机号码
                                    </Col>
                                    <Col md={8}>
                                        <FormControl type="tel" placeholder="请输入手机号码"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('father_phone')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('mother_name', {
                                    rules: [{
                                        required: true,
                                        message: '母亲姓名'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('mother_name') ? 'error' : getFieldValue('mother_name') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        母亲姓名
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输母亲姓名"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('mother_name')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('mother_id_no', {
                                    rules: [{
                                        required: true,
                                        message: '母亲证件号码'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('mother_id_no') ? 'error' : getFieldValue('mother_id_no') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        母亲证件号码
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输母亲证件号码"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('mother_id_no')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('mother_work', {
                                    rules: [{
                                        required: true,
                                        message: '母亲工作单位'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('mother_work') ? 'error' : getFieldValue('mother_work') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        母亲工作单位
                                    </Col>
                                    <Col md={8}>
                                        <FormControl placeholder="请输母亲工作单位"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('mother_work')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('mother_phone', {
                                    rules: [{
                                        required: true,
                                        message: '手机号码不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('mother_phone') ? 'error' : getFieldValue('mother_phone') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        手机号码
                                    </Col>
                                    <Col md={8}>
                                        <FormControl type="tel" placeholder="请输入手机号码"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('mother_phone')}</span>
                                    </Col>
                                </FormGroup>

                                <FormGroup {...getFieldProps('remark', {
                                    rules: [{
                                        required: true,
                                        message: '兴趣、爱好、特长'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('remark') ? 'error' : getFieldValue('remark') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} md={2}>
                                        兴趣、爱好、特长
                                    </Col>
                                    <Col md={8}>
                                        <FormControl componentClass="textarea"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('remark')}</span>
                                    </Col>
                                </FormGroup>


                                <FormGroup>
                                    <Col smOffset={2} md={8}>
                                        <Button disabled={this.state.is_load} onClick={this.handlSubmit.bind(this)}>
                                            {this.state.is_load ? "加载中.." : "提交"}
                                        </Button>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col smOffset={2} md={8}>
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
                                </FormGroup>
                            </Form>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

Signup = createForm({})(Signup);

export default connect((state) => {
    return {}
})(Signup);