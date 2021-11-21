import React, {Component} from "react";
import Image from 'next/image'
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

//Import Images
// import review1Img from "../../../assets/images/reviewer/reviewer-1.png"
import review1Img from "../../../assets/images/83bdfe36-45f9-4021-97d4-cae42b276f43.jpeg"
import review2Img from "../../../assets/images/0699ab75-f9cf-4034-9534-4b6b9d1524d6.jpeg"
import review3Img from "../../../assets/images/264937f5-55c2-4cda-b5f5-2ccd5869aad1.jpeg"
import review4Img from "../../../assets/images/d5c80ecd-3fb8-4d7d-bdef-c91e04d651d2.jpeg"
import review5Img from "../../../assets/images/ee81dedb-14b0-4686-a048-27b16888f4f5.jpeg"
import review6Img from "../../../assets/images/ee81dedb-14b0-4686-a048-27b16888f4f5 (1).jpeg"

class Review extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        const reviewOptions = {
            stagePadding: 10,
            items: 3,
            loop: true,
            margin: 15,
            smartSpeed: 1500,
            autoplay: false,
            dots: true,
            nav: true,
            navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                800: {
                    items: 2,
                    nav: false,
                    dots: false,
                },
                1000: {
                    items: 3,
                    dots: true,
                    nav: false,
                    loop: false
                }
            }
        };

        return (
            <>
                {/* =============== Review area start =============== */}
                <div className="review-area mt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head pb-40">
                                    <h2>What Our Students Say About Us</h2>
                                </div>
                            </div>
                        </div>
                        <OwlCarousel className="review-slider owl-carousel"  {...reviewOptions}>
                            <div className="review-card ">
                                <div style={{borderRadius:'15px!important'}} className="reviewer-img home-review-img">
                                    <Image src={review1Img} alt="" className="img-fluid" />
                                </div>
                                <div className="reviewer-info">
                                    <h3>Naveen From</h3>
                                    <h5>University Student, US</h5>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="reviewer-img home-review-img">
                                    <Image src={review2Img} alt="" className="img-fluid" />
                                </div>
                                <div className="reviewer-info">
                                    <h3>Karen From</h3>
                                    <h5>Post Graduate, Canada</h5>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="reviewer-img home-review-img">
                                    <Image src={review3Img} alt="" className="img-fluid" />
                                </div>
                                <div className="reviewer-info">
                                    <h3>Hameed From</h3>
                                    <h5>PhD, Australia</h5>
                                </div>
                            </div>
                            <div className="review-card ">
                                <div className="reviewer-img home-review-img">
                                    <Image src={review4Img} alt="" className="img-fluid" />
                                </div>
                                <div className="reviewer-info">
                                    <h3>Dina Jems</h3>
                                    <h5>Traveller</h5>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="reviewer-img home-review-img">
                                    <Image src={review5Img} alt="" className="img-fluid" />
                                </div>
                                <div className="reviewer-info">
                                    <h3>Jahid Hassan</h3>
                                    <h5>Traveller</h5>
                                </div>
                            </div>
                            <div className="review-card">
                                <div className="reviewer-img home-review-img">
                                    <Image src={review6Img} alt="" className="img-fluid" />
                                </div>
                                <div className="reviewer-info">
                                    <h3>Shwan Pull</h3>
                                    <h5>Traveller</h5>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                {/* =============== Review area end =============== */}
            </>
        );
    }
}

export default Review;
