import React, {Component} from "react";
import Link from 'next/link'
import Image from 'next/image'

//Load Image
import ModalVideoContain from './ModalVideoContain';
import package2Img from "../../../assets/images/photo-1604177091072-b7b677a077f6.jpeg"
import package3Img from "../../../assets/images/istockphoto-1222372717-612x612.jpg"
import package4Img from "../../../assets/images/istockphoto-1179017978-612x612.jpg"

class Packages extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <>
        {/* ===============  Package  area start =============== */}
        <div className="package-area pt-120">
          <div className="container">

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="section-head pb-45">
                  <h2>Our Students Share their Stories</h2>
                </div>
              </div>
            </div>

            <div className="row">

              {/* <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  /> */}

              {/* <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                 <div className="package-card">
                   <div className="package-thumb">
                     <Link href={`${process.env.PUBLIC_URL}/package-details`}>
                       <Image src={package1Img} alt="" className="img-fluid" />
                     </Link>
                   </div>
                   <div className="package-details">
                    //  <div className="package-info">
                       <h5><span>STUDENT NAME</span></h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                       <Link href={`${process.env.PUBLIC_URL}/package-details`}>CANADA</Link>
                     </h3>
                   </div>
                 </div>
               </div> */}

              <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="package-card">
                  <div className="package-thumb">
                    <Link href={`${process.env.PUBLIC_URL}/package-details`}>
                      <Image src={package2Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    {/* <div className="package-info">
                       <h5><span>$280</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div> */}
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href={`${process.env.PUBLIC_URL}/package-details`}>Prasanna Swaminathan, US</Link>
                    </h3>
                    {/* <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                <div className="package-card">
                  <div className="package-thumb">
                    <Link href={`${process.env.PUBLIC_URL}/package-details`}>
                      <Image src={package3Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    {/* <div className="package-info">
                       <h5><span>$120</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div> */}
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href={`${process.env.PUBLIC_URL}/package-details`}>U.Kartik, Canada</Link>
                    </h3>
                    {/* <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                <div className="package-card">
                  <div className="package-thumb">
                    <Link href={`${process.env.PUBLIC_URL}/package-details`}>
                      <Image src={package4Img} alt="" className="img-fluid" />
                    </Link>
                  </div>
                  <div className="package-details">
                    {/* <div className="package-info">
                       <h5><span>$300</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div> */}
                    <h3>
                      <i className="flaticon-arrival" />
                      <Link href={`${process.env.PUBLIC_URL}/package-details`}>Rishi Teja, UK</Link>
                    </h3>
                    {/* <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ===============  Package  area end =============== */}
      </>
    );
  }
}

export default Packages;