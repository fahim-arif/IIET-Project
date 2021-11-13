import React from 'react'
import Image from 'next/image'
import OwlCarousel from 'react-owl-carousel';
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import askiiec from "../../../assets/images/askiiec/ask-iiec.png"
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
                </OwlCarousel>
            </div>
        </div>
    )
}

export default Askiiec;