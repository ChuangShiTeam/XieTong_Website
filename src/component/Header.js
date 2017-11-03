import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, MenuItem, Carousel} from 'react-bootstrap';
import {AutoAffix} from 'react-overlays';

var host = "http://api.chuangshi.nowui.com";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="header">
                <Navbar className="hidden-sm hidden-md hidden-lg mobile-header" fixedTop={true}>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/index.html">欢迎光临佛山协同(国际)学校</a>
                        </Navbar.Brand>
                        <Navbar.Toggle/>
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <NavDropdown eventKey={"8d3c2491d1394b65a05c707846f06ab2"} title="走进协同"
                                         id="basic-nav-dropdown">
                                <MenuItem eventKey={"8d3c2491d1394b65a05c707846f06ab2.ab80532ed06344de8e89911431ded21d"}
                                          href="/xzzc.html">校长致辞</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"8d3c2491d1394b65a05c707846f06ab2.21a84f73195248b29c42e661e24caa60"}
                                          href="/xxjj.html">学校简介</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"8d3c2491d1394b65a05c707846f06ab2.77f530e74f374e098a6003872069b292"}
                                          href="/fssy.html">佛山市实验学校教育集团</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"8d3c2491d1394b65a05c707846f06ab2.368046568e124718b332ca9127d8c1fa"}
                                          href="/mgxt.html">美国协同教育集团</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"8d3c2491d1394b65a05c707846f06ab2.5698733945424cbfbdd5bd808d7accdf"}
                                          href="/zzjg.html">组织架构</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"8d3c2491d1394b65a05c707846f06ab2.2edf081c60514851ababdca5da15fb2c"}
                                          href="/xxfzc.html">学校发展处</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"8d3c2491d1394b65a05c707846f06ab2.807da4b3bc2646dda38a21313c4d7856"}
                                          href="/jsfzc.html">教师发展处</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"8d3c2491d1394b65a05c707846f06ab2.152b353558d34bcc8b426c47f99ac7d0"}
                                          href="/xsfzc.html">学生发展处</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={"80d321d42ae945a4951f83568452c284"} title="教师发展"
                                         id="basic-nav-dropdown">
                                <MenuItem eventKey={"80d321d42ae945a4951f83568452c284.56794f86b7514caaacd0094c6ae1e0a8"}
                                          href="/gltd.html">管理团队</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"80d321d42ae945a4951f83568452c284.12d65c6311f6450dac87d9d3135b4e5d"}
                                          href="/yxjs.html"> 优秀教师</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"80d321d42ae945a4951f83568452c284.6369ed1a1e814c958fccec28c62cd92e"}
                                          href="/gjjs.html">国际教师</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"80d321d42ae945a4951f83568452c284.702f41207b6e425b940009bb7cab1ebd"}
                                          href="/lspx.html">教师培训</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"80d321d42ae945a4951f83568452c284.d55c51b6acbf45c7981e629a9133a853"}
                                          href="/syds.html">生涯导师</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"80d321d42ae945a4951f83568452c284.3e1e8a8c12574d20b851e6ed9fefe92e"}
                                          href="/xskz.html">学术科组</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={"a34121161c2743f1b77feb64f65b80bf"} title="学生发展"
                                         id="basic-nav-dropdown">
                                <MenuItem eventKey={"a34121161c2743f1b77feb64f65b80bf.56b868164f4a4e38bd4387dc21752331"}
                                          href="/xsst.html">学生社团</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a34121161c2743f1b77feb64f65b80bf.d1cee7765deb4eca816f40fbc48ef4f9"}
                                          href="/xslx.html">学生领袖</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a34121161c2743f1b77feb64f65b80bf.d7645c4e55a444d498c99a5b9d3bf2f3"}
                                          href="/xxfd.html">学习辅导</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a34121161c2743f1b77feb64f65b80bf.ab3dd84a011b47c19fffb734acf69c69"}
                                          href="/gjjl.html">国际交流</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={"1eaf490619d341b4b3ac53cd91b41b66"} title="课程教学"
                                         id="basic-nav-dropdown">
                                <MenuItem eventKey={"1eaf490619d341b4b3ac53cd91b41b66.983d768d22704af79c7f00466bae1532"}
                                          href="/gsskt.html">校本化国家课程</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"1eaf490619d341b4b3ac53cd91b41b66.35c6803489574b5cb3726bfa7d3a7c0a"}
                                          href="/xlhsjkc.html">系列化实践课程</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"1eaf490619d341b4b3ac53cd91b41b66.1bc030134cc2456db2a06f88bfdc65fa"}
                                          href="/zhhtckc.html">综合化特长课程</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"1eaf490619d341b4b3ac53cd91b41b66.b17d802dac0c4c888e5f0f3ecfa89443"}
                                          href="/xxkcb.html">学校课程表</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"1eaf490619d341b4b3ac53cd91b41b66.1849c6b98e6f4a7ca1af9e0741a47886"}
                                          href="/mlkc.html">魅力课堂</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"1eaf490619d341b4b3ac53cd91b41b66.4583a599c5a641f09d85405057145e09"}
                                          href="/jxhd.html">教学活动</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"1eaf490619d341b4b3ac53cd91b41b66.34ea1d34ea164802bd703c40f7fc8acd"}
                                          href="/jpkc.html">精品课例</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"1eaf490619d341b4b3ac53cd91b41b66.c4de6b1893134cddb93e69e0ecc1814f"}
                                          href="/wskc.html">网上课堂</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={"597f47ced98047aa9d79707b3dbcfd6b"} title="学生服务"
                                         id="basic-nav-dropdown">
                                <MenuItem eventKey={"597f47ced98047aa9d79707b3dbcfd6b.320dc7e207784488aa6af2e6a118857c"}
                                          href="/xssc.html">学生手册</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"597f47ced98047aa9d79707b3dbcfd6b.b739af3c554f414ca51c91c06283b5d0"}
                                          href="/xbfw.html">校巴服务</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"597f47ced98047aa9d79707b3dbcfd6b.052319fefbe944498cb99be3275b6d1d"}
                                          href="/sansfw.html">膳食服务</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"597f47ced98047aa9d79707b3dbcfd6b.12337ef432fb4b64bbde3d527262073c"}
                                          href="/ssfw.html">宿舍服务</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"597f47ced98047aa9d79707b3dbcfd6b.aa489a0914014b1596e2b8ada09d2f37"}
                                          href="/xffw.html">校服服务</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"597f47ced98047aa9d79707b3dbcfd6b.bf39e947fa1544ff956bba5c8ea00302"}
                                          href="/xyaq.html">校园安全</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={"dc99f3ff1ecb4d5baf166bdbd3088f98"} title="党建工会"
                                         id="basic-nav-dropdown">
                                <MenuItem eventKey={"dc99f3ff1ecb4d5baf166bdbd3088f98.5a91a9e2117a4858a13cc7befbcbefff"}
                                          href="/lxyz.html">两学一做</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"dc99f3ff1ecb4d5baf166bdbd3088f98.62d4f7f714034c68b1abb792eb32b39a"}
                                          href="/zxdt.html">最新动态</MenuItem>
                            </NavDropdown>
                            <NavDropdown eventKey={"a8398373a697416eba6847c2e42c781d"} title="招生招聘"
                                         id="basic-nav-dropdown">
                                <MenuItem eventKey={"a8398373a697416eba6847c2e42c781d.8c0879165cce47c586e7186d0e02fa41"}
                                          href="/xxbzs.html">小学部招生简章</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a8398373a697416eba6847c2e42c781d.2a2431c7ffb748fdbae965ede114fd75"}
                                          href="/zxbzs.html">中学部招生简章</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a8398373a697416eba6847c2e42c781d.87cf2ae3657a48dd8b819d6c7167fd82"}
                                          href="/zsjh.html">国际部招生简章</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a8398373a697416eba6847c2e42c781d.de49725be26a484089c22bf16e2c1d9d"}
                                          href="/rdhd.html">热点问答</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a8398373a697416eba6847c2e42c781d.17ff9686fa83438f93d5032e18e42a1b"}
                                          href="/zpxx.html">招聘信息</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a8398373a697416eba6847c2e42c781d.b215a850f2a54777a51ce29458ff9108"}
                                          href="/jszp.html">教师招聘</MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey={"a8398373a697416eba6847c2e42c781d.d018174ae7034fb4aed96af815794d0c"}
                                          href="/wybm.html">我要报名</MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="navigation hidden-xs">
                    <div className="container col-padding">
                        <div className="pull-left"><a href="/index.html">您好，欢迎光临佛山协同(国际)学校！</a></div>
                        <div className="pull-right hidden-xs">
                            <a className="margin-right" href="/404.html">我是学生</a>
                            |
                            <a className="margin-left" href="/404.html">我是老师</a>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="container col-padding">
                        <div className="pull-left"><a href="/index.html"><img className="logo" src="/image/logo.png"
                                                                              alt=""/></a></div>
                        <div className="pull-right hidden-xs">
                            <a href="/404.html">
                                <div className="search">
                                    <div className="search-input">

                                    </div>
                                    <div className="search-bottom">
                                        全站搜索
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <AutoAffix viewportOffsetTop={0}>
                <div className="menu hidden-xs">
                    <ul className="container col-padding">
                        <li className={this.props.website_menu_id === "home" ? "active" : ""}>
                            <a href="/index.html">首页</a>
                        </li>
                        <li className={this.props.website_menu_id === "8d3c2491d1394b65a05c707846f06ab2" ? "active" : ""}>
                            <a href="/xzzc.html">走进协同</a>
                            <ul>
                                <li><a href="/xzzc.html">校长致辞</a></li>
                                <li><a href="/xxjj.html">学校简介</a></li>
                                <li><a href="/fssy.html">佛山市实验学校教育集团</a></li>
                                <li><a href="/mgxt.html">美国协同教育集团</a></li>
                                <li><a href="/zzjg.html">组织架构</a></li>
                                <li><a href="/xxfzc.html">学校发展处</a></li>
                                <li><a href="/jsfzc.html">教师发展处</a></li>
                                <li><a href="/xsfzc.html">学生发展处</a></li>
                            </ul>
                        </li>
                        <li className={this.props.website_menu_id === "80d321d42ae945a4951f83568452c284" ? "active" : ""}>
                            <a href="/gltd.html">教师发展</a>
                            <ul>
                                <li><a href="/gltd.html">管理团队</a></li>
                                <li><a href="/yxjs.html"> 优秀教师</a></li>
                                <li><a href="/gjjs.html">国际教师</a></li>
                                <li><a href="/lspx.html">教师培训</a></li>
                                <li><a href="/syds.html">生涯导师</a></li>
                                <li><a href="/xskz.html">学术科组</a></li>
                            </ul>
                        </li>
                        <li className={this.props.website_menu_id === "a34121161c2743f1b77feb64f65b80bf" ? "active" : ""}>
                            <a href="/xsst.html">学生发展</a>
                            <ul>
                                <li><a href="/xsst.html">学生社团</a></li>
                                <li><a href="/xslx.html">学生领袖</a></li>
                                <li><a href="/xxfd.html">学习辅导</a></li>
                                <li><a href="/gjjl.html">国际交流</a></li>
                            </ul>
                        </li>
                        <li className={this.props.website_menu_id === "1eaf490619d341b4b3ac53cd91b41b66" ? "active" : ""}>
                            <a href="/gsskt.html">课程教学</a>
                            <ul>
                                <li><a href="/gsskt.html">校本化国家课程</a></li>
                                <li><a href="/xlhsjkc.html">系列化实践课程</a></li>
                                <li><a href="/zhhtckc.html">综合化特长课程</a></li>
                                <li><a href="/xxkcb.html">学校课程表</a></li>
                                <li><a href="/mlkc.html">魅力课堂</a></li>
                                <li><a href="/jxhd.html">教学活动</a></li>
                                <li><a href="/jpkc.html">精品课例</a></li>
                                <li><a href="/wskc.html">网上课堂</a></li>
                            </ul>
                        </li>
                        <li className={this.props.website_menu_id === "597f47ced98047aa9d79707b3dbcfd6b" ? "active" : ""}>
                            <a href="/xyaq.html">学生服务</a>
                            <ul>
                                <li><a href="/xssc.html">学生手册</a></li>
                                <li><a href="/xbfw.html">校巴服务</a></li>
                                <li><a href="/sansfw.html">膳食服务</a></li>
                                <li><a href="/ssfw.html">宿舍服务</a></li>
                                <li><a href="/xffw.html">校服服务</a></li>
                                <li><a href="/xyaq.html">校园安全</a></li>
                            </ul>
                        </li>
                        <li className={this.props.website_menu_id === "dc99f3ff1ecb4d5baf166bdbd3088f98" ? "active" : ""}>
                            <a href="/lxyz.html">党建工会</a>
                            <ul>
                                <li><a href="/lxyz.html">两学一做</a></li>
                                <li><a href="/zxdt.html">最新动态</a></li>
                            </ul>
                        </li>
                        <li className={this.props.website_menu_id === "a8398373a697416eba6847c2e42c781d" ? "active" : ""}>
                            <a href="/zsjh.html">招生招聘</a>
                            <ul>
                                <li><a href="/xxbzs.html">小学部招生简章</a></li>
                                <li><a href="/zxbzs.html">中学部招生简章</a></li>
                                <li><a href="/zsjh.html">国际部招生简章</a></li>
                                <li><a href="/rdhd.html">热点问答</a></li>
                                <li><a href="/zpxx.html">招聘信息</a></li>
                                <li><a href="/jszp.html">教师招聘</a></li>
                                <li><a href="/wybm.html">我要报名</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                </AutoAffix>
                {
                    this.props.is_show_banner ?
                        <Carousel className="banner hidden-xs" interval={5000} keyboard={false}>
                            <Carousel.Item>
                                <a href="/xxjj.html">
                                    <img className="banner-image"
                                         src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/045f78f2bbe044caa97a9a7f1aa5b3af.jpg"}
                                         alt=""/>
                                </a>
                            </Carousel.Item>
                            <Carousel.Item>
                                <a href="/xsst.html">
                                    <img className="banner-image"
                                         src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/8cafd8e71833445c946a308ed5e9ee93.jpg"}
                                         alt=""/>
                                </a>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="banner-image"
                                     src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/281d8f1b11084f939a98488864221bdf.png"}
                                     alt=""/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="banner-image"
                                     src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/e13d5cf3dcc64ffc82aaf29bbb576463.png"}
                                     alt=""/>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img className="banner-image"
                                     src={host + "/upload/749388e5dac3465f922c54e61d16a993/b8f561e34c8441aaa9eb85c116359718/original/e2579cebf60047b599f8b849f6c7c419.jpg"}
                                     alt=""/>
                            </Carousel.Item>
                        </Carousel>
                        :
                        ''
                }
            </div>
        );
    }
}

Header.propTypes = {
    website_menu_id: React.PropTypes.string.isRequired,
    is_show_banner: React.PropTypes.bool
};

Header.defaultProps = {
    website_menu_id: '',
    is_show_banner: true
};

export default Header;