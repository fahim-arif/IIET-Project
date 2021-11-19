import React from "react";
import styles from "../../../styles/services.module.css";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import tfl from "../../../assets/images/services/toefl.jpg";
import Image from "next/image";

function ToeflData() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={tfl} layout="responsive" />
        </div>
        <div className={styles.headinfo}>
          <h2 className={styles.heading}>TOEFL: </h2>
          <b>TOEFL COACHING AND TRAINING @ IIEC</b>
          <br />
          <p>
            TOEFL course offers extensive coverage on all topics. Our trainers
            will examine key fundamentals, the right approach, effective solving
            technique and test taking strategies. No stone will be left
            unturned! Expect plenty of interaction and practice from the leading
            TOEFL specialist.{" "}
          </p>
          <br />
          <p>
            We are so confident of our TOEFL preparation programs that we are
            guarantee that your official TOEFL score will increase by at least
            20 points after going through our proven programs.
          </p>
          <br />
          <p>
            Team of professional trainers with necessary professional experience
            and academic qualification would train you. Our full time,
            highly-trained test preparation specialists have also achieved
            extremely high TOEFL scores, are immensely popular with their
            students and have stellar track records in producing top scoring
            students.
          </p>
          <br />
          <p>
            You will receive all the study materials that you will need to ace
            your TOEFL access extensive notes, cheat sheets, practice questions,
            mock test and vocabulary lists, our learning systems are constantly
            updated by our highly experienced in-house R&D team. So you can be
            assured that you will be in touch with the latest techniques and
            testing trend. We maintain a well-stocked resource library that our
            students have full access to.
          </p>
        </div>
        <div className={styles.toeflcontainer}>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test takers</div>
            <div className={styles.toeflinfo}>
              Undergraduate, Graduate Doctoral or MBA programs
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test accepted by</div>
            <div className={styles.toeflinfo}>
            US & Canada, Few universities in the UK and NZ
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test conducted by</div>
            <div className={styles.toeflinfo}>
            ETS-Pro metric
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Nature of Test</div>
            <div className={styles.toeflinfo}>
            Internet based test
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test Duration</div>
            <div className={styles.toeflinfo}>
            4 hrs
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test score</div>
            <div className={styles.toeflinfo}>
            120
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Good score</div>
            <div className={styles.toeflinfo}>
            90+
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test score validity</div>
            <div className={styles.toeflinfo}>
            2 Years
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test Report</div>
            <div className={styles.toeflinfo}>
            After 3 or 4 weeks of taking the test
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test period</div>
            <div className={styles.toeflinfo}>
            Every month but fixed date
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test repetition policy</div>
            <div className={styles.toeflinfo}>
            In 7 days
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Mode of registration </div>
            <div className={styles.toeflinfo}>
            Online
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Proof of document Required</div>
            <div className={styles.toeflinfo}>
            Bank Draft / International Credit Card
            </div>
          </div>
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}

export default ToeflData;
