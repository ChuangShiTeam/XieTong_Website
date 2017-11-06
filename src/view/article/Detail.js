import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import ArticleSubNav from '../../component/ArticleSubNav';
import DepartmentSubNav from '../../component/DepartmentSubNav';

import http from '../../util/http';

class ArticleDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            article: {}
        }
    }

    componentDidMount() {
        http.request({
            url: '/desktop/article/find',
            data: {
                article_id: this.props.params.article_id
            },
            success: function (data) {
                this.setState({
                    article: data,
                });
            }.bind(this),
            error: function (data) {

            },
            complete: function () {

            }
        });
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <Header history={this.props.history} website_menu_id=""/>
                <div className="content container">
                    <div className="title margin-top-20">
                        <div className="title-icon"></div>
                        <div className="title-breadcrumb">
                            <Link to="/index">首页</Link> > <Link to="">学校新闻</Link>
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
                            <ArticleSubNav history={this.props.history}
                                           article_category_id={this.state.article.article_category_id ? this.state.article.article_category_id : ''}/>
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">
                            <div className="article-title margin-top">
                                <h3>{this.state.article.article_name}</h3>
                            </div>
                            <div className="article-summary margin-top-20">
                                作者： admin 更新时间：{this.state.article.system_create_time}
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
})(ArticleDetail);