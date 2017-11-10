import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';

import constant from '../util/constant';
import http from '../util/http';

class PrimarySchool extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		/*请求接口并缓存在本地*/
        if (this.props.primary_school.article_list.length === 0) {
            http.request({
                url: '/desktop/xietong/website/index',
                data: {

                },
                success: function (data) {
                    this.props.dispatch({
                        type: 'primary_school',
                        data: {
                            article_list: data
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

	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div className="index">
				<Header history={this.props.history} website_menu_id="home"/>
				<div className="content-background-1">
					<div className="container">
						<div className="row margin-top-20 margin-bottom-20">
							<div className="col-md-4 col-xs-4 col-padding">
								<div className="department">
									<Link to="">
										<img src="image/department0.jpg" alt=""/>
										<div className="department-mask">小学部</div>
									</Link>
								</div>
							</div>
							<div className="col-md-4 col-xs-4 col-padding">
								<div className="department">
									<Link to="">
										<img src="image/department1.jpg" alt=""/>
										<div className="department-mask">中学部</div>
									</Link>
								</div>
							</div>
							<div className="col-md-4 col-xs-4 col-padding">
								<div className="department">
									<Link to="">
										<img src="image/department2.jpg" alt=""/>
										<div className="department-mask">国际部</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container margin-bottom-20">
					<div className="row margin-top">
						<div className="col-md-8 col-padding">
							<div className="title">
								<div className="pull-left">
									<div className="title-icon"></div>
									<Link to="/article/index/c9dd8759a7a04aaeb038973c3246d863">
										<div className="title-text">学校新闻</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/article/index/c9dd8759a7a04aaeb038973c3246d863">更多</Link>
								</div>
							</div>
							<div className="col-md-6 col-padding">
								<Carousel className="margin-top" interval={3000} keyboard={false}>
                                    {
                                        this.props.primary_school.article_list.map(function (article) {
                                            return (
                                                article.article_category_id === 'c9dd8759a7a04aaeb038973c3246d863' ?
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
                                            article.article_category_id === 'c9dd8759a7a04aaeb038973c3246d863' ?
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
										<Link to="/article/index/c9dd8759a7a04aaeb038973c3246d863">
											<div className="title-text">学校新闻</div>
										</Link>
										<div className="title-line"></div>
									</div>
									<div className="pull-right">
										<Link to="/article/index/c9dd8759a7a04aaeb038973c3246d863">更多</Link>
									</div>
								</div>
								<div className="col-md-6 col-padding">
									<Carousel className="margin-top" interval={3000} keyboard={false}>
                                        {
                                            this.props.primary_school.article_list.map(function (article) {
                                                return (
                                                    article.article_category_id === 'c9dd8759a7a04aaeb038973c3246d863' ?
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
                                                article.article_category_id === 'c9dd8759a7a04aaeb038973c3246d863' ?
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
									<Link to="/article/index/7e84950e6d96412b860b5be55f46d5e8">
										<div className="title-text">优秀学生</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/article/index/7e84950e6d96412b860b5be55f46d5e8">更多</Link>
								</div>
							</div>
                            {
                                this.props.primary_school.article_list.map(function (article) {
                                    return (
                                        article.article_category_id === '7e84950e6d96412b860b5be55f46d5e8' ?
											<div key={article.article_id} className={"article-item margin-top"}>
												<Link to={"/article/detail/" + article.article_id}>
													<div className="dpar_cont">
														<div className="col-md-6 col-sm-6 col-xs-6 dp_r margin-top best-student">
															<img src="image/sight-1.jpg" alt=""/>
															<p>国际交流活动为学生</p>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-6 dp_r margin-top best-student">
															<img src="image/sight-1.jpg" alt=""/>
															<p>国际交流活动为学生</p>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-6 dp_r margin-top best-student">
															<img src="image/sight-1.jpg" alt=""/>
															<p>国际交流活动为学生</p>
														</div>
														<div className="col-md-6 col-sm-6 col-xs-6 dp_r margin-top best-student">
															<img src="image/sight-1.jpg" alt=""/>
															<p>国际交流活动为学生</p>
														</div>
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

				<div className="content-background-1">
					<div className="container">
						<div className="row margin-top-20 margin-bottom-20">
							<div className="col-md-3 hidden-xs hidden-sm     col-padding">
								<Link to="">
									<div className="sight">
										<img className="sight-image-0" src="image/sight-0.jpg" alt=""/>
										<div className="sight-mask">美丽校园</div>
									</div>
								</Link>
							</div>
							<div className="col-md-9 col-xs-12 col-no-padding">
								<div className="col-md-4 col-xs-6 col-padding">
									<Link to="">
										<div className="sight">
											<img className="sight-image-1" src="image/sight-1.jpg" alt=""/>
											<div className="sight-mask">教师风采</div>
										</div>
									</Link>
								</div>
								<div className="col-md-4 col-xs-6 col-padding">
									<Link to="">
										<div className="sight">
											<img className="sight-image-1" src="image/sight-2.jpg" alt=""/>
											<div className="sight-mask">学生社团</div>
										</div>
									</Link>
								</div>
								<div
									className="col-xs-12 visible-xs-inline-block visible-sm-inline-block margin-top"></div>
								<div className="col-md-4 col-xs-6 col-padding">
									<Link to="">
										<div className="sight">
											<img className="sight-image-1" src="image/sight-3.jpg" alt=""/>
											<div className="sight-mask">课程选择</div>
										</div>
									</Link>
								</div>
								<div className="col-md-12 hidden-xs margin-top-20"></div>
								<div className="col-md-4 col-xs-6 col-padding">
									<Link to="">
										<div className="sight">
											<img className="sight-image-1" src="image/sight-4.jpg" alt=""/>
											<div className="sight-mask">魅力课堂</div>
										</div>
									</Link>
								</div>
								<div
									className="col-xs-12 visible-xs-inline-block visible-sm-inline-block margin-top"></div>
								<div className="col-md-8 col-xs-12 col-padding">
									<Link to="">
										<div className="sight">
											<img className="sight-image-2" src="image/sight-5.jpg" alt=""/>
											<div className="sight-mask">美丽校园</div>
										</div>
									</Link>
								</div>
							</div>
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
        primary_school: state.primary_school,
	}
})(PrimarySchool);
