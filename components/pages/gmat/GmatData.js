import React from "react";
import styles from "../../../styles/services.module.css";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import gmt from "../../../assets/images/services/gmat.jpg";
import Image from "next/image";

function GmatData() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={gmt} layout="responsive" />
        </div>
        <div className={styles.headinfo}>
          <h2 className={styles.heading}>GMAT: </h2>
          <b>GMAT COACHING AND TRAINING @ IIEC</b>
          <br />
          <p>
            We offer GMAT coaching with extensive coverage of all the GMAT test
            topics. The trainers will examine students on the key fundamentals,
            right approach, effective solving techniques and test-taking
            strategies. Our One On One training strategy ensures plenty of
            interaction and practice learning with a GMAT specialist trainer.{" "}
          </p>
          <br />
          <p>
            We confidently assure you of excellent scores by undergoing our
            quality GMAT preparation coaching program. Our time tested course
            ware and training techniques will add to your core knowledge and
            build up your fundamental strengths to translate into great scores
            in the GMAT exams.
          </p>
          <br />
          <p>
            Our exceptional team of professional trainers have the intrinsic
            experience and academic qualifications to coach you very
            comprehensively. Our full time, highly trained specialists have
            personally attempted the exams and achieved extremely high GMAT
            scores. This gives a coveted edge to the trainers who are immensely
            popular with the students and have spectacular track records in
            producing top scoring candidates.
          </p>
        </div>
        <div className={styles.toeflcontainer}>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test takers</div>
            <div className={styles.toeflinfo}>
              MBA aspirants & MS & Doctoral programs in management fields.
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test accepted by</div>
            <div className={styles.toeflinfo}>Worldwide</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test conducted by</div>
            <div className={styles.toeflinfo}>ACT-Pearson VUE</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Nature of Test</div>
            <div className={styles.toeflinfo}>Computer Based Test</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test Pattern</div>
            <div className={styles.toeflinfo}>AWA, Quantitative & Verbal.</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test Duration</div>
            <div className={styles.toeflinfo}>3.5hrs</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test score</div>
            <div className={styles.toeflinfo}>800(Q+V) AWA (0-6) scale.</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Good score</div>
            <div className={styles.toeflinfo}>650+</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test score validity</div>
            <div className={styles.toeflinfo}>5 Years</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test Report</div>
            <div className={styles.toeflinfo}>
              Mailed 3-4 weeks after taking the test.
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test period</div>
            <div className={styles.toeflinfo}>
              Held at several intervals throughout the year.
            </div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Test repetition policy</div>
            <div className={styles.toeflinfo}> Once in a calendar month.</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Mode of registration </div>
            <div className={styles.toeflinfo}>Online</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Proof of document Required</div>
            <div className={styles.toeflinfo}>Valid Passport in Original.</div>
          </div>
          <div className={styles.toeflinfocontainer}>
            <div className={styles.toeflkey}>Mode of FEE Payment</div>
            <div className={styles.toeflinfo}>
              Bank draft / International credit card.
            </div>
          </div>
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}

export default GmatData;
