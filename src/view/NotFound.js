import React, {Component} from 'react';
import {connect} from 'react-redux';

import Header from '../component/Header';
import Footer from '../component/Footer';

class NotFound extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="index">
                <Header website_menu_id="" is_show_banner={false}/>
                <div style={{height: '800px'}}>
                    <div className="not-found">

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
})(NotFound);
