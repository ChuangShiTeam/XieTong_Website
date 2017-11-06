import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

import Header from '../component/Header';
import Footer from '../component/Footer';
import DepartmentSubNav from '../component/DepartmentSubNav';

class Team extends Component {
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
            <div>
                <Header history={this.props.history} website_menu_id="8d3c2491d1394b65a05c707846f06ab2"/>
                <div className="content container">
                    <div className="title margin-top-20">
                        <div className="title-icon"></div>
                        <div className="title-breadcrumb">
                            <a href="/index.html">首页</a> > <Link to=""></Link> >
                        </div>
                    </div>
                    <div className="row margin-top-20">
                        <div className="subnav col-md-3 hidden-xs">
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
        website_menu: state.website_menu
    }
})(Team);
