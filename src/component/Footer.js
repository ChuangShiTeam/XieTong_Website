import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="footer">
                <div className="container col-padding">
                    <div className="menu hidden-xs">
                        {
                            this.props.website_menu.list.map(function (website_menu) {
                                return (
                                    <li key={website_menu.website_menu_id}>
                                        <Link to={website_menu.website_menu_url === '' ? '/page/' + website_menu.page_id : website_menu.website_menu_url}>{website_menu.website_menu_name}</Link>
                                    </li>
                                )
                            })
                        }
                    </div>
                    <div className="line hidden-xs"></div>
                    <div className="row copyright margin-top-20">
                        <div className="col-md-3 col-xs-12">
                            郑老师 82596128 18188719581(中小学)
                        </div>
                        <div className="col-md-3 col-xs-12">
                            董老师 82596004(中小学)
                        </div>
                        <div className="col-md-3 col-xs-12">
                            陈老师 82596001(小学)
                        </div>
                        <div className="col-md-3 col-xs-12">
                            吴老师 82596002(小学)
                        </div>
                        <div className="col-md-3 col-xs-12">
                            田老师 82596016(中学)
                        </div>
                        <div className="col-md-3 col-xs-12">
                            李老师 82596003(中学)
                        </div>
                        <div className="col-md-12 col-xs-12">
                            学校地址：佛山市禅城区东鄱南路10号
                        </div>
                        <div className="col-xs-12 visible-xs margin-bottom-20">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Footer.propTypes = {

};

Footer.defaultProps = {

};

export default connect((state) => {
    return {
        website_menu: state.website_menu
    }
})(Footer);