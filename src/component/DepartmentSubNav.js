import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router'

class DepartmentSubNav extends Component {
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
                <div className="department margin-top">
                    <Link to="/primary/school">
                        <img src="/image/department0.jpg" alt=""/>
                        <div className="department-mask">小学部</div>
                    </Link>
                </div>
                <div className="department margin-top">
                    <Link to="/junior/school">
                        <img src="/image/department1.jpg" alt=""/>
                        <div className="department-mask">中学部</div>
                    </Link>
                </div>
                <div className="department margin-top">
                    <Link to="/international/school">
                        <img src="/image/department2.jpg" alt=""/>
                        <div className="department-mask">国际部</div>
                    </Link>
                </div>
            </div>
        );
    }
}

DepartmentSubNav.propTypes = {

};

DepartmentSubNav.defaultProps = {

};

export default connect((state) => {
    return {

    }
})(DepartmentSubNav);