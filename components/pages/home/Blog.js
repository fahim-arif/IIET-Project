import React, { Component } from "react";
import Image from "next/image";
import Link from "next/link";

//Import Images
import blog1Img from "../../../assets/images/blog/b-1.png";
import blog2Img from "../../../assets/images/blog/b-2.png";
import blog3Img from "../../../assets/images/blog/b-3.png";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        {/* ===============  Blog area start =============== */}
        <div className="blog-area pt-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-30">
                  <h2>Stay Updated And new post our Blog</h2>
                </div>
              </div>
            </div>
            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
                <div style={{ width: "370px" }} className="blog-card" >
                  <div className="blog-img">
                    <Image src={blog1Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 April, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link href="/">
                        <a className="blog-writer">
                          <i className="flaticon-user" />
                          Dina Jems
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="blog-comment">
                          <i className="flaticon-comment" />
                          <span>(3)</span>Comment
                        </a>
                      </Link>
                    </div>
                    <Link href={`${process.env.PUBLIC_URL}/blog-details`}>
                      <a className="blog-title">
                        Donec egestas orci viverra fermentum risus.
                      </a>
                    </Link>
                    <div className="blog-btn">
                      <Link href={`${process.env.PUBLIC_URL}/blog-details`}>
                        <a className="btn-common-sm">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div style={{ width: "370px" }} className="blog-card" >
                  <div className="blog-img">
                    <Image src={blog2Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 April, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link href="/">
                        <a className="blog-writer">
                          <i className="flaticon-user" />
                          Dina Jems
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="blog-comment">
                          <i className="flaticon-comment" />
                          <span>(3)</span>Comment
                        </a>
                      </Link>
                    </div>
                    <Link href={`${process.env.PUBLIC_URL}/blog-details`}>
                      <a className="blog-title">
                        Donec egestas orci viverra fermentum risus.
                      </a>
                    </Link>
                    <div className="blog-btn">
                      <Link href={`${process.env.PUBLIC_URL}/blog-details`}>
                        <a className="btn-common-sm">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
                <div style={{ width: "370px" }} className="blog-card">
                  <div className="blog-img">
                    <Image src={blog3Img} alt="" className="img-fluid" />
                    <div className="blog-date">
                      <i className="flaticon-calendar" /> 1 April, 2021
                    </div>
                  </div>
                  <div className="blog-details">
                    <div className="blog-info">
                      <Link href="/">
                        <a className="blog-writer">
                          <i className="flaticon-user" />
                          Dina Jems
                        </a>
                      </Link>
                      <Link href="/">
                        <a className="blog-comment">
                          <i className="flaticon-comment" />
                          <span>(3)</span>Comment
                        </a>
                      </Link>
                    </div>
                    <Link href={`${process.env.PUBLIC_URL}/blog-details`}>
                      <a className="blog-title">
                        Donec egestas orci viverra fermentum risus.
                      </a>
                    </Link>
                    <div className="blog-btn">
                      <Link href={`${process.env.PUBLIC_URL}/blog-details`}>
                        <a className="btn-common-sm">Read More</a>
                      </Link>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
        {/* ===============  Blog area end =============== */}
      </>
    );
  }
}

export default Blog;
