import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Header from '../../component/Header';
import Footer from '../../component/Footer';
import ArticleSubNav from '../../component/ArticleSubNav';
import DepartmentSubNav from '../../component/DepartmentSubNav';

class ArticleIndex extends Component {
    constructor(props) {
        super(props);

        this.state = {
            is_load: false,
            article_category_id: '',
            article_list: []
        }
    }

    componentDidMount() {
        this.setState({
            article_category_id: this.props.params.article_category_id
        }, function () {
            this.handleLoad();
        }.bind(this));
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.article_category_id !== nextProps.params.article_category_id) {
            this.setState({
                article_category_id: nextProps.params.article_category_id
            }, function () {
                this.handleLoad();
            }.bind(this));
        }
    }

    componentWillUnmount() {

    }

    handleLoad() {

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
                            <ArticleSubNav history={this.props.history} article_category_id={this.state.article_category_id}/>
                            <DepartmentSubNav/>
                        </div>
                        <div className="col-md-9">

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
})(ArticleIndex);
