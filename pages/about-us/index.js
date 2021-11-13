import React, {Component} from "react";
import dynamic from 'next/dynamic';
import BreadCrumb from "./../../components/pages/about-us/BreadCrumb";
// import AboutWrapper from "./../../components/pages/about-us/AboutWrapper";
// import GuideWrapper from "./../../components/pages/about-us/GuideWrapper";
// import Achievement from "./../../components/pages/about-us/Achievement";
// import AboutReview from "./../../components/pages/about-us/AboutReview";
// import AboutBlog from "./../../components/pages/about-us/AboutBlog";
import Headers from "../../components/common/headers";
import Footers from "../../components/common/footers";

const About = dynamic(
  () => import("../../components/pages/about-us/AboutUs"),
  // No need for SSR, when the module includes a library that only works in the
  // browser.
  {ssr: false}
);
class AboutUs extends Component {
  render() {
    return (
      <>

        <Headers />

        <About />
        <Footers />
        {/* <AboutWrapper /> */}

        {/* <GuideWrapper /> */}

        {/* <Achievement />
        <AboutReview /> */}

        {/* <AboutBlog />  */}

      </>
    );
  }
}

export default AboutUs;
