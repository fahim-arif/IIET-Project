import React from 'react'
import Image from 'next/image'
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import askiiec from "../../../assets/images/happy-indian-man-over-creative-team-in-office-2021-08-26-22-50-52-utc.jpg"
import askiiec2 from "../../../assets/images/indian-man-wearing-headset-waving-hand-to-camera-s-2021-08-30-00-07-05-utc.jpg"
import askiiec3 from "../../../assets/images/stylish-indian-man-2021-09-01-09-39-51-utc.jpg"
import askiiec4 from "../../../assets/images/young-indian-man-with-laptop-looking-at-camera-2021-11-11-19-12-09-utc.JPG"
import playbutton from "../../../assets/images/Group 28.png";


const Askiiec = () => {

    const reviewOptions = {
        stagePadding: 10,
        items: 4,
        loop: true,
        margin: 15,
        smartSpeed: 1500,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: false
            },
            800: {
                items: 2,
                nav: false,
                dots: false,
            },
            1000: {
                items: 4,
                dots: true,
                nav: false,
                loop: true
            }
        }
    };
    return (
        <div className="review-area mt-120" >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="section-head pb-40">
                            <h2>ASK IIEC</h2>
                        </div>
                    </div>
                </div>
                <OwlCarousel className="review-slider owl-carousel"  {...reviewOptions}>

                    <div className="ask-card" >
                        <div className='shadow'>1</div>
                        <div className="ask-img"><Image src={askiiec} alt="" /></div>
                        <div className="ask-head">Answered by :<p style={{color: "whitesmoke"}}>Consultant name</p></div>
                        <div className="button-play">
                            <Image src={playbutton} alt="" className="ask-play" />
                        </div>
                        <div className="ask-ques">
                            <span>How iiec provide a better consultancy that others...</span>
                        </div>
                    </div>
                    <div className="ask-card" >
                        <div style={{height: '200px', borderRadius: '28px'}} className='shadow'>1</div>
                        <div className="ask-img"><Image src={askiiec2} alt="" /></div>
                        <div className="ask-head">Answered by :<p style={{color: "whitesmoke"}}>Consultant name</p></div>
                        <div className="button-play">
                            <Image src={playbutton} alt="" className="ask-play" />
                        </div>
                        <div className="ask-ques">
                            <span>How iiec provide a better consultancy that others...</span>
                        </div>
                    </div>
                    <div className="ask-card" >
                        <div className='shadow'>1</div>
                        <div className="ask-img"><Image src={askiiec3} alt="" /></div>
                        <div className="ask-head">Answered by :<p style={{color: "whitesmoke"}}>Consultant name</p></div>
                        <div className="button-play">
                            <Image src={playbutton} alt="" className="ask-play" />
                        </div>
                        <div className="ask-ques">
                            <span>How iiec provide a better consultancy that others...</span>
                        </div>
                    </div>
                    <div className="ask-card" >
                        <div className='shadow'>1</div>
                        <div className="ask-img"><Image src={askiiec4} alt="" /></div>
                        <div className="ask-head">Answered by :<p style={{color: "whitesmoke"}}>Consultant name</p></div>
                        <div className="button-play">
                            <Image src={playbutton} alt="" className="ask-play" />
                        </div>
                        <div className="ask-ques">
                            <span>How iiec provide a better consultancy that others...</span>
                        </div>
                    </div>
                    <div className="ask-card" >
                        <div className='shadow'>1</div>
                        <div className="ask-img"><Image src={askiiec} alt="" /></div>
                        <div className="ask-head">Answered by :<p style={{color: "whitesmoke"}}>Consultant name</p></div>
                        <div className="button-play">
                            <Image src={playbutton} alt="" className="ask-play" />
                        </div>
                        <div className="ask-ques">
                            <span>How iiec provide a better consultancy that others...</span>
                        </div>
                    </div>
                    <div className="ask-card" >
                        <div style={{height: '200px', borderRadius: '28px'}} className='shadow'>1</div>
                        <div className="ask-img"><Image src={askiiec2} alt="" /></div>
                        <div className="ask-head">Answered by :<p style={{color: "whitesmoke"}}>Consultant name</p></div>
                        <div className="button-play">
                            <Image src={playbutton} alt="" className="ask-play" />
                        </div>
                        <div className="ask-ques">
                            <span>How iiec provide a better consultancy that others...</span>
                        </div>
                    </div>
                    <div className="ask-card" >
                        <div className='shadow'>1</div>
                        <div className="ask-img"><Image src={askiiec3} alt="" /></div>
                        <div className="ask-head">Answered by :<p style={{color: "whitesmoke"}}>Consultant name</p></div>
                        <div className="button-play">
                            <Image src={playbutton} alt="" className="ask-play" />
                        </div>
                        <div className="ask-ques">
                            <span>How iiec provide a better consultancy that others...</span>
                        </div>
                    </div>
                    <div className="ask-card" >
                        <div className='shadow'>1</div>
                        <div className="ask-img"><Image src={askiiec4} alt="" /></div>
                        <div className="ask-head">Answered by :<p style={{color: "whitesmoke"}}>Consultant name</p></div>
                        <div className="button-play">
                            <Image src={playbutton} alt="" className="ask-play" />
                        </div>
                        <div className="ask-ques">
                            <span>How iiec provide a better consultancy that others...</span>
                        </div>
                    </div>
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Askiiec;