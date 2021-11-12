import React, {Component} from "react";
import Image from 'next/image'
import Link from 'next/link';

//Import Image
import logoMain from "../../assets/images/logo.png"
import secondLogo from "../../assets/images/logo-2.png"

console.log('heelo world')
class Headers extends Component {
    constructor(props) {
        super(props);
        this.state = {searchModal: false};
        this.state = {accountModal: false};
        // this.handleClick = this.handleClick.bind(this);
    }
    scrollTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    handleAccountModal() {
        console.log('kkkk')
        document.getElementById("accountModal").classList.add("activeCard")
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
                                            <Link href={"#"}><a className='tob-bar-icons'><i className="bx bxl-instagram" /></a></Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}><a className='tob-bar-icons'><i className="bx bxl-facebook" /></a></Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}><a className='tob-bar-icons'><i className="bx bxl-twitter" /></a></Link>
                                        </li>
                                        <li>
                                            <Link href={"#"}><a className='tob-bar-icons'><i className="bx bxl-whatsapp" /></a></Link>
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
                    <div className="header-area" style={{paddingBottom: "17px", paddingTop: '10px', position: 'relative'}}>
                        <div className="container" style={{position: 'relative'}}>
                            <div className="row">
                                <div className="col-lg-2 col-md-12 col-sm-12 col-xs-12 img-logo-container">
                                    <div className="navbar-wrap">
                                        <div className="logo d-flex justify-content-between">
                                            <Link href='/'><a className="navbar-brand img-logo" onClick={this.scrollTop}><Image src={logoMain} alt="" /></a></Link>
                                        </div>
                                        <div className="navbar-icons">
                                            <div className="searchbar-open">
                                            </div>
                                            <div className="mobile-menu d-flex ">
                                                <div className="top-search-bar m-0 d-block d-xl-none">
                                                </div>
                                                <Link href="/"><a className="hamburger d-block d-xl-none">
                                                    <span className="h-top" />
                                                    <span className="h-middle" />
                                                    <span className="h-bottom" />
                                                </a></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-10 col-md-10 col-sm-10 col-xs-10">
                                    <nav style={{minHeight: '78px'}} className="main-nav">
                                        <div className="navber-logo-sm">
                                            <Image src={secondLogo} alt="" className="img-fluid" />
                                        </div>
                                        <div className="navbar-icons-2 middle-header-container">
                                            <span onClick={() => this.setState((prevState) => ({searchModal: !prevState.searchModal}))} className="search-input-span" >
                                                <div className="searchbar-open">
                                                    <i className="flaticon-magnifier" />
                                                </div>
                                                Search courses, universities or schools
                                            </span>

                                            <div className="user-dropdown-icon">
                                                <i className="flaticon-user" />
                                                <span onClick={() => this.handleAccountModal} className='account-text'> Account </span>
                                                {/* <span onClick={() => this.setState((prevState) => ({accountModal: !prevState.accountModal}))} className='account-text'> Account </span> */}
                                                <div id="accoundModal" className={`account-dropdown ${this.state.accountModal ? "activeCard" : "cc"}`}>
                                                    <ul>
                                                        <li className="account-el">
                                                            <i className="bx bx-user-pin" />
                                                            <Link href="/" >Sign in</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bxs-user-account" />
                                                            <Link href="/" >My Account</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-extension" />
                                                            <Link href="/" >Settings</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-log-in-circle" />
                                                            <Link href="/" >Log out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sidebar-contact">
                                            <ul>
                                                <li className="sidebar-single-contact"><i className="bx bxs-phone" />
                                                    <Link href='/'>+1 763-227-5032</Link>
                                                </li>
                                                <li className="sidebar-single-contact"><i className="bx bxs-envelope" />
                                                    <Link href='/'>info@example.com</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            {/* Next Row */}
                            <div className="row bottom-menu-wrapper">
                                <div className="col-lg-12 col-md-10 col-sm-10 col-xs-10 bottom-menu-container">
                                    <div className="main-nav bottom-header-menu bottom-menu">


                                        <ul>
                                            <li className='sub-menu-title'>
                                                <Link href={"#"}>HOME</Link>
                                            </li>
                                            <li className='sub-menu-title'>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >About IIEC</Link >
                                            </li>
                                            <li className='sub-menu-title'>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/destination`} onClick={this.scrollTop} >IIEC HTMI</Link>
                                            </li>
                                            <li className='sub-menu-title'>
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/destination`} onClick={this.scrollTop} >IIEC MBBS</Link>
                                            </li>
                                            <li className="has-child-menu sub-menu-title">
                                                <Link  href={"#"}>SERVICES</Link>
                                                <i className="fl flaticon-plus">+</i>
                                                <ul className="sub-menu">
                                                    <li className='sub-menu-list sub-menu-title black-clr'>

                                                        <Link href={"#"} className="sub-item has-child-menu " style={{color: '#000000 !important'}} onClick={this.scrollTop}>EDUCATION</Link>
                                                        <ul className="sub-menu">
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Korea</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in USA</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Canada</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Australia</Link>
                                                            </li>
                                                            <li>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Malaysia</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Singapore</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in Europe</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in UK</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Study in China</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='sub-menu-list'>
                                                        <Link href={"#"} className="sub-item has-child-menu" onClick={this.scrollTop}>VISA</Link>
                                                        <ul className="sub-menu">
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Business VISA</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Dependent VISA</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>EB5 VISA</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>H1B Alternative</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Investor VISA</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Tourist VISA</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>VISA Refusal</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='sub-menu-list'>
                                                        <Link href="/" className="sub-item has-child-menu" onClick={this.scrollTop}>IMIGRATION</Link>
                                                        <ul className="sub-menu">
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>CANADA</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>AUSTRALIA</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>SOUTH AFRICA</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='sub-menu-list'>
                                                        <Link href={"#"} className="sub-item has-child-menu" onClick={this.scrollTop}>TRAINING</Link>
                                                        <ul className="sub-menu">
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>IELTS</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>TOEFL</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>PTE</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>GMAT</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>SAT</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>GRE</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className='sub-menu-list'>
                                                        <Link href={"#"} className="sub-item has-child-menu" onClick={this.scrollTop}>INTERNSHIP</Link>
                                                        <ul className="sub-menu">
                                                            <li className='sub-menu-list'>
                                                                <Link href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>USA J-1</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>USA J1 Summer Work</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>USA J1-Caretaker</Link>
                                                            </li>
                                                            <li className='sub-menu-list'>
                                                                <Link href={`${process.env.PUBLIC_URL}/package-sidebar`} className="sub-item" onClick={this.scrollTop}>Malaysia</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="sub-menu-list sub-menu-title">
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >EVENTS</Link >
                                            </li>
                                            <li className="sub-menu-list sub-menu-title">
                                                <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/about-us`} onClick={this.scrollTop} >BLOGS</Link >
                                            </li>
                                            <li className="has-child-menu sub-menu-title">
                                                <Link href={"#"}>INFORMATION</Link>
                                                <i className="fl flaticon-plus">+</i>
                                                <ul className="sub-menu">
                                                    <li className="sub-menu-list">
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/gallary`} className="sub-item" onClick={this.scrollTop}>gallary page</Link>
                                                    </li>
                                                    <li className="sub-menu-list">
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/guide`} className="sub-item" onClick={this.scrollTop}>guide page</Link>
                                                    </li>
                                                    <li className="sub-menu-list">
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/destination`} className="sub-item" onClick={this.scrollTop}>destination page</Link>
                                                    </li>
                                                    <li className="sub-menu-list">
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/404`} className="sub-item" onClick={this.scrollTop}>404 Page</Link>
                                                    </li>
                                                    <li className="sub-menu-list">
                                                        <Link activeClassName="active" href={`${process.env.PUBLIC_URL}/faq`} className="sub-item" onClick={this.scrollTop}>FAQ page</Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/* this is modal for search and account */}
                            {/* <div className="navbar-icons-2">
                                            <div className="searchbar-open">
                                                <i className="flaticon-magnifier" />
                                            </div>
                                            <div className="user-dropdown-icon">
                                                <i className="flaticon-user" />
                                                <div className="account-dropdown">
                                                    <ul>
                                                        <li className="account-el">
                                                            <i className="bx bx-user-pin" />
                                                            <Link href="/" >Sign in</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bxs-user-account" />
                                                            <Link href="/" >My Account</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-extension" />
                                                            <Link href="/" >Settings</Link>
                                                        </li>
                                                        <li className="account-el">
                                                            <i className="bx bx-log-in-circle" />
                                                            <Link href="/" >Log out</Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div> */}
                        </div>

                        <form>
                            <div onClick={() => this.setState((prevState) => ({searchModal: !prevState.searchModal}))} className={`main-searchbar ${this.state.searchModal ? "activeSearch" : ''}`}>
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
