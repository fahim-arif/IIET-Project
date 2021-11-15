import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Headers from "../../components/common/headers";
import Footers from "../../components/common/footers";
import classes from "../../styles/form.module.css";
import google from "../../assets/images/social/google.png";
import facebook from "../../assets/images/social/facebook.png";

function Signin() {
    return (
        <>
           <Headers />
           <div className={classes.head}>
               <div className={classes.containerHead}>Sign in with Social Login</div>
               <p className={classes.signup}>if you are new to IIEC,<span className={classes.signupLink}> <Link href="/signup">Create Your Profile</Link></span></p>
               <div className={classes.socialLogins}>
                   <div className={classes.social}><Image src={google} /></div>
                   <div className={classes.social}><Image src={facebook}/></div>
               </div>
               <div style={{width:"20%", margin:"0 auto"}}>
               <div className={classes.or}><span className={classes.orspan}>OR</span></div>
               </div>
           </div>
           <div className={classes.container}>
               <div className={classes.containerHead}>Sign in with Email</div>
               <form className={classes.form}>
                    <div className={classes.inputgroup}>
                    <input className={classes.input} required  />
                    <span className={classes.highlight}></span>
                    <span className={classes.bar}></span>
                    <label className={classes.label}>Email</label>
                    </div>

                    <div className={classes.inputgroup}>
                    <input type="password" required className={classes.input} />
                    <span className={classes.highlight}></span>
                    <span className={classes.bar}></span>
                    <label className={classes.label}>Password</label>
                    </div>
                    <p style={{textAlign:"right"}}><Link href="/">Reset your password</Link></p>
                    <div className={classes.inputgroup}>
                        <button className={classes.button}>Sign in</button>
                    </div>
               </form>
           </div>
           <Footers /> 
        </>
    )
}

export default Signin;
