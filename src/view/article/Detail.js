import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Carousel} from 'react-bootstrap';

import Header from '../../component/Header';
import Footer from '../../component/Footer';

import constant from '../../util/constant';
import http from '../../util/http';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        if (this.props.index.list.length === 0) {
            // http.request({
            //     url: '/mobile/minhang/task/user/complete/list',
            //     data: {
            //         task_id: '',
            //         page_index: 1,
            //         page_size: 8
            //     },
            //     success: function (data) {
            //
            //     },
            //     complete: function () {
            //
            //     }
            // });
        }
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Header website_menu_id="8d3c2491d1394b65a05c707846f06ab2"/>
                <div className="content container">
                    <div className="title margin-top-20">
                        <div className="title-icon"></div>
                        <div className="title-breadcrumb"><a href="/index.html">首页</a> > <a href="xzzc.html">走进协同</a> >
                            校长致辞
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <a href="/xzzc.html">
                                <div className="subnav-item  active  ">
                                    <div className="subnav-item-menu">校长致辞</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/xxjj.html">
                                <div className="subnav-item margin-top ">
                                    <div className="subnav-item-menu">学校简介</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/fssy.html">
                                <div className="subnav-item margin-top ">
                                    <div className="subnav-item-menu">佛山市实验学校教育集团</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/mgxt.html">
                                <div className="subnav-item margin-top ">
                                    <div className="subnav-item-menu">美国协同教育集团</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/zzjg.html">
                                <div className="subnav-item margin-top ">
                                    <div className="subnav-item-menu">组织架构</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/xxfzc.html">
                                <div className="subnav-item margin-top ">
                                    <div className="subnav-item-menu">学校发展处</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/jsfzc.html">
                                <div className="subnav-item margin-top ">
                                    <div className="subnav-item-menu">教师发展处</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </a>
                            <a href="/xsfzc.html">
                                <div className="subnav-item margin-top ">
                                    <div className="subnav-item-menu">学生发展处</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </a>
                            <div className="department margin-top">
                                <a href="/xxb.html">
                                    <img src="/image/department0.jpg" alt=""/>
                                    <div className="department-mask">小学部</div>
                                </a>
                            </div>
                            <div className="department margin-top">
                                <a href="/zxb.html">
                                    <img src="/image/department1.jpg" alt=""/>
                                    <div className="department-mask">中学部</div>
                                </a>
                            </div>
                            <div className="department margin-top">
                                <a href="/gjb.html">
                                    <img src="/image/department2.jpg" alt=""/>
                                    <div className="department-mask">国际部</div>
                                </a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div
                                dangerouslySetInnerHTML={{__html: '<div style="text-align: center;"><span style="font-size: 12pt;">协同学校，创造最适合学生成长的精英教育</span><br /><span style="font-size: 12pt;">&mdash;&mdash;校长致辞</span></div><div style="text-align: left;"><br />亲爱的学生、家长：<br />&nbsp;&nbsp;&nbsp; 你们好！佛山协同（国际）学校，由佛山市实验学校教育集团和美国协同教育集团联合创办，是一所国际化、特色化、精英化的学校。<br />目前，小学部、中学部在校师生1500人。其中，有来自美国、英国、加拿大等20多个国家38名学生就读，有港澳台籍学生154名，有外籍教师8人（含国际部），是禅城区外籍学生和外籍教师最多的中小学学校。<br />学校办学成绩领先禅城，近两年期末统考中，中学部各年级总分平均分在区直24所中学位列前茅！<br /><br />学校办学特色鲜明，主要体现在以下三个方面：<br />&nbsp;&nbsp;&nbsp;<strong>选择性课程 发展学生核心素养</strong><br />&nbsp;&nbsp;&nbsp; 学校构建分层、分类、综合、特需的课程。语文实行模块式教学，将传统语文分为快乐基础、快乐阅读、快乐写作三个部分，每个学生轮流到三个对应模块的学科课室上课。数学开设门萨俱乐部，专门训练学生数理思维。从初二开始，语文、数学、英语实行分层教学，在原有行政班级不变的情况下，学生根据自己的基础选择不同层次的课程内容。<br />实施体艺二加二策略，每位学生掌握两项运动技能和两项艺术特长，培养学生强健体魄和艺术素养。开设游泳课，让每个孩子学会游泳。<br />2017&mdash;2018学年中小学共开出校本选修课100多门，高尔夫、击剑、中华传统小吃、武术、茶道礼仪等倍受学生欢迎。<br /><br />&nbsp;&nbsp;&nbsp;<strong>共生式课堂 改变学生成长方式</strong><br />&nbsp;&nbsp;&nbsp; 设计学科课室，创设学科氛围，强化学科学习。学生以班级整体到各学科教室上课，每个学生都有专属课程表，让学生主动学习、自律行为、自主规划，从而改变学生的学习方式和成长方式。<br />倡导活动式教学，分为自主前置、活动探究、检测反思三环节。创设教学情境，聚焦学生兴趣和注意力，尊重个性，突出自主，强调合作，重视体验，鼓励探索。强调生与师、学与教、情境与活动的共同体，真正改变学生学习方式和教师发展方式，实现学生与教师的相长共生。<br />&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;<strong>活动式教育&nbsp; 培养学生核心品质</strong><br />&nbsp;&nbsp;&nbsp; 策划主题式系列化教育活动，培养学生综合素养。设有校园八大主题节日：体育节、文化节、艺术节、读书节、科技节、英语节、公益节、地球节，每月都有一个主题节日。&ldquo;跑步去北京&rdquo;、疯狂万圣节、欢乐圣诞节、英语小镇、经典阅读等主题节日活动已深受学生乃至家长喜爱。协同秀场、协同义卖、协同好声音、协同达人秀、协同大讲堂、协同欢乐汇等已成为协同系列特色活动。每周五学校开设协同大舞台，中小学部学生轮流表演，让每个学生充分展示自己的个性特长。<br />开展校际交流及社会实践活动。初一学生每年到深圳、香港协同体系学校参加&ldquo;港深社会游学实践&rdquo;，培养家国情怀。初二学生每年到粤北贫困山区学农实践，锻炼坚毅的品质；学生每年暑假可参加纯美式夏令营活动，体验纯正美式文化和教育，开拓国际视野。<br /><br />&nbsp;&nbsp;&nbsp; 我相信，在上级政府和教育部门的大力支持下，在社会各界的热心帮助下，在所有协同人的共同努力下，协同的明天一定会更加美好！</div>'}}></div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default connect((state) => state)(Index);
