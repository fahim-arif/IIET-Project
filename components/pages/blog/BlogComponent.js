import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

import b_1 from "../../../assets/images/blog/b-1.png";
import b_2 from "../../../assets/images/blog/b-2.png";
import b_3 from "../../../assets/images/blog/b-3.png";
import b_4 from "../../../assets/images/blog/b-4.png";
import b_5 from "../../../assets/images/blog/b-5.png";
import b_6 from "../../../assets/images/blog/b-6.png";
import b_7 from "../../../assets/images/blog/b-7.png";
import b_8 from "../../../assets/images/blog/b-8.png";
import b_9 from "../../../assets/images/blog/b-9.png";
import b_10 from "../../../assets/images/blog/b-10.png";
import b_11 from "../../../assets/images/blog/b-11.png";
import b_12 from "../../../assets/images/blog/b-12.png";
import b_13 from "../../../assets/images/blog/b-13.png";
import b_14 from "../../../assets/images/blog/b-14.png";
const blogImg =[ b_1,b_2,b_3,b_4,b_5,b_6,b_7,b_8,b_9,b_10,b_11,b_12,b_13,b_14]

const BlogComponent = () => {
    return (
        <>
            {/* ===============  breadcrumb area start =============== */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                            <div className="breadcrumb-wrap">
                                <h2>Blog</h2>
                                <ul className="breadcrumb-links">
                                    <li>
                                        <Link href={`/`}>Home</Link>
                                        <i className="bx bx-chevron-right" />
                                    </li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  breadcrumb area end =============== */}
            {/* ===============  Blog wrapper area start =============== */}
            <div className="blog-wrapper pt-90">
                <div className="container">
                    <div className="row" style={{
                        display:"flex",
                        flexDirection:"row",
                        flexWrap:"wrap",
                        justifyContent:"space-evenly"
                    }}>
                    {
                        blogImg.map((img,idx) => (
                            <div style={{width: '370px'}} className="blog-card" key={idx}>
                                <div className="blog-img">
                                    <Image src={img} alt="" className="img-fluid" />
                                    <div className="blog-date"><i className="flaticon-calendar" /> 1 April, 2021</div>
                                </div>
                                <div className="blog-details">
                                    <div className="blog-info">
                                        <Link href="/"><a className="blog-writer"><i className="flaticon-user" />Dina Jems</a></Link>
                                        <Link href="/"><a className="blog-comment"><i className="flaticon-comment" /><span>(3)</span>Comment</a></Link>
                                    </div>
                                    <Link href={`${process.env.PUBLIC_URL}/blog-details`}><a className="blog-title">Donec egestas orci viverra
                                        fermentum risus.</a></Link>
                                    <div className="blog-btn">
                                        <Link href={`${process.env.PUBLIC_URL}/blog-details`}><a className="btn-common-sm">Read More</a></Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pagination mt-50">
                                <Link href={"/"}><i className="bx bx-chevron-left" /></Link>
                                <Link href={"/"} className="active">1</Link>
                                <Link href={"/"} >2</Link>
                                <Link href={"/"} >3</Link>
                                <Link href={"/"} >4</Link>
                                <Link href={"/"}><i className="bx bx-chevron-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ===============  Blog wrapper area end =============== */}
        </>
    );
}

export default BlogComponent;
