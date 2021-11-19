import React from "react";
import styles from "../../../styles/services.module.css";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import edu from "../../../assets/images/services/education.jpg";
import Image from "next/image";

function Education() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={edu} layout="responsive" />
        </div>
        <div className={styles.headinfo}>
        <h2 className={styles.heading}>OUR EDUCATION SERVICES:</h2>
        <p>
          Education is the passport to the future, for tomorrow belongs to those
          who prepare for it today.”Education is the passport to the future, for
          tomorrow belongs to those who prepare for it today.”{" "}
        </p>
        <br/>
        <p>– Malcolm X</p>
        <br/>
        <p>
          IIEC believes very strongly that education is the foundation for
          career building. We also believe that education is not just about
          knowledge but is also about experience and learning from
          experiences…not only in the class room but also the environment.
          Therefore, we encourage and support every candidate who aspires to
          study abroad as it not only helps in knowledge building but also
          career building as other soft skills are assimilated in a cross
          cultural environment
        </p>
        <br/>
        </div>
        <div className={styles.headinfo2}>
        <h3 className={styles.heading2}>Academic Conseling</h3>
        <p>
          “IIEC” being <b>Education Consultants in Chennai</b>, guides you
          through the maze of questions to find the best institution for the
          best course that would be help career building.
        </p>
        </div>
        <div className={styles.headinfo2}>
        <h3 className={styles.heading2}>Admission Guidance</h3>
        <p>
          We assist you with the process of admission forms right from getting
          application form until reaching the preferred college/university.
        </p>
        <br/>
        <p>
          We assist with the requisite “References” and the ‘all-important’
          Statement of Purpose. We assess the capabilities of each applicant and
          recommend them to Universities’ Admission committees. “Heatherland”
          also do the follow ups with the chosen universities regarding the
          status of each applicant and ensures Positive and Quick Response…
        </p>
        </div>
        <div className={styles.headinfo2}>
        <h3 className={styles.heading2}>Training</h3>
        <p>
          The TOEFL, IELTS GRE, GMAT, test scores are prerequisites for getting
          admission into many of the institutions across Europe, America,
          Australia, Canada and other countries . It also becomes essential for
          getting financial aid from some of the specific universities and
          colleges. We extend support in getting trained for these competitive
          examinations and to secure high scores. We also assist in getting the
          application forms for registration into these examination.
        </p>
        </div>
        <div className={styles.headinfo2}>
        <h3 className={styles.heading2}>Bank Loan Assistance</h3>
        <p>
          Overseas education involves reasonable investment which may require
          funding through banks for some of the applicants. IIEC extends
          unstinted assistance to each applicant in availing loans from various
          nationalized banks with whom the agency has built a network. We help
          you with the entire procedure i.e., selection of bank, procurement of
          application, preparation of documents etc.
        </p>
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}

export default Education;
