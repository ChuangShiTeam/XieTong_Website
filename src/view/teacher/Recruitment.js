import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {createForm} from 'rc-form';
import {Form, FormGroup, Col, ControlLabel, FormControl, Radio, HelpBlock, Button, Alert} from 'react-bootstrap';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import PageSubNav from '../../component/PageSubNav';
import DepartmentSubNav from '../../component/DepartmentSubNav';

import http from '../../util/http';

class TeacherRecruitment extends Component {
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

    }

    componentWillUnmount() {

    }

    handleUpload() {

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
            values.teacher_recruitment_file = '';
            if (values.teacher_recruitment_is_fresh_graduate === 'true') {
                values.teacher_recruitment_is_fresh_graduate = true;
            } else {
                values.teacher_recruitment_is_fresh_graduate = false;
            }
            this.setState({
                is_load: true,
                result_type: ""
            });

            http.request({
                url: '/desktop/xietong/student/login',
                data: {
                    page_id: this.state.page_id
                },
                success: function (data) {
                    this.setState({
                        result_type: 'success',
                        result_message: '提交成功'
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
                            <PageSubNav website_menu_id="a8398373a697416eba6847c2e42c781d" page_id="d46f020e9a28412c911e580ec22574f2"/>
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            <Form horizontal style={{marginTop: '20px'}}>
                                <FormGroup {...getFieldProps('teacher_recruitment_name', {
                                    rules: [{
                                        required: true,
                                        message: '姓名不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_name') ? 'error' : getFieldValue('teacher_recruitment_name') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        姓名
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl placeholder="请输入姓名"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_name')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_sex', {
                                    rules: [{
                                        required: true,
                                        message: '性别不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_sex') ? 'error' : getFieldValue('teacher_recruitment_sex') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        性别
                                    </Col>
                                    <Col sm={10}>
                                        <Radio name="teacher_recruitment_sex" value="男">
                                            男
                                        </Radio>
                                        {' '}
                                        <Radio name="teacher_recruitment_sex" value="女">
                                            女
                                        </Radio>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_sex')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_birthday', {
                                    rules: [{
                                        required: true,
                                        message: '出生日期不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_birthday') ? 'error' : getFieldValue('teacher_recruitment_birthday') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        出生日期
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="date" placeholder="请输入出生日期"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_birthday')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_mobile', {
                                    rules: [{
                                        required: true,
                                        message: '手机号码不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_mobile') ? 'error' : getFieldValue('teacher_recruitment_mobile') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        手机号码
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="tel" placeholder="请输入手机号码"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_mobile')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_email', {
                                    rules: [{
                                        required: true,
                                        message: '邮箱地址不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_email') ? 'error' : getFieldValue('teacher_recruitment_email') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        邮箱地址
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="email" placeholder="请输入邮箱地址"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_mobile')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_faculty', {
                                    rules: [{
                                        required: true,
                                        message: '应聘学部不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_faculty') ? 'error' : getFieldValue('teacher_recruitment_faculty') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        应聘学部
                                    </Col>
                                    <Col sm={10}>
                                        <Radio name="teacher_recruitment_faculty" value="中学部">
                                            中学部
                                        </Radio>
                                        {' '}
                                        <Radio name="teacher_recruitment_faculty" value="小学部">
                                            小学部
                                        </Radio>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_faculty')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_subject', {
                                    rules: [{
                                        required: true,
                                        message: '应聘学科不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_subject') ? 'error' : getFieldValue('teacher_recruitment_subject') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        应聘学科
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入应聘学科"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_subject')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_is_fresh_graduate', {
                                    rules: [{
                                        required: true,
                                        message: '是否应届毕业生不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_is_fresh_graduate') ? 'error' : getFieldValue('teacher_recruitment_is_fresh_graduate') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        是否应届毕业生
                                    </Col>
                                    <Col sm={9}>
                                        <Radio name="teacher_recruitment_is_fresh_graduate" value="true">
                                            是
                                        </Radio>
                                        {' '}
                                        <Radio name="teacher_recruitment_is_fresh_graduate" value="false">
                                            否
                                        </Radio>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_is_fresh_graduate')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_work_year', {initialValue: ''})} >
                                    <Col componentClass={ControlLabel} sm={2}>
                                        工作年限
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入工作年限"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_old_unit', {initialValue: ''})} >
                                    <Col componentClass={ControlLabel} sm={2}>
                                        原工作单位
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入原工作单位"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_politics_status', {
                                    rules: [{
                                        required: true,
                                        message: '政治面貌不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_politics_status') ? 'error' : getFieldValue('teacher_recruitment_politics_status') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        政治面貌
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入政治面貌"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_politics_status')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_job_title', {initialValue: ''})}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        职称
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入职称"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_education', {
                                    rules: [{
                                        required: true,
                                        message: '学历不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_education') ? 'error' : getFieldValue('teacher_recruitment_education') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        学历
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入学历"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_education')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_major', {
                                    rules: [{
                                        required: true,
                                        message: '专业不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_major') ? 'error' : getFieldValue('teacher_recruitment_major') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        专业
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="text" placeholder="请输入专业"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_major')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_grad_school', {
                                    rules: [{
                                        required: true,
                                        message: '毕业院校不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_grad_school') ? 'error' : getFieldValue('teacher_recruitment_grad_school') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        毕业院校
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl placeholder="请输入毕业院校"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_grad_school')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_education_experience', {
                                    rules: [{
                                        required: true,
                                        message: '教育经历不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_education_experience') ? 'error' : getFieldValue('teacher_recruitment_education_experience') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        教育经历
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl componentClass="textarea"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_education_experience')}</span>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_work_experience', {initialValue: ''})}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        工作经历
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl componentClass="textarea"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_representative_honor', {initialValue: ''})}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        所获代表性荣誉
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl componentClass="textarea"/>
                                    </Col>
                                </FormGroup>
                                <FormGroup {...getFieldProps('teacher_recruitment_now_address', {
                                    rules: [{
                                        required: true,
                                        message: '现住址不能为空'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('teacher_recruitment_now_address') ? 'error' : getFieldValue('teacher_recruitment_now_address') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        现住址
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl componentClass="textarea"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('teacher_recruitment_now_address')}</span>
                                    </Col>
                                </FormGroup>

                                <FormGroup controlId="teacher_recruitment_file">
                                    <Col componentClass={ControlLabel} sm={2}>
                                        请上传您的电子版简历
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl type="file" inputRef={ref => {
                                            this.teacher_recruitment_file = ref;
                                        }}
                                                     onChange={this.handleUpload.bind(this)}
                                        />
                                        <HelpBlock>(2M以内)</HelpBlock>
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

TeacherRecruitment = createForm({})(TeacherRecruitment);

export default connect((state) => {
    return {

    }
})(TeacherRecruitment);
