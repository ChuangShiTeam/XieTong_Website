import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'react-bootstrap';
import Header from '../component/Header'
import Footer from '../component/Footer'

var host = "http://api.chuangshi.nowui.com";

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="index">
                <Header website_menu_id="home"/>
                <div className="content-background-1">
                    <div className="container">
                        <div className="row margin-top-20 margin-bottom-20">
                            <div className="col-md-4 col-xs-4 col-padding">
                                <div className="department">
                                    <a href="/xxb.html">
                                        <img src="image/department0.jpg" alt=""/>
                                        <div className="department-mask">小学部</div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 col-padding">
                                <div className="department">
                                    <a href="/zxb.html">
                                        <img src="image/department1.jpg" alt=""/>
                                        <div className="department-mask">中学部</div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-4 col-xs-4 col-padding">
                                <div className="department">
                                    <a href="/gjb.html">
                                        <img src="image/department2.jpg" alt=""/>
                                        <div className="department-mask">国际部</div>
                                    </a>
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
                                    <div className="title-text">学校新闻</div>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <a href="#">更多</a>
                                </div>
                            </div>
                            <div className="col-md-6 col-padding">
                                <Carousel className="margin-top" interval={3000} keyboard={false}>
                                    <Carousel.Item>
                                        <a href="#">
                                            <img className="school-article-image" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/f07f64940c864d59a4506a696b018ed8.jpg"} alt=""/>
                                        </a>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <a href="#">
                                            <img className="school-article-image" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/608b4278a55b4ffb9e99d4d6c7a41965.jpg"} alt=""/>
                                        </a>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <a href="#">
                                            <img className="school-article-image" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/c81681f248d14960b34bd4d591ef9071.jpg"} alt=""/>
                                        </a>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <a href="#">
                                            <img className="school-article-image" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/e4f154e9732d4ff4888d81a55e5e7434.jpg"} alt=""/>
                                        </a>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <a href="#">
                                            <img className="school-article-image" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/4b56a10946a64bf6a38db039f3e0f603.jpg"} alt=""/>
                                        </a>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <a href="#">
                                            <img className="school-article-image" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/c81681f248d14960b34bd4d591ef9071.jpg"} alt=""/>
                                        </a>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <a href="#">
                                            <img className="school-article-image" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/ea80bd13796c43feb2af9993028bb9cf.jpg"} alt=""/>
                                        </a>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                            <div className="col-md-6 col-padding">
                                <div className={"article-item margin-top"}>
                                    <a href="/article/40d7c97c00824be7a3358c61be156ba0.html">
                                        <img className="article-item-image img-thumbnail" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/f07f64940c864d59a4506a696b018ed8.jpg"} alt=""/>
                                        <div className="article-item-title">佛山协同（国际）学校教师节</div>
                                        <div className="article-item-description">师恩长存，卓越幸福——佛山协同（国际）学校教师节庆祝活动暨优秀教师表彰大会</div>
                                    </a>
                                </div>
                                <div className={"article-item margin-top"}>
                                    <a href="/article/55395079ed324e9daf3766f326463155.html">
                                        <img className="article-item-image img-thumbnail" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/608b4278a55b4ffb9e99d4d6c7a41965.jpg"} alt=""/>
                                        <div className="article-item-title">【喜讯】胡慧敏老师荣获数学教师技能一等奖</div>
                                        <div className="article-item-description">2017年9月27日，在刚刚结束的&ldquo;2017年佛山禅城区小学数学教师技能大赛&rdquo;中，我校小学部数学老师胡慧敏从竞争激烈的解题暨说课比赛中脱颖而出，获得一等奖。</div>
                                    </a>
                                </div>
                                <div className={"article-item margin-top"}>
                                    <a href="/article/9c002dcc41434d199f0c0af6dfebbae5.html">
                                        <img className="article-item-image img-thumbnail" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/c81681f248d14960b34bd4d591ef9071.jpg"} alt=""/>
                                        <div className="article-item-title">协同因你们而更加美好      协同学校九年级表彰会及家长会</div>
                                        <div className="article-item-description">10月21日上午，我校中学部九年级全体师生及家长在国际部报告厅举行了本学期第一阶段表彰会及家长会，会议由黄海松级长主持。</div>
                                    </a>
                                </div>
                                <div className={"article-item margin-top"}>
                                    <a href="/article/a103da4254bf4f5e8413b307580c8703.html">
                                        <img className="article-item-image img-thumbnail" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/e4f154e9732d4ff4888d81a55e5e7434.jpg"} alt=""/>
                                        <div className="article-item-title">砥砺奋进的五年.文明的力量</div>
                                        <div className="article-item-description">砥砺奋进的五年.文明的力量</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 visible-xs-inline margin-top"></div>
                        <div className="col-md-4 col-padding">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <div className="title-text">党建活动</div>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <a href="#">更多</a>
                                </div>
                            </div>
                            <div className={"article-item margin-top"}>
                                <a href="/article/d31a86b977324470a35ae0c1b8f97780.html">
                                    <img className="article-item-image img-thumbnail" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/146a3afdbafe4ad4a107d5dcbacba17f.png"} alt=""/>
                                    <div className="article-item-title">我校党支部 学习习总书记对广东工作批示的重要精神</div>
                                    <div className="article-item-description">4月25日，协同学校党支部成员集中会议室，对习近平总书记对广东工作批示的重要精神进行了全面的学习。</div>
                                </a>
                            </div>
                            <div className={"article-item margin-top"}>
                                <a href="/article/d7c5f895dbf240a795ab4c3f22db8fa6.html">
                                    <img className="article-item-image img-thumbnail" src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/17f799d37ced47a5a0746f95684d547f.png"} alt=""/>
                                    <div className="article-item-title">佛山协同学校党支部召开纪检工作会议</div>
                                    <div className="article-item-description">为扎实做好2017年学校纪检工作，8月30日，协同学校党支部召开纪检工作会议。</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="col-md-4 col-padding">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <div className="title-text">公告通知</div>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <a href="#">更多</a>
                                </div>
                            </div>
                            <div className={"activity-item margin-top"}>
                                <a href="/article/cb1c5d42e3664e16b7f6de8b55c16ec6.html">
                                    <div className="activity-item-date">
                                        <div className="activity-item-date-day">28</div>
                                        <div className="activity-item-date-year-month">2017-09</div>
                                    </div>
                                    <div className="activity-item-title">2017年9月23日我校进行中学部学生个人选修课选课活动</div>
                                    <div className="activity-item-description"></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 visible-xs-inline margin-top"></div>
                        <div className="col-md-4 col-padding">
                            <div className="title">
                                <div className="pull-left">
                                    <div className="title-icon"></div>
                                    <div className="title-text">主题活动</div>
                                    <div className="title-line"></div>
                                </div>
                                <div className="pull-right">
                                    <a href="#">更多</a>
                                </div>
                            </div>
                            <div className={"activity-item margin-top"}>
                                <a href="/article/0567126404ba47a1b0c28d284658cc06.html">
                                    <div className="activity-item-date">
                                        <div className="activity-item-date-day">01</div>
                                        <div className="activity-item-date-year-month">2017-11</div>
                                    </div>
                                    <div className="activity-item-title">佛山协同（国际）学校2017年4月协同视讯 </div>
                                    <div className="activity-item-description"></div>
                                </a>
                            </div>
                            <div className={"activity-item margin-top"}>
                                <a href="/article/08b9f3f6350e4f659329415cc756d853.html">
                                    <div className="activity-item-date">
                                        <div className="activity-item-date-day">06</div>
                                        <div className="activity-item-date-year-month">2017-10</div>
                                    </div>
                                    <div className="activity-item-title">佛山协同（国际）学校202班护畅队  </div>
                                    <div className="activity-item-description"></div>
                                </a>
                            </div>
                            <div className={"activity-item margin-top"}>
                                <a href="/article/0a29f810211f43c8a044f1dd9b949a5e.html">
                                    <div className="activity-item-date">
                                        <div className="activity-item-date-day">18</div>
                                        <div className="activity-item-date-year-month">2017-10</div>
                                    </div>
                                    <div className="activity-item-title">佛山协同（国际）学校精英学子筑梦青春微电影系列</div>
                                    <div className="activity-item-description"></div>
                                </a>
                            </div>
                            <div className={"activity-item margin-top"}>
                                <a href="/article/0c2fe4512d20447fb66f1db2e7ae063e.html">
                                    <div className="activity-item-date">
                                        <div className="activity-item-date-day">18</div>
                                        <div className="activity-item-date-year-month">2017-10</div>
                                    </div>
                                    <div className="activity-item-title">佛山协同（国际）学校2017年2月份视讯  </div>
                                    <div className="activity-item-description"></div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-4 visible-xs-inline margin-top"></div>
                        <div className="col-md-4 col-padding">
                            <div className="title">
                                <div className="title-icon"></div>
                                <div className="title-text">用户导航</div>
                                <div className="title-line"></div>
                            </div>
                            <a href="http://h5.xietong.nowui.com/" target="bank">
                                <div className="enter-item margin-top-20">
                                    <div className="enter-item-icon-0"></div>
                                    <div className="enter-item-text">选课入口</div>
                                    <div className="enter-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/wybm.html">
                                <div className="enter-item margin-top-20">
                                    <div className="enter-item-icon-1"></div>
                                    <div className="enter-item-text">学生报读入口</div>
                                    <div className="enter-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/jszp.html">
                                <div className="enter-item margin-top-20">
                                    <div className="enter-item-icon-2"></div>
                                    <div className="enter-item-text">教师应聘入口</div>
                                    <div className="enter-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/index.html">
                                <div className="enter-item margin-top-20">
                                    <div className="enter-item-icon-3"></div>
                                    <div className="enter-item-text">校长信箱入口</div>
                                    <div className="enter-item-arrow"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="content-background-1">
                    <div className="container">
                        <div className="row margin-top-20 margin-bottom-20">
                            <div className="col-md-3 hidden-xs hidden-sm     col-padding">
                                <a href="/xxjj.html">
                                    <div className="sight">
                                        <img className="sight-image-0" src="image/sight-0.jpg" alt=""/>
                                        <div className="sight-mask">美丽校园</div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-9 col-xs-12 col-no-padding">
                                <div className="col-md-4 col-xs-6 col-padding">
                                    <a href="/gltd.html">
                                        <div className="sight">
                                            <img className="sight-image-1" src="image/sight-1.jpg" alt=""/>
                                            <div className="sight-mask">教师风采</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-4 col-xs-6 col-padding">
                                    <a href="/xsst.html">
                                        <div className="sight">
                                            <img className="sight-image-1" src="image/sight-2.jpg" alt=""/>
                                            <div className="sight-mask">学生社团</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-12 visible-xs-inline-block visible-sm-inline-block margin-top"></div>
                                <div className="col-md-4 col-xs-6 col-padding">
                                    <a href="/xsst.html">
                                        <div className="sight">
                                            <img className="sight-image-1" src="image/sight-3.jpg" alt=""/>
                                            <div className="sight-mask">课程选择</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-md-12 hidden-xs margin-top-20"></div>
                                <div className="col-md-4 col-xs-6 col-padding">
                                    <a href="/xsst.html">
                                        <div className="sight">
                                            <img className="sight-image-1" src="image/sight-4.jpg" alt=""/>
                                            <div className="sight-mask">魅力课堂</div>
                                        </div>
                                    </a>
                                </div>
                                <div className="col-xs-12 visible-xs-inline-block visible-sm-inline-block margin-top"></div>
                                <div className="col-md-8 col-xs-12 col-padding">
                                    <a href="/mlkc.html">
                                        <div className="sight">
                                            <img className="sight-image-2" src="image/sight-5.jpg" alt=""/>
                                            <div className="sight-mask">美丽校园</div>
                                        </div>
                                    </a>
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

export default connect((state) => state)(Index);
