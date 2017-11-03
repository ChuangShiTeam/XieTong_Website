import React, {Component} from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <div className="row menu hidden-xs">
                        <li>
                            <a href="/xzzc.html">走进协同</a>
                        </li>
                        <li>
                            <a href="/gltd.html">教师发展</a>
                        </li>
                        <li>
                            <a href="/xsst.html">学生发展</a>
                        </li>
                        <li>
                            <a href="/gsskt.html">课程教学</a>
                        </li>
                        <li>
                            <a href="/xyaq.html">学生服务</a>
                        </li>
                        <li>
                            <a href="/lxyz.html">党建工会</a>
                        </li>
                        <li>
                            <a href="/zsjh.html">招生招聘</a>
                        </li>
                    </div>
                    <div className="row line hidden-xs"></div>
                    <div className="row copyright margin-top-20">
                        <div className="col-md-3 col-xs-12">
                            郑老师 82596128 18188718581(中小学)
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

export default Footer;