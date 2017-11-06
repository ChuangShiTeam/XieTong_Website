import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../../component/Header';
import Footer from '../../component/Footer';

import http from '../../util/http';

class Detail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {

            }
        }
    }

    componentDidMount() {
        http.request({
            url: '/mobile/article/find',
            data: {
                article_id: this.props.params.article_id
            },
            success: function (data) {
                this.setState({
                    article: data
                });

                // this.props.dispatch({
                //     type: 'article',
                //     data: {
                //         item: {
                //             saa: 'eee'
                //         }
                //     }
                // });
            }.bind(this),
            complete: function () {

            }
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Header history={this.props.history} website_menu_id="8d3c2491d1394b65a05c707846f06ab2"/>
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
                            <div className="article-title margin-top">
                                <h3>{this.state.article.article_name}</h3>
                            </div>
                            <div className="article-summary margin-top-20">
                                作者： admin 更新时间：2017-10-26
                            </div>
                            <div className="margin-top-30" dangerouslySetInnerHTML={{__html: this.state.article.article_content}}></div>
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

    }
})(Detail);
