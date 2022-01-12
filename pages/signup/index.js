import React from 'react'
import Link from "next/link";
import Image from "next/image";
import Headers from "../../components/common/headers";
import Footers from "../../components/common/footers";
import classes from "../../styles/form.module.css";
import google from "../../assets/images/social/google.png";
import facebook from "../../assets/images/social/facebook.png";

function Signup() {
    return (
        <>
           <Headers />
           <div className={classes.head}>
               <div className={classes.containerHead}>Sign up using your social login</div>
               <p className={classes.signup}>Already have an IIEC profile?<span className={classes.signupLink}> <Link href="/signin">Sign in</Link></span></p>
               <div className={classes.socialLogins}>
                   <div className={classes.social}><Image src={google} /></div>
                   <div className={classes.social}><Image src={facebook}/></div>
               </div>
               <div style={{width:"20%", margin:"0 auto"}}>
               <div className={classes.or}><span className={classes.orspan}>OR</span></div>
               </div>
           </div>
           <div className={classes.container}>
               <div className={classes.containerHead}>Sign up using your email</div>
               <form className={classes.form}>

                    <div className={classes.inputgroup}>
                    <input className={classes.input} required  />
                    <span className={classes.highlight}></span>
                    <span className={classes.bar}></span>
                    <label className={classes.label}>First name</label>
                    </div>

                    <div className={classes.inputgroup}>
                    <input className={classes.input} required  />
                    <span className={classes.highlight}></span>
                    <span className={classes.bar}></span>
                    <label className={classes.label}>Last name</label>
                    </div>

                    <div className={classes.inputgroup}>
                    <input required className={classes.input} />
                    <span className={classes.highlight}></span>
                    <span className={classes.bar}></span>
                    <label className={classes.label}>Mobile Number</label>
                    </div>

                    <div className={classes.inputgroup}>
                    <input className={classes.input} required  />
                    <span className={classes.highlight}></span>
                    <span className={classes.bar}></span>
                    <label className={classes.label}>Email address</label>
                    </div>

                    <div className={classes.inputgroup}>
                    <input type="password" required className={classes.input} />
                    <span className={classes.highlight}></span>
                    <span className={classes.bar}></span>
                    <label className={classes.label}>Enter password</label>
                    </div>

                    <div className={classes.inputgroup}>
                    <input type="password" required className={classes.input} />
                    <span className={classes.highlight}></span>
                    <span className={classes.bar}></span>
                    <label className={classes.label}>Confirm password</label>
                    </div>

                    <div className={classes.checkbox}>
                    <input type="checkbox" style={{margin:'5px'}} required />
                    <label> I agree to IIEC's <Link href="/">terms and conditions</Link> and <Link href="/">privacy policy</Link></label>
                    </div>
                    <div className={classes.checkbox}>
                    <input type="checkbox" style={{margin:'5px'}} required />
                    <label> Please contact me by phone, email or SMS to assist with my enquiry</label>
                    </div>
                    <div className={classes.checkbox}>
                    <input type="checkbox" style={{margin:'5px'}} required />
                    <label> I agree to receive occasional communications from IIEC about courses, offers and other marketing information</label>
                    </div>
                    <div className={classes.inputgroup}>
                        <button className={classes.button}>Create Account</button>
                    </div>
               </form>
           </div>
           <Footers /> 
        </>
    )
}

export default Signup;
