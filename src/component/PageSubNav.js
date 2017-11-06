import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

class PageSubNav extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page_id: '',
            website_menu_list: []
        }
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {
        if (this.state.page_id !== nextProps.page_id) {
            var index = -1;

            for (var i = 0; i < nextProps.website_menu.list.length; i++) {
                for (var j = 0; j < nextProps.website_menu.list[i].children.length; j++) {
                    if (nextProps.website_menu.list[i].children[j].page_id === nextProps.page_id) {
                        index = i;

                        break;
                    }
                }
            }

            if (index > -1) {
                this.setState({
                    page_id: nextProps.page_id,
                    website_menu_list: nextProps.website_menu.list[index].children
                });
            }
        }
    }

    componentWillUnmount() {

    }

    handleClickeMenu(url) {
        this.props.history.push({
            pathname: url,
            query: {}
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.website_menu_list.map(function (website_menu, index) {
                        return (
                            <Link key={website_menu.website_menu_id} to={website_menu.page_id === '' ? website_menu.website_menu_url : '/page/' + website_menu.page_id}>
                                <div className={"subnav-item" + (website_menu.page_id === this.state.page_id ? " active" : "") + (index === 0 ? "" : " margin-top")}>
                                    <div className="subnav-item-menu">{website_menu.website_menu_name}</div>
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

PageSubNav.propTypes = {
    history: React.PropTypes.object.isRequired,
    page_id: React.PropTypes.string.isRequired
};

PageSubNav.defaultProps = {

};

export default connect((state) => {
    return {
        website_menu: state.website_menu
    }
})(PageSubNav);