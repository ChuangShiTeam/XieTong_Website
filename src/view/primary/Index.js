import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Slider from 'react-slick';

import Header from '../../component/Header';
import Footer from '../../component/Footer';

import constant from '../../common/constant';
import http from '../../common/http';
import util from '../../common/util';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        /*请求接口并缓存在本地*/
        if (this.props.primary.teacher_list.length === 0) {
            http.request({
                url: '/desktop/xietong/primary/school/init',
                data: {
                    organization_id: this.props.primary.organization_id
                },
                success: function (data) {
                    this.props.dispatch({
                        type: 'primary',
                        data: {
                            teacher_list: data.teacher_list,
                            student_list: data.student_list,
                            article_list: data.article_list,
                            article_list_2: data.article_list_2
                        }
                    });
                }.bind(this),
                error: function (data) {

                },
                complete: function () {

                }
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        util.scrollToTop(0);
    }

    componentWillUnmount() {

    }

    render() {
        const settings = {
            autoplay: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            autoplaySpeed: 6000,
            slidesToScroll: 1
        };

        return (
            <div className="index">
                <Header history={this.props.history} website_menu_id=""/>
                <div className="container margin-bottom-20">
                    <div className="row">
                        <div className="col-md-6 col-padding margin-top-20">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <Link to="/teacher/index/75b1b7bca5214bad9c79a9927659f8cb">
                                        <div className="title-text">小学部教师风采</div>
                                    </Link>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <Link to="/teacher/index/75b1b7bca5214bad9c79a9927659f8cb">更多</Link>
                                </div>
                            </div>
                            <Slider {...settings}>
                                {
                                    this.props.primary.teacher_list.map(function (teacher) {
                                        return (
                                            <div key={teacher.teacher_id} className="slider-item">
                                                <div className="slider-item-body">
                                                    <Link to={"/teacher/detail/" + teacher.teacher_id}>
                                                        <img className="slider-image center-block"
                                                             src={constant.image_host + teacher.file_path} alt=""/>
                                                        <div className="slider-name">{teacher.teacher_name}</div>
                                                        <div className="slider-title">{teacher.teacher_title}</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    }.bind(this))
                                }
                            </Slider>
                        </div>
                        <div className="col-md-6 col-padding margin-top-20">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <Link to="/student/index/1d49d03576954b3c998608b8f43be324">
                                        <div className="title-text">小学部学生领袖</div>
                                    </Link>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <Link to="/student/index/1d49d03576954b3c998608b8f43be324">更多</Link>
                                </div>
                            </div>
                            <Slider {...settings}>
                                {
                                    this.props.primary.student_list.map(function (student) {
                                        return (
                                            <div key={student.student_id} className="slider-item">
                                                <div className="slider-item-body">
                                                    <Link to={"/student/detail/" + student.student_id}>
                                                        <img className="slider-image center-block"
                                                             src={constant.image_host + student.file_path} alt=""/>
                                                        <div className="slider-name">{student.student_name}</div>
                                                        <div className="slider-title">{student.clazz_name}</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    }.bind(this))
                                }
                            </Slider>
                        </div>
                        <div className="col-md-6 col-padding margin-top-20">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <Link to="/article/index/cc3480ea6dd64ad5be680e5e1b5a4ace">
                                        <div className="title-text">小学部学生作品</div>
                                    </Link>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <Link to="/article/index/cc3480ea6dd64ad5be680e5e1b5a4ace">更多</Link>
                                </div>
                            </div>
                            <Slider {...settings}>
                                {
                                    this.props.primary.article_list_2.map(function (article) {
                                        return (
                                            <div key={article.article_id} className="slider-item">
                                                <div className="slider-item-body">
                                                    <Link key={article.article_id}
                                                          to={"/article/detail/" + article.article_id}>
                                                        <img className="slider-image center-block"
                                                             src={constant.image_host + article.file_path} alt=""/>
                                                        <div className="slider-name">{article.article_name}</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    }.bind(this))
                                }
                            </Slider>
                        </div>
                        <div className="col-md-6 col-padding margin-top-20">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <Link to="/article/index/194dfd824f2042d58dd101d374272455">
                                        <div className="title-text">小学部情境课堂</div>
                                    </Link>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <Link to="/article/index/194dfd824f2042d58dd101d374272455">更多</Link>
                                </div>
                            </div>
                            <Slider {...settings}>
                                {
                                    this.props.primary.article_list.map(function (article) {
                                        return (
                                            <div key={article.article_id} className="slider-item">
                                                <div className="slider-item-body">
                                                    <Link key={article.article_id}
                                                          to={"/article/detail/" + article.article_id}>
                                                        <img className="slider-image center-block"
                                                             src={constant.image_host + article.file_path} alt=""/>
                                                        <div className="slider-name">{article.article_name}</div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    }.bind(this))
                                }
                            </Slider>
                        </div>
                    </div>
                </div>


                <Footer/>
            </div>
        );
    }
}

export default connect((state) => {
    return {
        primary: state.primary
    }
})(Index);
