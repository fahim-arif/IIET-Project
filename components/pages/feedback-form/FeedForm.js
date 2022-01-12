import React from "react";
import styles from "../../../styles/services.module.css";
import classes from "../../../styles/form.module.css";

function FeedForm() {
  return (
    <div className={styles.form} style={{marginLeft: window.innerWidth<800 ? 0 :'20px'}}>
      <h4 style={{textAlign:"center",color:"tomato",fontWeight:"900"}}>We'd love to hear from you !</h4>
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
          <textarea
            required
            className={classes.input}
            style={{ borderRadius: 0 }}
          />
          <span className={classes.highlight}></span>
          <span className={classes.bar}></span>
          <label className={classes.label}>Feedback</label>
        </div>

        <div className={classes.inputgroup}>
          <button className={classes.button}>CONTACT US</button>
        </div>
      </form>
    </div>
  );
}

export default FeedForm;
