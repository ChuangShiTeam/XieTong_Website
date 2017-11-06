import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

import http from '../util/http';

class ArticleSubNav extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {
        if (this.props.article_category.list.length === 0) {
            http.request({
                url: '/desktop/article/category/list',
                data: {

                },
                success: function (data) {
                    this.props.dispatch({
                        type: 'article_category',
                        data: {
                            list: data
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

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                {
                    this.props.article_category.list.map(function (article_category, index) {
                        return (
                            <Link key={article_category.article_category_id} to={'/article/index/' + article_category.article_category_id}>
                                <div className={"subnav-item" + (article_category.article_category_id === this.props.article_category_id ? " active" : "") + (index === 0 ? "" : " margin-top")}>
                                    <div className="subnav-item-menu">{article_category.article_category_name}</div>
                                    <div className="subnav-item-arrow"></div>
                                </div>
                            </Link>
                        )
                    }.bind(this))
                }
            </div>
        );
    }
}

ArticleSubNav.propTypes = {
    history: React.PropTypes.object.isRequired,
    article_category_id: React.PropTypes.string.isRequired
};

ArticleSubNav.defaultProps = {

};

export default connect((state) => {
    return {
        article_category: state.article_category
    }
})(ArticleSubNav);