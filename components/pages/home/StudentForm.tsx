import { useForm, SubmitHandler} from 'react-hook-form'
import Image from 'next/image'
import mainBanner from '../../../assets/images/indian-international-student-in-Germany.jpg'
import classes from '../../../styles/studentForm.module.css'
import {postLead} from '@modules/LandingPage/Services/LeadGeneration.Service'

type Inputs = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNo: string,
  preferDestination: string,
  startDate: string,
  officeLocation: string,
  preferCounsel: string,
  fundOption: string,
  studyLevel: string,
};

const StudentForm = () => {

     const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
     const onSubmit: SubmitHandler<Inputs> = async(data) => {
        await postLead(data);
     }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.image_container}>
                    <Image alt='main-banner' src={mainBanner} />
                </div>
                <div className={classes.form_container}>

                    <form onSubmit={handleSubmit(onSubmit)} className="">
                        <div className={classes.row}>
                            <input {...register('firstName')}   placeholder="First Name*" className={classes.input1} type="text" />
                            <input {...register('lastName')}   placeholder="Last Name*" className={classes.input1} type="text" />
                        </div>
                        <div className={classes.row}>
                            <input {...register('email')}  type="text" placeholder="Email Address*" className={classes.input} />
                        </div>
                        <div className={classes.row}>
                            <input type="text" {...register('phoneNo')} placeholder="Mobile Number*" className={classes.input} />
                        </div>
                        <div className={classes.row}>
                            <div className={classes.selectContainer}>
                                <select {...register('preferDestination')} className={classes.input1} >
                                    <option value="Default">Select Your Preferred Study Destination*</option>
                                    <option value="USA">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                </select>
                            </div>
                            <div className={classes.selectContainer}>
                                <select {...register('startDate')} className={classes.input1} >
                                    <option value="Default">Select When Do You Prefer to Study*</option>
                                    <option value="Dec 2021">December 2021</option>
                                    <option value="Jan 2022">January 2022</option>
                                    <option value="Feb 2022">February 2022</option>
                                    <option value="Mar 2022">March 2022</option>
                                    <option value="Apr 2022">April 2022</option>
                                    <option value="May 2022">May 2022</option>
                                    <option value="Jun 2022">June 2022</option> </select>
                            </div>
                        </div>
                        <div className={classes.selectContainer}>
                            <select {...register('officeLocation')} className={classes.input1} >
                                <option value="Default">Nearest IIEC Office*</option>
                                <option value="Chennai">Chennai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Mombai">Mombai</option>
                            </select>
                        </div>
                        <div className={classes.selectContainer}>
                            <select {...register('preferCounsel')} className={classes.input1} >
                                <option value="Default">Select Your Preferred Mode of Counselling*</option>
                                <option value="In Person">In Person</option>
                                <option value="Virtual">Virtual Counselling</option>
                            </select>
                        </div>
                        <div className={classes.selectContainer}>
                            <select {...register('fundOption')} className={classes.input1} >
                                <option value="Default">Select How Would You Fund Your Education*</option>
                                <option value="Self">Self Funded</option>
                                <option value="Parents">Parents</option>
                                <option value="Scholarship">Seeking Scholarship</option>
                                <option value="Bank">Bank Load</option>
                            </select>
                        </div>
                        <div className={classes.selectContainer}>
                            <select {...register('studyLevel')} className={classes.input1} >
                                <option value="Default">Select Your Preferred Study Level*</option>
                                <option value="Doctorate">Doctorate</option>
                                <option value="Post Graduate">Post Graduate</option>
                                <option value="Undergraduate">Undergraduate</option>
                                <option value="University Prep">University Preparation</option>
                                <option value="Vocational">Vocational</option>
                                <option value="English">English Language</option>
                            </select>
                        </div>
                        <div className={classes.term_condition_container}>
                            <div className={classes.term_text}>
                                IIEC will not share your details with others without your permission:
                            </div>
                            <div className={classes.term_radio_btn}>
                                <input type="checkbox" id="contactChoice1" name="contact" value="email" />
                                <label>I agree to IDP Terms and privacy policy</label>
                            </div>
                            <div className={classes.term_radio_btn}>
                                <input type="checkbox" id="contactChoice1" name="contact" value="email" />
                                <label>Please contact me by phone, email or SMS to assist with my enquiry</label>
                            </div>
                            <div className={classes.term_radio_btn}>
                                <input type="checkbox" id="contactChoice1" name="contact" value="email" />
                                <label>I would like to receive updates and offers from IDP</label>
                            </div>
                        </div>
                        <div className={classes.btn_container}>
                            <button className={classes.btn}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default StudentForm;
