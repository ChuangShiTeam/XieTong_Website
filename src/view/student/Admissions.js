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

class StudentAdmissions extends Component {
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
        util.setTitle('学生报名');

        util.scrollToTop(0);
    }

    componentWillReceiveProps(nextProps) {
        util.scrollToTop(0);
    }

    componentWillUnmount() {

    }

    handlSubmit() {
        this.props.form.validateFields((errors, value) => {
            if (!!errors) {
                var message = '';
                for (var error in errors) {
                    message += '<p>';
                    message += errors[error].errors[0].message;
                    message += '</p>';
                }
                this.setState({
                    result_type: 'danger',
                    result_message: message
                });

                return;
            }

            this.setState({
                is_load: true,
                result_type: ''
            });

            http.request({
                url: '/desktop/xietong/student/login',
                data: {
                    page_id: this.state.page_id
                },
                success: function (data) {
                    this.setState({
                        result_type: 'success',
                        result_message: '提交成功, 密码为证件号码后6位'
                    });
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
                            <Link to="/index">首页</Link> >  学生登录
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <PageSubNav website_menu_id="a8398373a697416eba6847c2e42c781d" page_id="5b68b36ca31c49839f38aacf6ac65450"/>
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            <Form horizontal style={{marginTop: '20px'}}>
                                <FormGroup {...getFieldProps('admissions_name', {
                                    rules: [{
                                        required: true,
                                        message: '学生姓名不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_name') ? 'error' : getFieldValue('admissions_name') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        学生姓名
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl placeholder="请输入学生姓名"/>
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_name')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_sex', {
                                    rules: [{
                                        required: true,
                                        message: '性别不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_sex') ? 'error' : getFieldValue('admissions_sex') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        性别
                                    </Col>
                                    <Col sm={9}>
                                        <Radio name="admissions_sex" value="男">
                                            男
                                        </Radio>
                                        {' '}
                                        <Radio name="admissions_sex"  value="女">
                                            女
                                        </Radio>
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_sex')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_birthday', {
                                    rules: [{
                                        required: true,
                                        message: '出生日期不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_birthday') ? 'error' : getFieldValue('admissions_birthday') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        出生日期
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="date"  placeholder="请输入出生日期" />
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_birthday')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_is_apply_live_school', {
                                    rules: [{
                                        required: true,
                                        message: '是否应届毕业生不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_is_apply_live_school') ? 'error' : getFieldValue('admissions_is_apply_live_school') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        是否申请住校
                                    </Col>
                                    <Col sm={9}>
                                        <Radio name="admissions_is_apply_live_school" value="true">
                                            是
                                        </Radio>
                                        {' '}
                                        <Radio name="admissions_is_apply_live_school" value="false">
                                            否
                                        </Radio>
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_is_apply_live_school')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_old_school', {
                                    rules: [{
                                        required: true,
                                        message: '原就读学校不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_old_school') ? 'error' : getFieldValue('admissions_old_school') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        原就读学校
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl placeholder="请输入原就读学校" />
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_old_school')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_certificate_type', {
                                    rules: [{
                                        required: true,
                                        message: '证件类型不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_certificate_type') ? 'error' : getFieldValue('admissions_certificate_type') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        证件类型
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl placeholder="请输入证件类型" />
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_certificate_type')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_certificate_number', {
                                    rules: [{
                                        required: true,
                                        message: '证件号码不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_certificate_number') ? 'error' : getFieldValue('admissions_certificate_number') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        证件号码
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl placeholder="请输入证件号码" />
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_certificate_number')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_registration_address', {
                                    rules: [{
                                        required: true,
                                        message: '户籍地址不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_registration_address') ? 'error' : getFieldValue('admissions_registration_address') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        户籍地址
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl componentClass="textarea"/>
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_registration_address')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_home_address', {
                                    rules: [{
                                        required: true,
                                        message: '家庭住址不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_home_address') ? 'error' : getFieldValue('admissions_home_address') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        家庭住址
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl componentClass="textarea"/>
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_home_address')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_home_first_name', {
                                    rules: [{
                                        required: true,
                                        message: '家庭成员一姓名不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_home_first_name') ? 'error' : getFieldValue('admissions_home_first_name') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        家庭成员一姓名
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入家庭成员一姓名" />
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_home_first_name')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_home_first_unit', {initialValue: ''})} >
                                    <Col componentClass={ControlLabel} sm={2}>
                                        家庭成员一单位
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入家庭成员一单位" />
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_home_first_tel', {
                                    rules: [{
                                        required: true,
                                        message: '家庭成员一联系电话不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_home_first_tel') ? 'error' : getFieldValue('admissions_home_first_tel') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        家庭成员一联系电话
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="tel" placeholder="请输入家庭成员一联系电话" />
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_home_first_tel')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_home_second_name', {
                                    rules: [{
                                        required: true,
                                        message: '家庭成员一姓名不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_home_second_name') ? 'error' : getFieldValue('admissions_home_second_name') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        家庭成员二姓名
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入家庭成员二姓名" />
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_home_second_name')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_home_second_unit', {initialValue: ''})} >
                                    <Col componentClass={ControlLabel} sm={2}>
                                        家庭成员二单位
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入家庭成员二单位" />
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_home_second_tel', {
                                    rules: [{
                                        required: true,
                                        message: '家庭成员一联系电话不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('admissions_home_second_tel') ? 'error' : getFieldValue('admissions_home_second_tel') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        家庭成员二联系电话
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="tel" placeholder="请输入家庭成员二联系电话" />
                                        <FormControl.Feedback />
                                        <span className="error-message">{getFieldError('admissions_home_second_tel')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('admissions_notes', {initialValue: ''})}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        需要说明事项
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl componentClass="textarea"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col smOffset={2} sm={9}>
                                        <Button disabled={this.state.is_load} onClick={this.handlSubmit.bind(this)}>
                                            {this.state.is_load ? "加载中.." : "提交"}
                                        </Button>
                                    </Col>
                                </FormGroup>
                                <FormGroup>
                                    <Col smOffset={2} sm={9}>
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

StudentAdmissions = createForm({})(StudentAdmissions);

export default connect((state) => {
    return {

    }
})(StudentAdmissions);
