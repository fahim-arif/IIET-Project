import React from "react";
import styles from "../../../styles/services.module.css";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import Image from "next/image";

function GreData() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {/* <div className={styles.image}>
          <Image src={gmt} layout="responsive" />
        </div> */}
        <div className={styles.headinfo}>
          <h2 className={styles.heading}>GRE: </h2>
          <b>GRE TRAINING @ IIEC ​</b>
          <br />
          <p>
            IIEC offers comprehensive classroom training for GRE. The courses
            have been designed and prepared by leading educational experts. We
            aim to provide the best possible assistance so that you can get
            competitive GRE scores, which is a critical part of the graduate
            school admissions process.{" "}
          </p>
          <br />
          <p>
            We offer intensive classes for the NEW FORMAT for GRE at our centre.
            The GRE classes include training for GRE Quant , GRE verbal and GRE
            AWA of the GRE General Test. Students will be provided with course
            material. The GRE Preparation Course is designed to give you the
            extra edge for getting a high score in the GRE test. The program
            includes Practice Tests that can be scheduled at a time of your
            convenience outside the class timings.
          </p>
        </div>
      </div>
      <EnquiryForm />
    </div>
  );
}

export default GreData;
