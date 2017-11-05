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
        if (this.props.index.list.length === 0) {
            // http.request({
            //     url: '/mobile/minhang/task/user/complete/list',
            //     data: {
            //         task_id: '',
            //         page_index: 1,
            //         page_size: 8
            //     },
            //     success: function (data) {
            //
            //     },
            //     complete: function () {
            //
            //     }
            // });
        }
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
