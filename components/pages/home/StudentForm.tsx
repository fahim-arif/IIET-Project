import {useEffect, useState} from 'react';
import axios from 'axios';
import { useForm, SubmitHandler} from 'react-hook-form'
import Image from 'next/image'
import mainBanner from '../../../assets/images/indian-international-student-in-Germany.jpg'
import classes from '../../../styles/studentForm.module.css'
import {postLead} from '@modules/LandingPage/Services/LeadGeneration.Service'
import Swal from 'sweetalert2';

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

    const [data, setData] = useState([]);
    const [cuet, setCuet] = useState(false);
    const [ruet, setRuet] = useState(false);
    const [kuet, setKuet] = useState(false);

    useEffect(() => {

        const fetchData = async() => {
            const {data} = await axios.get('https://bdapis.herokuapp.com/api/v1.1/districts');
            setData(data.data);
        }
        fetchData();
    }, [])

     const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();
     const onSubmit: SubmitHandler<Inputs> = async(data) => {
        // await postLead(data);
        console.log('heello')
     }

     console.log(data);

     const onChangeDistrict = (e) => {
        // console.log(e.target.value)
        const foundDistrict = data.find((value) => value.district === e.target.value);
        const cords = foundDistrict.coordinates.split(',');
        console.log(foundDistrict);
        const langitude = cords[0];
        const latitude = cords[1].split(' ')[1];
        const totalXY = +latitude + +langitude;

        const cuetXY = 114.433093;
        let cuetTotal = 0;
        let kuetTotal = 0;
        let ruetTotal = 0;

        const kuetXY = 112.402903;

        const ruetXY = 112.991986;

        let cuetX = 22.462023 - (+langitude)
        let cuetY = 91.971070 - (+latitude)

        let kuetX = 22.900530 - (+langitude);
        let kuetY = 89.502373 - (+latitude);

        let ruetX = 24.363421 - (+langitude);
        let ruetY = 88.628565 - (+latitude);

        cuetTotal = Math.sqrt(Math.pow(cuetX,2) + (Math.pow(cuetY,2)))
        kuetTotal = Math.sqrt(Math.pow(kuetX,2) + (Math.pow(kuetY,2)))
        ruetTotal = Math.sqrt(Math.pow(ruetX,2) + (Math.pow(ruetY,2)))
        console.log('cuet', cuetTotal)
        console.log('kuet', kuetTotal)
        console.log('ruet', ruetTotal);

        let resultArr = [cuetTotal, kuetTotal, ruetTotal];
        const min = Math.min(...resultArr)
        const index = resultArr.indexOf(min);

        console.log(index)
        if (index === 0) {
            setCuet(true)
        } else if(index === 1){ 
            setKuet(true)
        } else {
            setRuet(true)
        }


     }

     const onSubmitHandle = (e) => {
         e.preventDefault();
         if (cuet) {
         Swal.fire(
  'Good job!',
  'Your recommended varisty is CUET! We also recommend you to study in Computer Science Engineering.',
  'success'
)
         } else if (kuet) {
         Swal.fire(
  'Good job!',
  'Your recommended varisty is KUET! We also recommend you to study in Electrical and Electronic Engineering.',
  'success'
)
         } else {
         Swal.fire(
  'Good job!',
  'Your recommended varisty is RUET! We also recommend you to study in Computer Science Engineering.',
  'success'
)
         }

     }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.image_container}>
                    <Image alt='main-banner' src={mainBanner} />
                </div>
                <div className={classes.form_container}>

                    <form>
                        {/* <div className={classes.row}>
                            <input {...register('firstName')}   placeholder="First Name*" className={classes.input1} type="text" />
                            <input {...register('lastName')}   placeholder="Last Name*" className={classes.input1} type="text" />
                        </div>
                        <div className={classes.row}>
                            <input {...register('email')}  type="text" placeholder="Email Address*" className={classes.input} />
                        </div>
                        <div className={classes.row}>
                            <input type="text" {...register('phoneNo')} placeholder="Mobile Number*" className={classes.input} />
                        </div> */}
                        <div className={classes.row}>
                            <div className={classes.selectContainer}>
                                <select onChange={onChangeDistrict} className={classes.input1} >
                                     <option value="default">Select your district</option>
                              {data.map((value) => (
                                  <option key={value.id} value={value.district}>{value.district}</option>
                              ))}
                                    <option value=""></option>
                                    {/* <option value="Default">Select Your Preferred Study Destination*</option>
                                    <option value="USA">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option> */}
                                </select>
                            </div>
                            <div className={classes.selectContainer}>
                                <select {...register('startDate')} className={classes.input1} >
                                    <option value="Default">Tell us about your interest in study field</option>
                                    <option value="Computer">Computers</option>
                                    <option value="Electronics">Electronics</option>
                                    <option value="Feb 2022">Abstract Drawing & Design</option>
                                    <option value="Mar 2022">Robotics</option>
                                    <option value="Apr 2022">Food, Drink, Drug</option>
                                    <option value="May 2022">Hardware Development</option>
                                    <option value="Jun 2022">Aerospace and Machineries</option> 
                                    <option value="May 2022">Hardware Development</option>
                                    </select>

                            </div>
                        </div>
                        <div className={classes.selectContainer}>
                            <select {...register('officeLocation')} className={classes.input1} >
                                <option value="Default">Tell us about you self*</option>
                                <option value="Chennai">PASSIONATE</option>
                                <option value="Delhi">EASY GOING</option>
                                <option value="Mombai">ADAPTABILE</option>
                                <option value="Mombai">CREATIVE</option>
                            </select>
                        </div>
                        <div className={classes.selectContainer}>
                            <select {...register('preferCounsel')} className={classes.input1} >
                                <option value="Default">Tell us which subject you prefer most*</option>
                                <option value="In Person">MATHMETICS</option>
                                <option value="Virtual">CHEMISTRY</option>
                                <option value="Virtual">PHYSICS</option>
                                <option value="Virtual">DRAWING</option>
                            </select>
                        </div>
                        <div className={classes.selectContainer}>
                            <select {...register('fundOption')} className={classes.input1} >
                                <option value="Default">Tell us about your hobby</option>
                                <option value="Self">READING BOOKS</option>
                                <option value="Parents">TRAVELLING</option>
                                <option value="Scholarship">PLAYING Sports</option>
                                <option value="Bank">PLAYING VIDEO GAMES</option>
                                <option value="Bank">DON'T HAVE A HOBBY</option>
                            </select>
                        </div>
                        <div className={classes.selectContainer}>
                            <select {...register('studyLevel')} className={classes.input1} >
                                <option value="Default">What is your future plan*</option>
                                <option value="Doctorate">Stay in Bangladesh</option>
                                <option value="Post Graduate">Stay Abroad</option>
                            </select>
                        </div>
                        <div className={classes.term_condition_container}>
                            <div className={classes.term_text}>
                                We will not share your details with others without your permission:
                            </div>
                            <div className={classes.term_radio_btn}>
                                <input type="checkbox" id="contactChoice1" name="contact" value="email" />
                                <label>I agree to Terms and privacy policy</label>
                            </div>
                            <div className={classes.term_radio_btn}>
                                <input type="checkbox" id="contactChoice1" name="contact" value="email" />
                                <label>Please contact me by phone, email or SMS to assist with my enquiry</label>
                            </div>
                            <div className={classes.term_radio_btn}>
                                <input type="checkbox" id="contactChoice1" name="contact" value="email" />
                                <label>I would like to receive updates and offers from us</label>
                            </div>
                        </div>
                        <div className={classes.btn_container}>
                            <button onClick={onSubmitHandle} className={classes.btn}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default StudentForm;
