import React, { Component } from "react";
import BreadCrumb from "./BreadCrumb";
import abt from "../../../assets/images/about/about-iiec.jpg";
import styles from "../../../styles/services.module.css";
import FeedForm from "../feedback-form/FeedForm";
import Image from "next/image";
import one from "../../../assets/images/about/proessional.jpg";
import two from "../../../assets/images/about/enterpruteaner.jpg";
import three from "../../../assets/images/about/trustworthy.jpg";
import four from "../../../assets/images/about/approchable.jpg";
import five from "../../../assets/images/about/caring.jpg";
// import AboutWrapper from "./AboutWrapper";
// import GuideWrapper from "./GuideWrapper";
// import Achievement from "./Achievement";
// import AboutReview from "./AboutReview";
// import AboutBlog from "./AboutBlog";

class AboutUs extends Component {
  render() {
    return (
      <>
        <BreadCrumb />
        <div className={styles.container}>
          <div className={styles.info}>
            <div className={styles.image}>
              <Image src={abt} layout="responsive" />
            </div>
            <div className={styles.headinfo}>
              <h2 className={styles.heading}>WHO WE ARE:</h2>
              <p>
                IIEC is an ISO 9001:2015 compliant International Education and
                Immigration Consultancy comprising of a vibrant team of
                energetic, knowledgeable and a fast paced group of skilled
                counselors who have put wings to the aspirations of over 9000
                students and migrants to find their rightful place in the world.
                We take pride in being Strategic Partners of <b>IDP</b> and the{" "}
                <b>British Council</b> for the IELTS program and boast of having
                one of the most comprehensive In House Training facility backed
                by a huge network of resources for a wide spectrum of qualifying
                exams like the <b>TOEFL, PTE, SAT, GRE, GMAT</b> and <b>ELT</b>{" "}
                to name a few. Our
                <b> ONE STOP Immigration</b> program has helped people from a
                diverse range of industries and occupations to migrate and to
                live in a host of countries all around the world with great ease
                and comfort. IIEC is an Associate of a registered and very
                tenured member of <b>CSIC / CCIC / CAPIC</b> who is a Canadian
                Government-Authorized Study and Immigration Consultant based in
                Canada. We are one of the most sought after Immigration Experts
                in India to offer guaranteed success to{" "}
                <b>Permanent Residency </b>
                through <b>EEP, PNP</b> and the{" "}
                <b> Skilled Migrant Category Visa.</b> The expertise at IIEC
                extends to all the spheres of Immigration and we specialize in{" "}
                <b>
                  Dependent Visa, Investor Visa, Business Visa, J1, Internship
                  Programs
                </b>{" "}
                and primarily the <b>Student Visa</b> to name just a few.{" "}
              </p>
              <br />
              <h5>
                <i>
                  <b>
                    {" "}
                    WALK INTO OUR OFFICES TODAY, YOU WILL FLY OUT TO A WORLD OF
                    OPPORTUNITIES !!
                  </b>
                </i>
              </h5>
              {/* <br /> */}
            </div>
            <div className={styles.headinfo2} style={{ justifySelf: "left" }}>
              <h3 className={styles.heading2}>Why IIEC ?</h3>
              <h5>
                <b>OUR CORE VALUES</b>
              </h5>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <div className={styles.ielts}>
                  <div style={{ maxWidth: "250px" }}>
                    <Image src={one} />
                  </div>
                  <div
                    className={styles.ieltimgtext}
                    style={{ textAlign: "center" }}
                  >
                    PROFESSIONAL
                  </div>
                </div>
                <div className={styles.ielts}>
                  <div style={{ maxWidth: "250px" }}>
                    <Image src={two} />
                  </div>
                  <div
                    className={styles.ieltimgtext}
                    style={{ textAlign: "center" }}
                  >
                    KNOWLEDGEABLE
                  </div>
                </div>
                <div className={styles.ielts}>
                  <div style={{ maxWidth: "250px" }}>
                    <Image src={three} />
                  </div>
                  <div
                    className={styles.ieltimgtext}
                    style={{ textAlign: "center" }}
                  >
                    DEDICATED
                  </div>
                </div>
                <div className={styles.ielts}>
                  <div style={{ maxWidth: "250px" }}>
                    <Image src={four} />
                  </div>
                  <div
                    className={styles.ieltimgtext}
                    style={{ textAlign: "center" }}
                  >
                    APPROACHABLE
                  </div>
                </div>
                <div className={styles.ielts}>
                  <div style={{ maxWidth: "250px" }}>
                    <Image src={five} />
                  </div>
                  <div
                    className={styles.ieltimgtext}
                    style={{ textAlign: "center" }}
                  >
                    CARING
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.headinfo2}>
              <h3 className={styles.heading2}>Why IIEC?</h3>
              <ul>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    borderBottom: "1.5px dashed chocolate",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10003;</b>
                  </h3>
                  <p>
                    IIEC has assisted hundreds of students and families to find
                    the right university, college and boarding school in the
                    United States, Canada, the United Kingdom, Australia and
                    others.
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    borderBottom: "1.5px dashed chocolate",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10003;</b>
                  </h3>
                  <p>
                    IIEC has strategic alliances with some of the best academic
                    institutions in all the continents in the world and our
                    staff have a wealth of experience in identifying the most
                    suitable academic institution for you.
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    borderBottom: "1.5px dashed chocolate",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10003;</b>
                  </h3>
                  <p>
                    Our long standing excellence in educational placements based
                    on best practices has made us the leader in International
                    Student Education.
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                    borderBottom: "1.5px dashed chocolate",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10003;</b>
                  </h3>
                  <p>
                    Our staff with their professional proficiency and friendly
                    manner will help you you in making the best choice of a
                    university / academic institution. You can experience our
                    cutting edge efficiency as we simplify and make the
                    application process a breeze while offering you up to date
                    and custom made solutions for planning your travel, health &
                    travel insurance, financial arrangements and accommodation
                    in your destination country.
                  </p>
                </li>
              </ul>
            </div>
            <div className={styles.headinfo2}>
              <h3 className={styles.heading2}>OUR SERVICES INCLUDE:</h3>
              <ul>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    <b>Professional Counseling</b> based on years of experience
                    of International Student Programs.
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    Student focused advice on{" "}
                    <b>selecting courses, colleges and universities.</b>
                  </p>
                </li>
                <p>
                  Top quality coaching and training in IELTS, TOEFL, PTE, SAT,
                  GRE, GMAT Etc. with exceptional in house facilities and
                  training by industry professionals of repute and high regard.
                </p>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    <b>Guaranteed</b> Admission in the best courses in Top
                    Colleges and Universities in several countries.
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    <b>Most thorough and perfect Visa Guidance</b> and filing
                    process resulting in a{" "}
                    <b>consistent track record of successful applications.</b>
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    <b>Finding accommodation</b> upon reaching your destination.
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    <b>
                      Excellent job placements through our tie up with top HR
                      firms.
                    </b>
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    Very comprehensive services for getting{" "}
                    <b>guaranteed bank loans.</b>
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    <b>Immigration & Re-Settlement Services</b> to many
                    delightful destinations around the world.
                  </p>
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  <h3 style={{ marginRight: "5px" }}>
                    <b>&#10173;</b>
                  </h3>
                  <p>
                    Processing{" "}
                    <b>Work Permits, Permanent Residency through EEP,</b>
                    PNP and other visas leading to the best lifestyle and jobs
                    in the world.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.enquireyBox}>
              <h5 className={styles.enquireyTitle}>
                Where do YOU want to study?
              </h5>
              <p className={styles.enquireyText}>
                IIEC is the one stop solution for all your International Study
                needs..
              </p>
              <button className={styles.enquireybu}>Enquire Now</button>
            </div>
            <div
              className={styles.headinfo2}
              style={{
                margin: "20px",
                padding: window.innerWidth<800 ? 0: "15px",
                paddingRight: 0,
                paddingTop: 0,
              }}
            >
              <h3 className={styles.heading2}>What We Offer:</h3>
              <ul style={{ display: "flex", flexDirection: "column" }}>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Application forms, document check lists,
                  prospectus etc. for Colleges and Universities the world over.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Comprehensive Coaching and Training for IELTS,
                  TOEFL, PTE, SAT, GMAT, GRE etc. We also offer excellent
                  training in foreign languages like French, German, Japanese
                  and Russian etc.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Guidance on short listing courses and choosing
                  the best Universities and Colleges.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Expert Advice on creating a SOP and acquiring
                  Appreciation Letters. We provide sample formats for Essays and
                  Recommendation Letters.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Thorough guidance on providing correct Bank
                  Statements, Financial Documentation etc.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Comprehensive One Stop Travel Assistance
                  including Ticketing, Forex, Insurance, Concessional fares,
                  additional luggage allowance etc.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Briefing and assistance on finding
                  accommodation post arrival at the destination.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Guidance and advice followed by complete
                  documentation and processing for all categories of Visa
                  applications.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Pre-departure briefing about the destination.
                </li>
                <li
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <b>&#8699; </b> Several Value Added Services Post Arrival
                  including local banking, travelling, local communities etc.
                </li>
              </ul>
            </div>
            <FeedForm />
          </div>
        </div>
        {/* <AboutWrapper />
        <GuideWrapper /> */}
        {/* <Achievement />
        <AboutReview />
        <AboutBlog /> */}
      </>
    );
  }
}

export default AboutUs;
