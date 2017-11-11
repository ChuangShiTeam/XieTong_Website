import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {createForm} from 'rc-form';
import {Form, FormGroup, Col, ControlLabel, FormControl, Radio, Button, Alert} from 'react-bootstrap';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import DepartmentSubNav from '../../component/DepartmentSubNav';

import http from '../../common/http';
import util from '../../common/util';

class Check extends Component {
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
        util.scrollToTop(0);
    }

    componentWillReceiveProps(nextProps) {

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

            this.setState({
                is_load: true,
                result_type: ""
            });

            http.request({
                url: '/mobile/xietong/signup/junior/find',
                data: values,

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
                            <Link to="/index">首页</Link> > 初中报名结果查询
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            <Form horizontal style={{marginTop: '20px'}}>


                                <FormGroup {...getFieldProps('id_type', {
                                    rules: [{
                                        required: true,
                                        message: '证件类型'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('id_type') ? 'error' : getFieldValue('id_type') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        证件类型
                                    </Col>
                                    <Col sm={10}>
                                        <Radio name="id_type" value="身份证">
                                            身份证
                                        </Radio>
                                        {' '}
                                        <Radio name="id_type" value="户口本">
                                            户口本
                                        </Radio>
                                        {' '}
                                        <Radio name="id_type" value="签证">
                                            签证
                                        </Radio>
                                        {' '}
                                        <Radio name="id_type" value="护照">
                                            护照
                                        </Radio>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('id_type')}</span>
                                    </Col>
                                </FormGroup>

                                <FormGroup {...getFieldProps('id_no', {
                                    rules: [{
                                        required: true,
                                        message: '证件号码'
                                    }],
                                    initialValue: ''
                                })} validationState={getFieldError('id_no') ? 'error' : getFieldValue('id_no') === '' ? null : 'success'}>
                                    <Col componentClass={ControlLabel} sm={2}>
                                        证件号码
                                    </Col>
                                    <Col sm={9}>
                                        <FormControl placeholder="请输证件号码"/>
                                        <FormControl.Feedback/>
                                        <span className="error-message">{getFieldError('id_no')}</span>
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

Check = createForm({})(Check);

export default connect((state) => {
    return {}
})(Check);
