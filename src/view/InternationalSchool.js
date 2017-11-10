import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';

import constant from '../common/constant';
import http from '../common/http';
import util from '../common/util';

class InternationalSchool extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		/*请求接口并缓存在本地*/
        if (this.props.primary_school.article_list.length === 0) {
            http.request({
                url: '/desktop/xietong/website/department/init',
                data: {
					organization_id: this.props.primary_school.organization_id
                },
                success: function (data) {
                    this.props.dispatch({
                        type: 'primary_school',
                        data: {
                            article_list: data.articleList,
                            student_list: data.studentList
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
		return (
			<div className="index">
				<Header history={this.props.history} website_menu_id="home"/>
				<div className="container margin-bottom-20">
					<div className="row margin-top">
						<div className="col-md-8 col-padding">
							<div className="title">
								<div className="pull-left">
									<div className="title-icon"></div>
									<Link to="/article/index/9d8508d24242499ebcf344e17d8222de">
										<div className="title-text">国际部教学</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/article/index/9d8508d24242499ebcf344e17d8222de">更多</Link>
								</div>
							</div>
							<div className="col-md-6 col-padding">
								<Carousel className="margin-top" interval={3000} keyboard={false}>
                                    {
                                        this.props.primary_school.article_list.map(function (article) {
                                            return (
                                                article.article_category_id === '9d8508d24242499ebcf344e17d8222de' ?
													<Carousel.Item key={article.article_id}>
														<Link to={"/article/detail/" + article.article_id}>
															<img className="school-article-image"
																 src={constant.image_host + article.file_path}
																 alt=""/>
														</Link>
													</Carousel.Item>
                                                    :
                                                    ''
                                            )
                                        })
                                    }
								</Carousel>
							</div>
							<div className="col-md-6 col-padding">
                                {
                                    this.props.primary_school.article_list.map(function (article) {
                                        return (
                                            article.article_category_id === '9d8508d24242499ebcf344e17d8222de' ?
												<div key={article.article_id} className={"article-item margin-top"}>
													<Link to={"/article/detail/" + article.article_id}>
														<img className="article-item-image img-thumbnail"
															 src={constant.image_host + article.file_path}
															 alt=""/>
														<div className="article-item-title">{article.article_name}</div>
														<div className="article-item-description">
                                                            {article.article_summary}
														</div>
													</Link>
												</div>
                                                :
                                                ''
                                        )
                                    })
                                }
							</div>
							<div className="clear-both"></div>
							<div className="margin-top-20">
								<div className="title">
									<div className="pull-left">
										<div className="title-icon"></div>
										<Link to="/article/index/9c204d00ccd446298c22cff6350bb6ff">
											<div className="title-text">国际部活动</div>
										</Link>
										<div className="title-line"></div>
									</div>
									<div className="pull-right">
										<Link to="/article/index/9c204d00ccd446298c22cff6350bb6ff">更多</Link>
									</div>
								</div>
								<div className="col-md-6 col-padding">
									<Carousel className="margin-top" interval={3000} keyboard={false}>
                                        {
                                            this.props.primary_school.article_list.map(function (article) {
                                                return (
                                                    article.article_category_id === '9c204d00ccd446298c22cff6350bb6ff' ?
														<Carousel.Item key={article.article_id}>
															<Link to={"/article/detail/" + article.article_id}>
																<img className="school-article-image"
																	 src={constant.image_host + article.file_path}
																	 alt=""/>
															</Link>
														</Carousel.Item>
                                                        :
                                                        ''
                                                )
                                            })
                                        }
									</Carousel>
								</div>
								<div className="col-md-6 col-padding">
                                    {
                                        this.props.primary_school.article_list.map(function (article) {
                                            return (
                                                article.article_category_id === '9c204d00ccd446298c22cff6350bb6ff' ?
													<div key={article.article_id} className={"article-item margin-top"}>
														<Link to={"/article/detail/" + article.article_id}>
															<img className="article-item-image img-thumbnail"
																 src={constant.image_host + article.file_path}
																 alt=""/>
															<div className="article-item-title">{article.article_name}</div>
															<div className="article-item-description">
                                                                {article.article_summary}
															</div>
														</Link>
													</div>
                                                    :
                                                    ''
                                            )
                                        })
                                    }
								</div>
							</div>
						</div>
						<div className="col-md-4 visible-xs-inline margin-top"></div>
						<div className="col-md-4 col-padding">
							<div className="title">
								<div className="pull-left">
									<div className="title-icon"></div>
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">
										<div className="title-text">国际部优秀学生</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">更多</Link>
								</div>
							</div>
                            {
                                this.props.primary_school.student_list.map(function (student) {
                                    return (
										<div key={student.student_id} className={"article-item margin-top"}>
											<Link to={"/student/detail/" + student.student_id}>
												<div className="dpar_cont">
													<div className="col-md-6 col-sm-6 col-xs-6 dp_r margin-top best-student">
														<img src={constant.image_host + student.student_image} alt=""/>
														<p>{student.student_name}</p>
													</div>
												</div>
											</Link>
										</div>
                                    )
                                })
                            }
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
        primary_school: state.primary_school
	}
})(InternationalSchool);
