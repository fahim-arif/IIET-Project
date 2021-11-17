import React from "react";
import styles from "../../../styles/services.module.css";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import ielt from "../../../assets/images/services/ielts.jpg";
import listen from "../../../assets/images/services/listening.jpg";
import read from "../../../assets/images/services/reading.jpg";
import write from "../../../assets/images/services/writing.jpg";
import Image from "next/image";

function IeltsData() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={ielt} layout="responsive" />
        </div>
        <div className={styles.headinfo}>
          <h2 className={styles.heading}>WHY IIEC?</h2>
          <p>
            IIEC is an authorized IELTS test Registration center for the British
            Council and IDP. We have an excellent In-House training facility
            with huge resources, online content, highly skilled and trained
            Coaches and training materials of highest standards.{" "}
          </p>
          {/* <br /> */}
        </div>
        <div className={styles.headinfo2} style={{ justifySelf: "left" }}>
          <h3 className={styles.heading2}>WHAT WE OFFER :</h3>
          <ul>
            <li>
              <b>&#8699; </b>
              IIEC is an authorized IELTS partner of the British council and
              IDP.
            </li>
            <li>
              <b>&#8699; </b>
              British Council Certified trainers with more than 15 years of
              excellence in training experience.
            </li>
            <li>
              <b>&#8699; </b>
              Trainers are highly experienced professionals who have personally
              surpassed the IELTS exams.
            </li>
            <li>
              <b>&#8699; </b>
              Personalized One on One coaching to give individual care and
              mentoring.
            </li>
            <li>
              <b>&#8699; </b>
              Periodical mock tests and assessments that replicate the actual
              exam.
            </li>
            <li>
              <b>&#8699; </b>Free IELTS materials and E-books
            </li>
            <li>
              <b>&#8699; </b>
              Language Lab with good collection for mastering the IELTS speaking
              module.
            </li>
          </ul>
        </div>
        <div className={styles.headinfo2}>
          <h3 className={styles.heading2}>ABOUT IELTS:</h3>
          <p>
            IELTS is accepted by most of the Australian, British, Canadian and
            New Zealand academic institutions as also by over 3,000 academic
            institutions in the United States. It is also the most sought after
            qualifying test asked by various professional organisations across
            the world.
          </p>
          <br />
          <p>
            IELTS is the only Secure English Language Test approved by UK Visas
            and Immigration (UKVI) for visa customers applying both outside and
            inside the UK. It is also a requirement for immigration to
            Australia, New Zealand and Canada.
          </p>
        </div>
        <div className={styles.ieltimgcontainer}>
          <div className={styles.ielts}>
            <div className={styles.ieltimg}>
              <Image src={listen} />
            </div>
            <div className={styles.ieltimgtext}>Writing</div>
          </div>
          <div className={styles.ielts}>
            <div className={styles.ieltimg}>
              <Image src={read} />
            </div>
            <div className={styles.ieltimgtext}>Reading</div>
          </div>
          <div className={styles.ielts}>
            <div className={styles.ieltimg}>
              <Image src={write} />
            </div>
            <div className={styles.ieltimgtext}>Speaking</div>
          </div>
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}

export default IeltsData;
