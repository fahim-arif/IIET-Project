import React from 'react';
import partner1 from "../../../assets/images/university/1.jpg";
import partner2 from "../../../assets/images/university/2.jpg";
import partner3 from "../../../assets/images/university/3.jpg";
import partner4 from "../../../assets/images/university/4.jpg";
import partner5 from "../../../assets/images/university/5.jpg";
import Image from "next/image"

function Partners() {
    return (
        <div className="mt-120 p-80" style={{backgroundColor:"#f2f3f7"}}>
        <div className="container">
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12">
                    <div className="section-head pb-60">
                        <h2>Our Partners</h2>
                    </div>
                </div>
            </div>
            <div className="partners">
                    <div className="partner-img">
                        <Image src={partner1} />
                    </div>
                    <div className="partner-img">
                        <Image src={partner2} />
                    </div>
                    <div className="partner-img">
                        <Image src={partner3} />
                    </div>
                    <div className="partner-img">
                        <Image src={partner4} />
                    </div>
                    <div className="partner-img">
                        <Image src={partner5} />
                    </div>
            </div>
        </div>
    </div>
    )
}

export default Partners;