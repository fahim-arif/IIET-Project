import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./blogs.module.css";
import classes from "../../../styles/form.module.css";
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
const blogImg = [
  b_1,
  b_2,
  b_3,
  b_4,
  b_5,
  b_6,
  b_7,
  b_8,
  b_9,
  b_10,
  b_11,
  b_12,
  b_13,
  b_14,
];

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
      <div className={styles.blogContainer}>
        <div className="blog-wrapper pt-80" style={{ flex: 4 }}>
        <h2 style={{textAlign:"center"}}>All Blogs</h2>
          <div className="container">
            <div
              className="row"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-evenly",
              }}
            >
              {blogImg.map((img, idx) => (
                <div style={{ width: "370px" }} className="blog-card" key={idx}>
                  <div className="blog-img">
                    <Image src={img} alt="" className="img-fluid" />
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
              ))}
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="pagination mt-50">
                  <Link href={"/"}>
                    <i className="bx bx-chevron-left" />
                  </Link>
                  <Link href={"/"} className="active">
                    1
                  </Link>
                  <Link href={"/"}>2</Link>
                  <Link href={"/"}>3</Link>
                  <Link href={"/"}>4</Link>
                  <Link href={"/"}>
                    <i className="bx bx-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.formC}>
          <div className={styles.form}>
            <div className={styles.formheading}>
              <h3 style={{ fontWeight: 700 }}>
                Interested in studying abroad?
              </h3>
              <br />
              <h5>
                IIEC can help – fill in your details and we’ll call you back
              </h5>
            </div>
            <form className={styles.formContainer}>
              <div className={classes.inputgroup}>
                <input className={classes.input} required />
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>First name*</label>
              </div>

              <div className={classes.inputgroup}>
                <input className={classes.input} required />
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>Last name*</label>
              </div>

              <div className={classes.inputgroup}>
                <input className={classes.input} required />
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>Email address*</label>
              </div>

              <div className={classes.inputgroup}>
                <input className={classes.input} required />
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>Mobile number*</label>
              </div>

              <div className={classes.inputgroup}>
                <select
                  className={classes.input}
                  required
                  style={{ borderRadius: 0 }}
                >
                  <option value="AU">Australia</option>
                  <option value="CA">Canada</option>
                  <option value="NZ">New Zealand</option>
                  <option value="GB">United Kingdom</option>
                  <option value="US">United States</option>
                  <option value="IE">Ireland</option>
                </select>
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>
                  Your preferred study destination?*
                </label>
              </div>

              <div className={classes.inputgroup}>
                <select
                  className={classes.input}
                  required
                  style={{ borderRadius: 0 }}
                >
                  <option value="Dec-2021">Dec 2021</option>
                  <option value="Jan-2022">Jan 2022</option>
                  <option value="Feb-2022">Feb 2022</option>
                  <option value="Mar-2022">Mar 2022</option>
                  <option value="Apr-2022">Apr 2022</option>
                  <option value="May-2022">May 2022</option>
                  <option value="Jun-2022">Jun 2022</option>
                  <option value="Jul-2022">Jul 2022</option>
                  <option value="Aug-2022">Aug 2022</option>
                  <option value="Sep-2022">Sep 2022</option>
                  <option value="Oct-2022">Oct 2022</option>
                  <option value="Nov-2022">Nov 2022</option>
                  <option value="Dec-2022">Dec 2022</option>
                  <option value="Jan-2023">Jan 2023</option>
                  <option value="Feb-2023">Feb 2023</option>
                  <option value="Mar-2023">Mar 2023</option>
                  <option value="Apr-2023">Apr 2023</option>
                  <option value="May-2023">May 2023</option>
                  <option value="Jun-2023">Jun 2023</option>
                  <option value="Jul-2023">Jul 2023</option>
                  <option value="Aug-2023">Aug 2023</option>
                  <option value="Sep-2023">Sep 2023</option>
                  <option value="Oct-2023">Oct 2023</option>
                  <option value="Nov-2023">Nov 2023</option>
                  <option value="Dec-2023">Dec 2023</option>
                  <option value="Jan-2024">Jan 2024</option>
                  <option value="Feb-2024">Feb 2024</option>
                  <option value="Mar-2024">Mar 2024</option>
                  <option value="Apr-2024">Apr 2024</option>
                  <option value="May-2024">May 2024</option>
                  <option value="Jun-2024">Jun 2024</option>
                  <option value="Jul-2024">Jul 2024</option>
                  <option value="Aug-2024">Aug 2024</option>
                  <option value="Sep-2024">Sep 2024</option>
                  <option value="Oct-2024">Oct 2024</option>
                  <option value="Nov-2024">Nov 2024</option>
                  <option value="Dec-2024">Dec 2024</option>
                  <option value="Jan-2025">Jan 2025</option>
                  <option value="Feb-2025">Feb 2025</option>
                  <option value="Mar-2025">Mar 2025</option>
                  <option value="Apr-2025">Apr 2025</option>
                  <option value="May-2025">May 2025</option>
                  <option value="Jun-2025">Jun 2025</option>
                  <option value="Jul-2025">Jul 2025</option>
                  <option value="Aug-2025">Aug 2025</option>
                  <option value="Sep-2025">Sep 2025</option>
                  <option value="Oct-2025">Oct 2025</option>
                  <option value="Nov-2025">Nov 2025</option>
                  <option value="Dec-2025">Dec 2025</option>
                  <option value="Jan-2026">Jan 2026</option>
                  <option value="Feb-2026">Feb 2026</option>
                  <option value="Mar-2026">Mar 2026</option>
                  <option value="Apr-2026">Apr 2026</option>
                  <option value="May-2026">May 2026</option>
                  <option value="Jun-2026">Jun 2026</option>
                  <option value="Jul-2026">Jul 2026</option>
                  <option value="Aug-2026">Aug 2026</option>
                  <option value="Sep-2026">Sep 2026</option>
                  <option value="Oct-2026">Oct 2026</option>
                </select>
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>
                  When do you plan to study?*
                </label>
              </div>

              <div className={classes.inputgroup}>
                <select
                  className={classes.input}
                  required
                  style={{ borderRadius: 0 }}
                >
                  <option value="AU">Chennai</option>
                  <option value="CA">Delhi</option>
                  <option value="NZ">Mumbai</option>
                </select>
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>Nearest IIEC Office*</label>
              </div>

              <div className={classes.inputgroup}>
                <select
                  className={classes.input}
                  required
                  style={{ borderRadius: 0 }}
                >
                  <option value="In-person">In-person</option>
                  <option value="Virtual Counselling">
                    Virtual Counselling
                  </option>
                </select>
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>
                  Preferred mode of counselling*
                </label>
              </div>

              <div className={classes.inputgroup}>
                <select
                  className={classes.input}
                  required
                  style={{ borderRadius: 0 }}
                >
                  <option value="01">Self-Funded</option>
                  <option value="02">Parents</option>
                  <option value="03">Seeking Scholarship</option>
                  <option value="04">Seeking Government Scholarship</option>
                  <option value="05">Have Government Scholarship</option>
                  <option value="06">Bank Loan</option>
                  <option value="07">Other</option>
                  <option value="08">Employer Scholarship</option>
                </select>
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>
                  How would you fund your education?*
                </label>
              </div>

              <div className={classes.inputgroup}>
                <select
                  className={classes.input}
                  required
                  style={{ borderRadius: 0 }}
                >
                  <option value="DOCTORATE">Doctorate</option>
                  <option value="POSTGRADUATE">Postgraduate</option>
                  <option value="UNDERGRADUATE">Undergraduate</option>
                  <option value="UNIVERSITYPREPARATION">
                    University Preparation
                  </option>
                  <option value="VOCATIONAL">Vocational</option>
                  <option value="ENGLISHLANGUAGE">English Language</option>
                  <option value="SCHOOL">School</option>
                </select>
                <span className={classes.highlight}></span>
                <span className={classes.bar}></span>
                <label className={classes.label}>Preferred study level*</label>
              </div>
              <div>
              IDP will not share your details with others without your permission:
              </div>
              <div className={classes.checkbox}>
                <input type="checkbox" style={{margin:'5px'}} required />
                <label> I agree to IIEC's <Link href="/">terms</Link> and <Link href="/">privacy policy</Link></label>
                </div>
                <div className={classes.checkbox}>
                <input type="checkbox" style={{margin:'5px'}} required />
                <label> Please contact me by phone, email or SMS to assist with my enquiry</label>
                </div>
                <div className={classes.checkbox}>
                <input type="checkbox" style={{margin:'5px'}} required />
                <label>I would like to receive updates and offers from IIEC</label>
                </div>

              <div className={classes.inputgroup}>
                <button className={classes.button}>CONTACT US</button>
              </div>
            </form>
          </div>
          <div className={styles.form} style={{borderRadius:'15px'}} >
          <h3 className={styles.formheading} style={{borderTopLeftRadius:'8px',borderTopRightRadius:'8px',}}>Recent Posts:</h3>
              <div className={styles.formContainer} style={{borderRadius:"8px",borderTopLeftRadius:0,borderTopRightRadius:0,}}>
                  <Link href="/">
                  <div className={styles.filterContainer}>
                      <div className={styles.filtermonth}>November 2020</div>
                      <div><button className={styles.filterbu} >8</button></div>
                  </div>
                  </Link>
                  <Link href="/">
                  <div className={styles.filterContainer}>
                      <div className={styles.filtermonth}>December 2020</div>
                      <div><button className={styles.filterbu} >4</button></div>
                  </div>
                  </Link>
                  <Link href="/">
                  <div className={styles.filterContainer}>
                      <div className={styles.filtermonth}>January 2021</div>
                      <div><button className={styles.filterbu} >6</button></div>
                  </div>
                  </Link>
                  <Link href="/">
                  <div className={styles.filterContainer}>
                      <div className={styles.filtermonth}>February 2021</div>
                      <div><button className={styles.filterbu} >2</button></div>
                  </div>
                  </Link>

                  <div>
                      <Link href="/">
                          <div style={{padding:"16px", color:"#0d6efd", fontWeight:800, cursor:"pointer"}}>
                          View All...
                          </div>
                      </Link>
                  </div>
              </div>
          </div>
        </div>
      </div>
      {/* ===============  Blog wrapper area end =============== */}
    </>
  );
};

export default BlogComponent;
