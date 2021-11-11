import React, {Component} from "react";
import Image from 'next/image'
import Link from 'next/link';

//Import Image
import logoMain from "../../assets/images/logo.png"
import secondLogo from "../../assets/images/logo-2.png"

class Headers extends Component {
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    render() {
        return (
            <>
                {/* =============== Topbar area start =============== */}
                <div className="topbar-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 tob-contact-row">
                                <div className="topbar-contact">
                                    <ul>
                                        <li>
                                            <i className="bx bxs-phone" />
                                            <a href="tel:+17632275032">+1 763-227-5032</a>
                                        </li>

                                        <li>
                                            <i className="bx bxs-envelope" />
                                            <a href="mailto:info@example.com">info@example.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 col-6">
                                <div className="topbar-social">
                                    <ul>
                                        <li>
                                            <Link href={"#"}><i className="bx bxl-instagram" /></Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}><i className="bx bxl-facebook" /></Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}><i className="bx bxl-twitter" /></Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}><i className="bx bxl-whatsapp" /></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-6 col-6">
                                <div className="custom-select languege-select">
                                    <select>
                                        <option value={0}>ENG</option>
                                        <option value={1}>BAN</option>
                                        <option value={2}>FSP</option>
                                        <option value={3}>CHI</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============== Topbar area end =============== */}


                {/* ===============  header area start =============== */}
                <header>
                    <div className="header-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                    <div classNamiNe="navbar-wrap">
                                        <div className="logo d-flex justify-content-between">
                                            <Link href={`${process.env.PUBLIC_URL}/`}><a className="navbar-brand" onClick={this.scrollTop}><Image src={logoMain} alt="" /></a></Link>
                                        </div>
                                        <div className="navbar-icons">
                                            <div className="searchbar-open">
                                                <i className="flaticon-magnifier" />
                                            </div>
                                            <div className="user-dropdown-icon">
                                                <i className="flaticon-user" />
                                                <div className="account-dropdown">
                                                    <ul>
                                                        <li className="account-el">
                                                            <i className="bx bx-user-pin" />
                                                            <Link href={"#"}>Sign in</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bxs-user-account" />
                                                            <Link href={"#"}>My Account</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-extension" />
                                                            <Link href={"#"}>Settings</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-log-in-circle" />
                                                            <Link href={"#"}>Log out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="mobile-menu d-flex ">
                                                <div className="top-search-bar m-0 d-block d-xl-none">
                                                </div>
                                                <Link href={"#"}><a className="hamburger d-block d-xl-none">
                                                    <span className="h-top" />
                                                    <span className="h-middle" />
                                                    <span className="h-bottom" />
                                                </a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                    <nav className="main-nav">
                                        <div className="navber-logo-sm">
                                            <Image src={secondLogo} alt="" className="img-fluid" />
                                        </div>
                                        <ul>
                                            <li className="has-child-menu">
                                                <Link href={"#"}>HOME</Link>
                                                <i className="fl flaticon-plus">+</i>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/`} className="sub-item" onClick={this.scrollTop}>Home Page 1</Link>
                                                    </li>
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/home-page-2`} className="sub-item" onClick={this.scrollTop}>Home Page 2</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >About IIEC</Link >
                                            </li>
                                            <li>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/destination`} onClick={this.scrollTop} >IIEC HTMI</Link>
                                            </li> <li>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/destination`} onClick={this.scrollTop} >IIEC MBBS</Link>
                                            </li>
                                            <li className="has-child-menu">
                                                <Link href={"#"}>SERVICES</Link>
                                                <i className="fl flaticon-plus">+</i>
                                                <ul className="sub-menu">
                                                    <li >
                                                        <Link href={"#"} className="sub-item has-child-menu" onClick={this.scrollTop}>EDUCATION</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Korea</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in USA</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Canada</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Australia</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Malaysia</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Singapore</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Europe</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in UK</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in China</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"} className="sub-item has-child-menu" onClick={this.scrollTop}>VISA</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Business VISA</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Dependent VISA</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>EB5 VISA</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>H1B Alternative</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Investor VISA</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Tourist VISA</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>VISA Refusal</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link href={`#`} className="sub-item has-child-menu" onClick={this.scrollTop}>IMIGRATION</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>CANADA</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>AUSTRALIA</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>SOUTH AFRICA</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"} className="sub-item has-child-menu" onClick={this.scrollTop}>TRAINING</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>IELTS</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>TOEFL</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>PTE</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>GMAT</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>SAT</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>GRE</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <Link href={"#"} className="sub-item has-child-menu" onClick={this.scrollTop}>INTERNSHIP</Link>
                                                        <ul className="sub-menu">
                                                            <li>
                                                                <Link href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>USA J-1</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>USA J1 Summer Work</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>USA J1-Caretaker</Link>
                                                            </li>
                                                            <li>
                                                                <Link href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Malaysia</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >EVENTS</Link >
                                            </li>
                                            <li>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >BLOGS</Link >
                                            </li>
                                            {/* <li className="has-child-menu">
                                                <Link href={"#"}>Blogs</Link>
                                                <i className="fl flaticon-plus">+</i>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/blog`} className="sub-item" onClick={this.scrollTop}>Blog page</Link>
                                                    </li>
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/blog-sidebar`} className="sub-item" onClick={this.scrollTop}>Blog sidebar</Link>
                                                    </li>
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/blog-standard`} className="sub-item" onClick={this.scrollTop}>Blog standard</Link>
                                                    </li>
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/blog-details`} className="sub-item" onClick={this.scrollTop}>blog-details </Link>
                                                    </li>
                                                </ul>
                                            </li> */}
                                            <li className="has-child-menu">
                                                <Link href={"#"}>Information</Link>
                                                <i className="fl flaticon-plus">+</i>
                                                <ul className="sub-menu">
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/gallary`} className="sub-item" onClick={this.scrollTop}>gallary page</Link>
                                                    </li>
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/guide`} className="sub-item" onClick={this.scrollTop}>guide page</Link>
                                                    </li>
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/destination`} className="sub-item" onClick={this.scrollTop}>destination page</Link>
                                                    </li>
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/404`} className="sub-item" onClick={this.scrollTop}>404 Page</Link>
                                                    </li>
                                                    <li>
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/faq`} className="sub-item" onClick={this.scrollTop}>FAQ page</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            {/* <li>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/contact`} onClick={this.scrollTop} >Contact Us</Link>
                                            </li> */}
                                        </ul>
                                        <div className="navbar-icons-2">
                                            <div className="searchbar-open">
                                                <i className="flaticon-magnifier" />
                                            </div>
                                            <div className="user-dropdown-icon">
                                                <i className="flaticon-user" />
                                                <div className="account-dropdown">
                                                    <ul>
                                                        <li className="account-el">
                                                            <i className="bx bx-user-pin" />
                                                            <Link href={`#`} >Sign in</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bxs-user-account" />
                                                            <Link href={`#`} >My Account</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-extension" />
                                                            <Link href={`#`} >Settings</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-log-in-circle" />
                                                            <Link href={`#`} >Log out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sidebar-contact">
                                            <ul>
                                                <li className="sidebar-single-contact"><i className="bx bxs-phone" />
                                                    <Link href={`tel:+17632275032`} >+1 763-227-5032</Link>
                                                </li>
                                                <li className="sidebar-single-contact"><i className="bx bxs-envelope" />
                                                    <Link href={`mailto:info@example.com`} >info@example.com</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>

                        <form>
                            <div className="main-searchbar">
                                <div className="searchbar-close">
                                    <i className="bx bx-x" />
                                </div>
                                <input type="text" placeholder="Search Here......" />
                                <div className="searchbar-icon">
                                    <i className="bx bx-search" />
                                </div>
                            </div>
                        </form>

                    </div>
                </header>
                {/* ===============  header area end =============== */}
            </>
        );
    }
}

export default Headers;
