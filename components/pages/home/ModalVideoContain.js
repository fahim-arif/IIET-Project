import React, {useState} from 'react';
import Link from 'next/link'
import ModalVideo from 'react-modal-video';
import playbutton from "../../../assets/images/video/video-play-button.png";
import pausebutton from "../../../assets/images/video/video-pause-button.png";
import package1Img from "../../../assets/images/package/p-1.png"

function ModalVideoContain(props) {
    const [isOpen, setOpen] = useState(false);
    return (
        <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={props.id && props.id} onClose={() => setOpen(false)} />
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp animated" data-wow-duration="1500ms" data-wow-delay="0ms">
                <div className="package-card">
                    {isOpen ? (<img onClick={() => setOpen(false)} src={pausebutton} alt="" className="video-play" />) :
                        (<img onClick={() => setOpen(true)} src={playbutton} alt="" className="video-play" />)}
                    <div className="package-thumb">
                        <img src={package1Img} alt="" className="img-fluid" />
                    </div>
                    <div className="package-details">
                        <div className="package-info">
                            <h5><span>{props.name && props.name.toUpperCase()}</span></h5>
                        </div>
                        <h3>
                            <i className="flaticon-arrival" />
                            <Link href={`${process.env.PUBLIC_URL}/city/${props.place}`}>{props.place && props.place.toUpperCase()}</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default ModalVideoContain;