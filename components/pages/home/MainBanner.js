import React, {Component} from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from 'next/link'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class MainBanner extends Component {

    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date(),
        };
    }

    changeDatepickerHandeller = (date) => {
        this.setState({startDate: date});
    }

    render() {

        const mainBannerOptions = {
            items: 1,
            loop: true,
            margin: 0,
            smartSpeed: 700,
            dots: false,
            nav: true,
            autoplay: 4000,
            autoplayTimeout: 4000,
            autoplayHoverPause: true,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut',
            navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 1,
                    nav: false,
                    dost: false,
                },
                1000: {
                    items: 1,
                    nav: true,
                    loop: true
                },
            }
        };

        const startDate = this.state.startDate;
        return (
            <>
                {/* ===============  Main banner area start =============== */}
                <div className="main-banner">
                    <OwlCarousel className="banner-slider owl-carousel"  {...mainBannerOptions}>
                        <div style={{background: '#00000'}} className="slider-item slider-item-1 background-show">
                            <div className="container">
                                <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className='hero-main-title'>OPENING A WORLD OF OPPORTUNITIES</div>
                                    <div className='hero-sub-title'>Get Online Counselling from Expert</div>
                                    <div className="banner-btn">
                                        <Link href={`${process.env.PUBLIC_URL}/package`}><a className="btn-common">Register Now!</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item slider-item-2">
                            <div className="container">
                                <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className='hero-main-title'>STUDY ABROAD</div>
                                    <div className='hero-sub-title'>UK, USA, AUSTRALIA, CANADA, NEW ZELAND, EUROPE & MORE</div>
                                    <div className="banner-btn">
                                        <Link href={`${process.env.PUBLIC_URL}/package`}><a className="btn-common">Find Scholarship</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="slider-item slider-item-3">
                            <div className="container">
                                <div className="slider-content wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                    <div className='hero-main-title'>EXPERT GUIDANCE</div>
                                    <div className='hero-sub-title'>LET OUR EXPERTS HELP YOU FIND THE BEST OPTIONS</div>
                                    <div className="banner-btn">
                                        <Link href={`${process.env.PUBLIC_URL}/package`}><a className="btn-common">Learn More</a></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                {/* ===============  Main banner area end =============== */}

                {/* ===============  findfrom area start ============= */}
                {/* <div className="find-form">
                    <div className="container">
                        <form className="findfrom-wrapper">
                            <div className="row">
                                <div className="col-lg-3">
                                    <input type="text" name="whereto" placeholder="Where To..." />
                                </div>
                                <div className="col-lg-3">
                                    <div className="calendar-input">
                                        <DatePicker selected={startDate} onChange={(date) => this.changeDatepickerHandeller(date)} className="input-field check-in" placeholder="dd-mm-yy" />
                                        <i className="flaticon-calendar" />
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="custom-select">
                                        <select>
                                            <option value={0}>Travel Type</option>
                                            <option value={1}>City Tours</option>
                                            <option value={2}>Vacation Tours</option>
                                            <option value={3}>Couple Tours </option>
                                            <option value={4}>Adventure Tours</option>
                                            <option value={5}>Group Tours</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="find-btn">
                                        <Link href={`/`}><a className="btn-second"><i className="bx bx-search-alt" /> Find now</a></Link>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div> */}

                {/* ===============  findfrom area end =============== */}
            </>
        );
    }
}

export default MainBanner;
