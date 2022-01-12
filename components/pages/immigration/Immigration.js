import React from "react";
import styles from "../../../styles/services.module.css";
import EnquiryForm from "../enquiry-form/EnquiryForm";
import imm from "../../../assets/images/services/immigration.jpg";
import bs from "../../../assets/images/services/business.jpg";
import permit from "../../../assets/images/services/permit.jpg";
import visitor from "../../../assets/images/services/visitor.jpg";
import Image from "next/image";

function Immigration() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.image}>
          <Image src={imm} layout="responsive" />
        </div>
        <div className={styles.headinfo}>
          <h2 className={styles.heading}>IMMIGRATION:</h2>
          <p>
            People have been migrating from one place to the other since times
            immemorial. Humans have always been in search of a newer and better
            place to exist and their search for a Utopian locale to settle and
            prosper has been the motive force for their wandering.{" "}
          </p>
          <br />
          <p>
            We at IIEC have given a more pragmatic approach to this genetic
            propulsion wired into us since birth to seek a better place to be
            in. Our ONE STOP Immigration program has helped people from a
            diverse range of industries and occupations to migrate and live in a
            host of countries all around the world with great ease and comfort.
            IEC is an Associate of with a registered and very tenured member of
            CSIC / CCIC / CAPIC who is a Canadian Government-authorized Study
            and Immigration Consultant based in Canada.
          </p>
          <br />
          <p>
            We are one of the most sought after Immigration Experts in India to
            offer guaranteed success to <b>PR</b> through <b>EEP</b>, <b>PNP</b>{" "}
            and <b>Skilled Category Migration</b> Visas.
          </p>
          <br />
          <p>
            <b>
              Visit our offices and we can help in giving flight to your dreams
              to migrate and settle in a country of your choice very soon.
            </b>
          </p>
        </div>
        <div className={styles.immtypecontainer}>
          <div className={styles.immcontainer}>
            <div className={styles.immimage}>
              <Image src={bs} layout="responsive" />
            </div>
            <div className={styles.immcontent}>
              <div className={styles.immhead}>Business Immigration</div>
              <div className={styles.imminfo}>
                <p>
                  With the world revolutionizing into a global village,
                  distances are shrinking and breaking of trade barriers with
                  advancement in technology has created a phenomenal demand for
                  potential businessmen worldwide. Developed countries like
                  Canada, USA, Europe, Australia, New Zealand,
                  Singapore,Denmark,Ukraine and Czech offer excellent
                  opportunities to attract potential investors to establish new
                  business or expand/diversify their existing business.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.immcontainer}>
            <div className={styles.immimage}>
              <Image src={permit} layout="responsive" />
            </div>
            <div className={styles.immcontent}>
              <div className={styles.immhead}>Work Permit</div>
              <div className={styles.imminfo}>
                Interested in working abroad? Well you can’t just hop on a plane
                for any country and start looking for a paid job. To work would
                be illegal without a work permit, which you cannot acquire
                without a job offer. We may help you to get a job offer from
                foreign employers and can file your case for Work Visa.
              </div>
            </div>
          </div>
          <div className={styles.immcontainer}>
            <div className={styles.immimage}>
              <Image src={visitor} layout="responsive" />
            </div>
            <div className={styles.immcontent}>
              <div className={styles.immhead}>Visitor visa</div>
              <div className={styles.imminfo}>
                A visitor Visa is for applicants who intend to travel to Canada,
                Australia, Europe, UK, New Zealand or anywhere across the world
                as tourists. The visitor visa or Temporary Resident Permit (TRV)
                is country specific and may be for single entry, multiple entry
                or transit purposes. Generally, visitor visas may be granted for
                a renewable period of 6 months.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.listcontainer}>
            <div className={styles.lists} >
                <h4 className={styles.heading2}>PRE AND POST LANDING SERVICES</h4>
                <ul className={styles.listitems}>
                    <li><b>&#8611;</b> Evaluation and Assessment</li>
                    <li><b>&#8611;</b> Preparation of Client’s File</li>
                    <li><b>&#8611;</b> Interview Preparation (where required)</li>
                    <li><b>&#8611;</b> Providing orientation session regarding that particular country and its life-style</li>
                    <li><b>&#8611;</b> Personal Guidance for updating your profile. Formalities at Port of Entry.</li>
                    <li><b>&#8611;</b> Airport pickup</li>
                    <li><b>&#8611;</b> Stay at Nominal Cost</li>
                    <li><b>&#8611;</b> Assistance for post landing documentation and extensive job search / placement assistance.</li>
                </ul>
            </div>
            <div className={styles.lists}>
            <h4 className={styles.heading2}>BENEFITS OF IMMIGRATION</h4>
                <ul className={styles.listitems}>
                    <li><b>&#8611;</b> Recognition of dual citizenship.</li>
                    <li><b>&#8611;</b> Live and work in any occupation.</li>
                    <li><b>&#8611;</b> Citizenship benefits to permanent residents.</li>
                    <li><b>&#8611;</b> Medical, education and social benefits.</li>
                    <li><b>&#8611;</b> Free Basic Health Care for the entire family.</li>
                    <li><b>&#8611;</b> Free Education up to Secondary level.</li>
                    <li><b>&#8611;</b> Very minimal tuition fees for Post Secondary & Tertiary Education.</li>
                    <li><b>&#8611;</b> Unemployment Benefits after a certain period.</li>
                </ul>
            </div>
        </div>
        {/* <div className={styles.headinfo2}>
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
        </div> */}
      </div>
      <EnquiryForm />
    </div>
  );
}

export default Immigration;
