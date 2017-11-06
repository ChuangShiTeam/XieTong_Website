import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

class PageSubNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            website_menu_id: '',
            website_menu_list: [],
            page_id: ''
        }
    }

    componentDidMount() {
        this.setState({
            website_menu_id: this.props.website_menu_id,
            website_menu_list: this.props.website_menu.list,
            page_id: this.props.page_id
        });
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.website_menu_id !== nextProps.website_menu_id) {
            this.setState({
                website_menu_id: nextProps.website_menu_id
            });
        }

        if (this.state.website_menu_list !== nextProps.website_menu.list) {
            this.setState({
                website_menu_list: nextProps.website_menu.list
            });
        }

        if (this.state.page_id !== nextProps.page_id) {
            this.setState({
                page_id: nextProps.page_id
            });
        }
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                {
                    this.state.website_menu_list.map(function (website_menu) {
                        return (
                            website_menu.children.map(function (children_website_menu, index) {
                                return (
                                    website_menu.website_menu_id === this.state.website_menu_id ?
                                        <Link key={children_website_menu.website_menu_id} to={children_website_menu.website_menu_url === '' ? '/page/' + children_website_menu.page_id : children_website_menu.website_menu_url}>
                                            <div className={"subnav-item" + (children_website_menu.page_id === this.state.page_id ? " active" : "") + (index === 0 ? "" : " margin-top")}>
                                                <div className="subnav-item-menu">{children_website_menu.website_menu_name}</div>
                                                <div className="subnav-item-arrow"></div>
                                            </div>
                                        </Link>
                                        :
                                        ""
                                )
                            }.bind(this))
                        )
                    }.bind(this))
                }
            </div>
        );
    }
}

PageSubNav.propTypes = {
    website_menu_id: React.PropTypes.string.isRequired,
    page_id: React.PropTypes.string.isRequired
};

PageSubNav.defaultProps = {

};

export default connect((state) => {
    return {
        website_menu: state.website_menu
    }
})(PageSubNav);