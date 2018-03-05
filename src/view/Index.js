import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Carousel} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';

import constant from '../common/constant';
import http from '../common/http';
import util from '../common/util';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: ''
        }
    }

    componentDidMount() {
        util.setTitle('首页');

        util.scrollToTop(0);

        if (util.isPc()) {
            window.advertisement = new window.AdMove("advertisement");
            window.advertisement.Run();
        }

        if (this.props.index.article_list.length === 0) {
            http.request({
                url: '/desktop/xietong/website/index',
                data: {},
                success: function (data) {
                    this.props.dispatch({
                        type: 'index',
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
        if (util.isPc()) {
            window.advertisement.Stop();
        }
    }

    handleCloseAdvertisement() {
        this.setState({
            display: 'none'
        });
    }

    render() {
        return (
            <div className="index">
                {
                    util.isPc() ?
                        <div id="advertisement" style={{display: this.state.display}}>
                            <div id="advertisement-close" onClick={this.handleCloseAdvertisement.bind(this)}></div>
                            {
                                this.props.advertisement.list.filter(function (advertisement) {
                                    return advertisement.advertisement_category_code === 'index_float' && advertisement.advertisement_is_float;
                                }).map(function (advertisement, index) {
                                    return (
                                        <div className="advertisement-content">
                                            {
                                                advertisement.advertisement_link.indexOf('http') > -1 ?
                                                    <a href={advertisement.advertisement_link} target="_blank">
                                                        <b>公告</b>
                                                        <p>{advertisement.advertisement_title}</p>
                                                        <span className="advertisement-content-jump">点击进入</span>
                                                    </a>
                                                    :
                                                    <Link to={advertisement.advertisement_link}>
                                                        <b>公告</b>
                                                        <p>{advertisement.advertisement_title}</p>
                                                        <span className="advertisement-content-jump">点击进入</span>
                                                    </Link>
                                            }
                                        </div>
                                    )
                                }.bind(this))
                            }
                        </div>
                        :
                        ''
                }
                <Header history={this.props.history} website_menu_id="home"/>
                <div className="content-background-1">
                    <div className="container">
                        <div className="row margin-top-20 margin-bottom-20">
                            <div className="col-md-4 col-xs-4 col-padding">
                                <div className="department">
                                    <Link to="/primary/index">
                                        <img src="image/department0.jpg" alt=""/>
                                        <div className="department-mask">小学部</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 col-padding">
                                <div className="department">
                                    <Link to="/junior/index">
                                        <img src="image/department1.jpg" alt=""/>
                                        <div className="department-mask">中学部</div>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 col-padding">
                                <div className="department">
                                    <img src="image/department2.jpg" alt=""/>
                                    <div className="department-mask">国际部</div>
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
                                        this.props.index.article_list.map(function (article) {
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
                                    this.props.index.article_list.map(function (article) {
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
                        <div className="col-md-4 visible-xs-inline margin-top"></div>
                        <div className="col-md-4 col-padding">
                            <div className="title">
                                <div className="title-icon"></div>
                                <div className="title-text">用户导航</div>
                                <div className="title-line"></div>
                            </div>
                            <div className="col-md-6 col-padding">
                                <Link to="/teacher/recruitment/entry">
                                    <div className="enter-item margin-top-20">
                                        <div className="enter-item-box">
                                            <img className="enter-item-icon" src="../image/location.png" alt=""/>
                                            <div className="enter-item-text">教师应聘入口</div>
                                            <img className="enter-item-arrow" src="../image/right.png" alt=""/>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/primary/entry">
                                    <div className="enter-item margin-top-20">
                                        <div className="enter-item-box">
                                            <img className="enter-item-icon" src="../image/evaluate.png" alt=""/>
                                            <div className="enter-item-text">小学报读入口</div>
                                            <img className="enter-item-arrow" src="../image/right.png" alt=""/>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/junior/entry">
                                    <div className="enter-item margin-top-20">
                                        <div className="enter-item-box">
                                            <img className="enter-item-icon" src="../image/mail.png" alt=""/>
                                            <div className="enter-item-text">初中报读入口</div>
                                            <img className="enter-item-arrow" src="../image/right.png" alt=""/>
                                        </div>
                                    </div>
                                </Link>
                                <Link to="/student/login">
                                    <div className="enter-item margin-top-20">
                                        <div className="enter-item-box">
                                            <img className="enter-item-icon" src="../image/round_check.png" alt=""/>
                                            <div className="enter-item-text">课程选择入口</div>
                                            <img className="enter-item-arrow" src="../image/right.png" alt=""/>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-6 col-padding">
                                <Link to="">
                                    <div className="enter-item margin-top-20">
                                        <div className="enter-item-box">
                                            <div className="enter-item-box">
                                                <img className="enter-item-icon" src="../image/activity.png" alt=""/>
                                                <div className="enter-item-text">OA系统入口</div>
                                                <img className="enter-item-arrow" src="../image/right.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <a href="http://c.lelvw.com/">
                                    <div className="enter-item margin-top-20">
                                        <div className="enter-item-box">
                                            <div className="enter-item-box">
                                                <img className="enter-item-icon" src="../image/activity.png" alt=""/>
                                                <div className="enter-item-text">面谈结果查询</div>
                                                <img className="enter-item-arrow" src="../image/right.png" alt=""/>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                                <Link to="">
                                    <div className="enter-item margin-top-20">
                                        <div className="enter-item-box">

                                        </div>
                                    </div>
                                </Link>
                                <Link to="">
                                    <div className="enter-item margin-top-20">
                                        <div className="enter-item-box">

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="col-md-4 col-padding">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <Link to="/article/index/0cc726f2b92f43d1ba5cc5d0065efb09">
                                        <div className="title-text">公告通知</div>
                                    </Link>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <Link to="/article/index/0cc726f2b92f43d1ba5cc5d0065efb09">更多</Link>
                                </div>
                            </div>
                            {
                                this.props.index.article_list.map(function (article) {
                                    return (
                                        article.article_category_id === '0cc726f2b92f43d1ba5cc5d0065efb09' ?
                                            <div key={article.article_id} className={"activity-item margin-top"}>
                                                {
                                                    article.article_is_outer_link ?
                                                        <a href={article.article_outer_link} target="_blank">
                                                            <div className="activity-item-date">
                                                                <div
                                                                    className="activity-item-date-day">{article.system_create_time.substring(8, 10)}</div>
                                                                <div
                                                                    className="activity-item-date-year-month">{article.system_create_time.substring(0, 7)}</div>
                                                            </div>
                                                            <div
                                                                className="activity-item-title">{article.article_name}</div>
                                                            <div
                                                                className="activity-item-description">{article.article_summary}</div>
                                                        </a>
                                                        :
                                                        <Link to={"/article/detail/" + article.article_id}>
                                                            <div className="activity-item-date">
                                                                <div
                                                                    className="activity-item-date-day">{article.system_create_time.substring(8, 10)}</div>
                                                                <div
                                                                    className="activity-item-date-year-month">{article.system_create_time.substring(0, 7)}</div>
                                                            </div>
                                                            <div
                                                                className="activity-item-title">{article.article_name}</div>
                                                            <div
                                                                className="activity-item-description">{article.article_summary}</div>
                                                        </Link>
                                                }
                                            </div>
                                            :
                                            ''
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-4 visible-xs-inline margin-top"></div>
                        <div className="col-md-4 col-padding">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <Link to="/article/index/da9b1750e8ea4f959df23cbdcba53f9a">
                                        <div className="title-text">主题活动</div>
                                    </Link>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <Link to="/article/index/da9b1750e8ea4f959df23cbdcba53f9a">更多</Link>
                                </div>
                            </div>
                            {
                                this.props.index.article_list.map(function (article) {
                                    return (
                                        article.article_category_id === 'da9b1750e8ea4f959df23cbdcba53f9a' ?
                                            <div key={article.article_id} className={"activity-item margin-top"}>
                                                {
                                                    article.article_is_outer_link ?
                                                        <a href={article.article_outer_link} target="_blank">
                                                            <div className="activity-item-date">
                                                                <div
                                                                    className="activity-item-date-day">{article.system_create_time.substring(8, 10)}</div>
                                                                <div
                                                                    className="activity-item-date-year-month">{article.system_create_time.substring(0, 7)}</div>
                                                            </div>
                                                            <div
                                                                className="activity-item-title">{article.article_name}</div>
                                                            <div
                                                                className="activity-item-description">{article.article_summary}</div>
                                                        </a>
                                                        :
                                                        <Link to={"/article/detail/" + article.article_id}>
                                                            <div className="activity-item-date">
                                                                <div
                                                                    className="activity-item-date-day">{article.system_create_time.substring(8, 10)}</div>
                                                                <div
                                                                    className="activity-item-date-year-month">{article.system_create_time.substring(0, 7)}</div>
                                                            </div>
                                                            <div
                                                                className="activity-item-title">{article.article_name}</div>
                                                            <div
                                                                className="activity-item-description">{article.article_summary}</div>
                                                        </Link>
                                                }
                                            </div>
                                            :
                                            ''
                                    )
                                })
                            }
                        </div>
                        <div className="col-md-4 visible-xs-inline margin-top"></div>
                        <div className="col-md-4 col-padding">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <Link to="/article/index/7e84950e6d96412b860b5be55f46d5e8">
                                        <div className="title-text">党建活动</div>
                                    </Link>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <Link to="/article/index/7e84950e6d96412b860b5be55f46d5e8">更多</Link>
                                </div>
                            </div>
                            {
                                this.props.index.article_list.map(function (article) {
                                    return (
                                        article.article_category_id === '7e84950e6d96412b860b5be55f46d5e8' ?
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

                <div className="content-background-1">
                    <div className="container">
                        <div className="row margin-top-20 margin-bottom-20">
                            <div className="col-md-3 hidden-xs hidden-sm col-padding">
                                <Link to="/page/1c4de3536a17485f87fa3fd2e2066172">
                                    <div className="sight">
                                        <img className="sight-image-0" src="image/sight-0.jpg" alt=""/>
                                        <div className="sight-mask">美丽校园</div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-md-9 col-xs-12 col-no-padding">
                                <div className="col-md-4 col-xs-6 col-padding">
                                    <Link to="/teacher/index/70699f5ca3df49bfb4c742827e1a060c">
                                        <div className="sight">
                                            <img className="sight-image-1" src="image/sight-1.jpg" alt=""/>
                                            <div className="sight-mask">教师风采</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4 col-xs-6 col-padding">
                                    <Link to="/student/index/0bce6c38d8d3463bb62a3270251a126d">
                                        <div className="sight">
                                            <img className="sight-image-1" src="image/sight-2.jpg" alt=""/>
                                            <div className="sight-mask">学生社团</div>
                                        </div>
                                    </Link>
                                </div>
                                <div
                                    className="col-xs-12 visible-xs-inline-block visible-sm-inline-block margin-top"></div>
                                <div className="col-md-4 col-xs-6 col-padding">
                                    <Link to="/page/d7368f86afce4554ab477a441a636265">
                                        <div className="sight">
                                            <img className="sight-image-1" src="image/sight-3.jpg" alt=""/>
                                            <div className="sight-mask">课程选择</div>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-12 hidden-xs margin-top-20"></div>
                                <div className="col-md-4 col-xs-6 col-padding">
                                    <Link
                                        to="/article/single/5c97043e47c14a2395c97b25c8257a67/7108da1a6abc49d29d6715755fe221d0">
                                        <div className="sight">
                                            <img className="sight-image-1" src="image/sight-4.jpg" alt=""/>
                                            <div className="sight-mask">魅力课堂</div>
                                        </div>
                                    </Link>
                                </div>
                                <div
                                    className="col-xs-12 visible-xs-inline-block visible-sm-inline-block margin-top"></div>
                                <div className="col-md-8 col-xs-12 col-padding">
                                    <Link
                                        to="/article/single/210445be7fcc437eb639728c84530823/39ee2aac07b1447d8eaf22f34d0caca2">
                                        <div className="sight">
                                            <img className="sight-image-2" src="image/sight-5.jpg" alt=""/>
                                            <div className="sight-mask">综合实践</div>
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
        index: state.index,
        advertisement: state.advertisement
    }
})(Index);
