import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Pagination} from 'react-bootstrap';

import Header from '../component/Header';
import Footer from '../component/Footer';

import constant from '../common/constant';
import http from '../common/http';
import util from '../common/util';

class ArticleIndex extends Component {
	constructor(props) {
		super(props);

		this.state = {
			is_load: false,
			page_index: 1,
			page_size: 10,
			total: 0,
			article_list: []
		}
	}

	componentDidMount() {
		util.setTitle('全站搜索');

		util.scrollToTop(0);

		this.handleLoad();
	}

	componentWillReceiveProps(nextProps) {
		util.scrollToTop(0);
	}

	componentWillUnmount() {

	}

	handleLoad() {
		http.request({
			url: '/desktop/xietong/website/search',
			data: {
				keyword: this.props.params.keyword ? this.props.params.keyword : '',
				page_index: this.state.page_index,
				page_size: this.state.page_size
			},
			success: function (data) {
				this.setState({
					page_index: this.state.page_index,
					total: data.total,
					article_list: data.list
				});
			}.bind(this),
			error: function (data) {

			},
			complete: function () {

			}
		});
	}

	handlePagination(page_index) {
		this.setState({
			page_index: page_index
		}, function () {
			this.handleLoad();
		}.bind(this));
	}

	render() {
		return (
			<div>
				<Header history={this.props.history} website_menu_id="" keyword={this.props.params.keyword}/>
				<div className="content container">
					<div className="title margin-top-20">
						<div className="title-icon"></div>
						<div className="title-breadcrumb">
							<Link to="/index">首页</Link> > <Link to="">全站搜索</Link>
						</div>
					</div>
					<div className="row margin-top-20">
							{
								this.state.article_list.map(function (article, index) {
									return (
										<Link key={article.article_id} to={"/article/detail/" + article.article_id}>
											<div className={"article-item" + (index > 0 ? " margin-top-30" : "")}>
												<img className="article-item-image"
													 src={constant.image_host + article.file_path}
													 alt=""/>
												<div className="article-item-title">{article.article_name}</div>
												<div className="article-item-description">{article.article_summary}</div>
											</div>
										</Link>
									)
								})
							}
							{
								this.state.article_list.length > 0 ?
									<Pagination
										ellipsis
										boundaryLinks
										items={Math.ceil(this.state.total / this.state.page_size)}
										maxButtons={5}
										activePage={this.state.page_index}
										onSelect={this.handlePagination.bind(this)}
									/>
									:
									''
							}

					</div>
				</div>
				<Footer/>
			</div>
		);
	}
}

export default connect((state) => {
	return {}
})(ArticleIndex);
