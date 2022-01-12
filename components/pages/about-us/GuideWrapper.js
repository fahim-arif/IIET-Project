import React, {Component} from "react";
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import guide1Img from "../../../assets/images/guide/guide-1.png"
import guide2Img from "../../../assets/images/guide/guide-2.png"
import guide3Img from "../../../assets/images/guide/guide-3.png"
import guide4Img from "../../../assets/images/guide/guide-4.png"
import Link from "next/link";
import Image from 'next/image'

class GuideWrapper extends Component {
    render() {
        const guideWrapper = {
            items: 3,
            loop: true,
            margin: 25,
            smartSpeed: 1500,
            autoplay: false,
            dots: false,
            nav: true,
            navText: ["<i class='bx bx-chevron-left' ></i>", "<i class='bx bx-chevron-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    nav: false,
                    dots: false
                },
                600: {
                    items: 2,
                    nav: false,
                    dots: false,
                },
                1000: {
                    items: 3,
                    dots: false,
                    nav: true,
                    loop: true
                }
            }
        };
        return (
            <>
                {/* ===============  Guide wrapper start =============== */}
                <div className="guide-wrapper mt-120">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="section-head head-left pb-40">
                                    <h2>Our Founding Members</h2>
                                </div>
                            </div>
                        </div>

                        <OwlCarousel className="guide-slider owl-carousel"  {...guideWrapper}>
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <Image src={guide1Img} alt="" className="img-fluid" />
                                    <div className="guide-info">
                                        <strong>Sakura Chen</strong>
                                        <p>CEO</p>
                                        <ul className="guide-links">
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
                            </div>
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <Image src={guide3Img} alt="" className="img-fluid" />
                                    <div className="guide-info">
                                        <strong>Sakura Chen</strong>
                                        <p>MD</p>
                                        <ul className="guide-links">
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
                            </div>
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <Image src={guide4Img} alt="" className="img-fluid" />
                                    <div className="guide-info">
                                        <strong>Sakura Chen</strong>
                                        <p>CTO</p>
                                        <ul className="guide-links">
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
                            </div>
                            <div className="guide-card">
                                <div className="guide-thumb">
                                    <Image src={guide2Img} alt="" className="img-fluid" />
                                    <div className="guide-info">
                                        <strong>Sakura Chen</strong>
                                        <p>CFO</p>
                                        <ul className="guide-links">
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
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
                {/* ===============  Guide wrapper end =============== */}
            </>
        );
    }
}

export default GuideWrapper;
