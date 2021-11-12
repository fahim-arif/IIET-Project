import React from 'react';

const Info = () => {
    return (
        <div className="container info-wrapper">
            <div className="row ">
                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated card-info-col" data-wow-duration="1500ms" data-wow-delay="0ms">
                    <div className="achievement-card mt-30">
                        <div className="achievement-icon">
                            <i className="flaticon-guide" />
                            <span><h5>STUDY ABROAD</h5></span>
                            <hr />
                        </div>
                        <h6 className="card-subtitle">We have over a decade of proven excellence in the field of International Student Education.</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="200ms">
                    <div className="achievement-card mt-30">
                        <div className="achievement-icon">
                            <i className="flaticon-trust" />
                            <span><h5>IMMIGRATION</h5></span>
                            <hr />
                        </div>
                        <h6 className="card-subtitle">Our expert team provides strategies that give a 100% visa & PR success rate track record!!</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="400ms">
                    <div className="achievement-card mt-30">
                        <div className="achievement-icon">
                            <i className="flaticon-experience" />
                            <span><h5>TRAINING</h5></span>
                            <hr />
                        </div>
                        <h6 className='card-subtitle'>We coach for qualifying exams like IELTS & GRE and foreign languages etc.</h6>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6 wow fadeInLeft animated" data-wow-duration="1500ms" data-wow-delay="600ms">
                    <div style={{minHeight:'254px'}}  className="achievement-card mt-30">
                        <div className="achievement-icon">
                            <i className="flaticon-traveller" />
                            <span><h5>VISA GUIDE</h5></span>
                            <hr />
                        </div>
                        <h6 className="card-subtitle">We provide expert guidance for all the categories of visa.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info;