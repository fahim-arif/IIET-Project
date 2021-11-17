import React from "react";
import styles from "../../../styles/services.module.css";
import classes from "../../../styles/form.module.css";
import Link from "next/link";

function EnquiryForm() {
  return (
    <div className={styles.form}>
      <h3 className={styles.formheading}>ENQUIRY ONLINE</h3>
      <form className={styles.formContainer}>
        <div className={classes.inputgroup}>
          <input className={classes.input} required />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.label}>Name</label>
        </div>

        <div className={classes.inputgroup}>
          <input className={classes.input} required />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.label}>Email</label>
        </div>

        <div className={classes.inputgroup}>
          <input className={classes.input} required />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.label}>Phone</label>
        </div>

        <div className={classes.inputgroup}>
          <select
            className={classes.input}
            required
            style={{ borderRadius: 0 }}
          >
            <option value="Study Abroad">Study Abroad</option>
            <option value="Immigration">Immigration</option>
            <option value="Visa Assistance">Visa Assistance</option>
            <option value="IELTS / GMAT / TOEFL">IELTS / GMAT / TOEFL</option>
            <option value="Air Tickets">Air Tickets</option>
            <option value="Travel Insurance">Travel Insurance</option>
            <option value="Passport Online">Passport Online</option>
            <option value="Training">Training</option>
            <option value="Bank Loan Assistance">Bank Loan Assistance</option>
            <option value="Forex Assistance">Forex Assistance</option>
            <option value="Part Time Job Assistance">
              Part Time Job Assistance
            </option>
            <option value="Workshop">Workshop</option>
          </select>
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.label}>Services</label>
        </div>

        <div className={classes.inputgroup}>
          <textarea
            required
            className={classes.input}
            style={{ borderRadius: 0 }}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.label}>Comments</label>
        </div>

        <div className={classes.inputgroup}>
          <button className={classes.button}>CONTACT US</button>
        </div>
      </form>
    </div>
  );
}

export default EnquiryForm;
