import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Carousel} from 'react-bootstrap';
import Slider from 'react-slick';

import Header from '../../component/Header';
import Footer from '../../component/Footer';

import constant from '../../common/constant';
import http from '../../common/http';
import util from '../../common/util';

class Index extends Component {
	constructor(props) {
		super(props);

		this.state = {

		}
	}

	componentDidMount() {
		/*请求接口并缓存在本地*/
        if (this.props.primary.teacher_list.length === 0) {
            // http.request({
            //     url: '/desktop/xietong/primary/school/init',
            //     data: {
				// 	organization_id: this.props.primary.organization_id
            //     },
            //     success: function (data) {
            //         this.props.dispatch({
            //             type: 'primary',
            //             data: {
            //                 teacher_list: data.teacher_list,
            //                 student_list: data.student_list
            //             }
            //         });
            //     }.bind(this),
            //     error: function (data) {
            //
            //     },
            //     complete: function () {
            //
            //     }
            // });
        }
    }

    componentWillReceiveProps(nextProps) {
        util.scrollToTop(0);
    }

	componentWillUnmount() {

	}

	render() {
		const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 2,
            slidesToScroll: 1
        };

		return (
			<div className="index">
				<Header history={this.props.history} website_menu_id="home"/>
				<div className="container margin-bottom-20">
					<div className="row margin-top">
						<div className="col-md-6 col-padding">
							<div className="title">
								<div className="pull-left">
									<div className="title-icon"></div>
									<Link to="/article/index/9d8508d24242499ebcf344e17d8222de">
										<div className="title-text">小学部教师风采</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/article/index/9d8508d24242499ebcf344e17d8222de">更多</Link>
								</div>
							</div>
							<Slider {...settings}>
                            {/*{*/}
                                {/*this.props.primary.teacher_list.map(function (teacher) {*/}
                                    {/*return (*/}
										{/*<div key={teacher.student_id} className="teacher-item-3">*/}
											{/*<div className="teacher-image">*/}
												{/*<img src={constant.image_host + teacher.file_path} alt=""/>*/}
												{/*<div>*/}
													{/*<div className="teacher-name">{teacher.student_name}</div>*/}
													{/*<div className="text-center">{teacher.clazz_name}</div>*/}
												{/*</div>*/}
											{/*</div>*/}
										{/*</div>*/}
                                    {/*)*/}
                                {/*}.bind(this))*/}
                            {/*}*/}
							</Slider>
						</div>
						<div className="col-md-6 col-padding">
							<div className="title">
								<div className="pull-left">
									<div className="title-icon"></div>
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">
										<div className="title-text">小学部情境课堂</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">更多</Link>
								</div>
							</div>

						</div>
						<div className="col-md-6 col-padding">
							<div className="title">
								<div className="pull-left">
									<div className="title-icon"></div>
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">
										<div className="title-text">小学部学生作品</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">更多</Link>
								</div>
							</div>

						</div>
						<div className="col-md-6 col-padding">
							<div className="title">
								<div className="pull-left">
									<div className="title-icon"></div>
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">
										<div className="title-text">小学部学生领袖</div>
									</Link>
									<div className="title-line"></div>
								</div>
								<div className="pull-right">
									<Link to="/student/index/858ccb59a12047d5ad0525a6f3f1ce9c">更多</Link>
								</div>
							</div>
							<Slider {...settings}>
                            {/*{*/}
                                {/*this.props.primary.student_list.map(function (student) {*/}
                                    {/*return (*/}
										{/*<div key={student.student_id} className="teacher-item-2">*/}
											{/*<div className="teacher-image">*/}
												{/*<img src={constant.image_host + student.file_path} alt=""/>*/}
												{/*<div>*/}
													{/*<div className="teacher-name">{student.student_name}</div>*/}
													{/*<div className="text-center">{student.clazz_name}</div>*/}
												{/*</div>*/}
											{/*</div>*/}
										{/*</div>*/}
                                    {/*)*/}
                                {/*}.bind(this))*/}
                            {/*}*/}
							</Slider>
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
        primary: state.primary
	}
})(Index);
