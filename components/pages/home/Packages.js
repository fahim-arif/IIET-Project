import React, { Component } from "react";
import Link from 'next/link'

//Load Image
import ModalVideoContain from './ModalVideoContain';
// import package2Img from "../../../assets/images/package/p-2.png"
// import package3Img from "../../../assets/images/package/p-3.png"
// import package4Img from "../../../assets/images/package/p-4.png"
// import package5Img from "../../../assets/images/package/p-5.png"
// import package6Img from "../../../assets/images/package/p-6.png"

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

               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />
               <ModalVideoContain id={"5Km2kZcBGIM"} name={"STUDENT NAME"} place={"CANADA"}  />

               {/* <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
               <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                 <div className="package-card">
                   <div className="package-thumb">
                     <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                       <img src={package1Img} alt="" className="img-fluid" />
                     </Link>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       <h5><span>STUDENT NAME</span></h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>CANADA</Link>
                     </h3>
                   </div>
                 </div>
               </div> */}

               {/* <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                 <div className="package-card">
                   <div className="package-thumb">
                     <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                       <img src={package2Img} alt="" className="img-fluid" />
                     </Link>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       <h5><span>$280</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>Lake Garda, Italy</Link>
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                 <div className="package-card">
                   <div className="package-thumb">
                     <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                       <img src={package3Img} alt="" className="img-fluid" />
                     </Link>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       <h5><span>$120</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>Mount Dtna, Italyr</Link>
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                 <div className="package-card">
                   <div className="package-thumb">
                     <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                       <img src={package4Img} alt="" className="img-fluid" />
                     </Link>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       <h5><span>$300</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>Amalfi Costa, Italy</Link>
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="300ms">
                 <div className="package-card">
                   <div className="package-thumb">
                     <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                       <img src={package5Img} alt="" className="img-fluid" />
                     </Link>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       <h5><span>$240</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>French Rivira, France</Link>
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                 <div className="package-card">
                   <div className="package-thumb">
                     <Link to={`${process.env.PUBLIC_URL}/package-details`}>
                       <img src={package6Img} alt="" className="img-fluid" />
                     </Link>
                   </div>
                   <div className="package-details">
                     <div className="package-info">
                       <h5><span>$145</span>/Per Person</h5>
                       <h5><i className="flaticon-calendar" />5 Days/6 night</h5>
                     </div>
                     <h3>
                       <i className="flaticon-arrival" />
                       <Link to={`${process.env.PUBLIC_URL}/package-details`}>Lake Geneva, France</Link>
                     </h3>
                     <div className="package-rating">
                       <strong><i className="bx bxs-star" /><span>8K+</span> Rating</strong>
                     </div>
                   </div>
                 </div>
               </div> */}

             </div>
           </div>
         </div>
         {/* ===============  Package  area end =============== */}
       </>
    );
  }
}

export default Packages;