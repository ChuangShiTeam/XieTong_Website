import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Carousel} from 'react-bootstrap';
import Slider from 'react-slick';

import Header from '../../component/Header';
import Footer from '../../component/Footer';

import constant from '../../common/constant';
import http from '../../common/http';
import util from '../../common/util';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        /*请求接口并缓存在本地*/
        if (this.props.junior.teacher_list.length === 0) {
            http.request({
                url: '/desktop/xietong/primary/school/init',
                data: {
                    organization_id: this.props.junior.organization_id
                },
                success: function (data) {
                    this.props.dispatch({
                        type: 'junior',
                        data: {
                            teacher_list: data.teacher_list,
                            teacher_list_2: data.teacher_list_2,
                            student_list: data.student_list,
                            article_list: data.article_list
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
									<Link to="/article/index/9d8508d24242499ebcf344e17d8222de">
										<div className="title-text">中学部教师风采</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/article/index/9d8508d24242499ebcf344e17d8222de">更多</Link>
								</div>
							</div>
							<Slider {...settings}>
                                {
                                    this.props.junior.teacher_list.map(function (teacher) {
                                        return (
											<div key={teacher.teacher_id} className="slider-item">
												<div className="slider-item-body">
													<img className="slider-image center-block" src={constant.image_host + teacher.file_path} alt=""/>
													<div className="slider-name">{teacher.teacher_name}</div>
													<div className="slider-title">{teacher.teacher_title}</div>
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
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">
										<div className="title-text">中学部学生领袖</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">更多</Link>
								</div>
							</div>
							<Slider {...settings}>
                                {
                                    this.props.junior.student_list.map(function (student) {
                                        return (
											<div key={student.student_id} className="slider-item">
												<div className="slider-item-body">
													<img className="slider-image center-block" src={constant.image_host + student.file_path} alt=""/>
													<div className="slider-name">{student.student_name}</div>
													<div className="slider-title">{student.clazz_name}</div>
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
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">
										<div className="title-text">中学部学生作品</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">更多</Link>
								</div>
							</div>
							<Slider {...settings}>
                                {
                                    this.props.junior.teacher_list_2.map(function (teacher) {
                                        return (
											<div key={teacher.teacher_id} className="slider-item">
												<div className="slider-item-body">
													<img className="slider-image center-block" src={constant.image_host + teacher.file_path} alt=""/>
													<div className="slider-name">{teacher.teacher_name}</div>
													<div className="slider-title">{teacher.teacher_title}</div>
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
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">
										<div className="title-text">中学部情境课堂</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">更多</Link>
								</div>
							</div>
							<Slider {...settings}>
                                {
                                    this.props.junior.article_list.map(function (article, index) {
                                        return (
											<div key={article.article_id} className="slider-item">
												<div className="slider-item-body">
													<img className="slider-image center-block" src={constant.image_host + article.file_path} alt=""/>
													<div className="slider-name">{article.article_name}</div>
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
        junior: state.junior
    }
})(Index);