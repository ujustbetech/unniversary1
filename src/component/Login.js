"use client";
import CountdownTimer from '../CountdownTimer';
import axios from 'axios';
import React, { useState } from 'react';
// import logo from '../images/logo.png'

function Login() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [role, setrole] = useState('');
    const [mobilenumber, setmobilenumber] = useState('');
    const [showpopup, setshowpopup] = useState(false);
    const [showpopup2, setshowpopup2] = useState(false);
    const [responsedata, setresponsedata] = useState("");
    const [registration, setregistration] = useState(false);
    const [loginstate, setlogin] = useState(true);
    const [loginfailedpopup, setloginfailedpopup] = useState(false);
    const [loginDone, setloginDone] = useState(false);


    const hidepopup = (e) => {
        setshowpopup(false)
        setshowpopup2(false)
        setloginfailedpopup(false)
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const user = {
            firstname: firstname,
            lastname: lastname,
            role: role,
            phonenumber: mobilenumber,
        }
        console.log(user);
        const response = await axios
            .post('https://plankton-app-i2dnd.ondigitalocean.app/reg/', user)
            .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
            if (response.status === 201) {
                setshowpopup(true);
                setresponsedata(response.data);
                setTimeout(() => {
                    // alert("test");
                    setshowpopup(false);
                    setfirstname("")
                    setlastname("")
                    setmobilenumber("")
                    setloginDone(true)
                    setlogin(false)
                    setregistration(false)


                }, 3000);

            }
            if (response.status === 200) {
                setshowpopup2(true);

            }
        }


        console.log(showpopup);
    };
    const loginClick = async (e) => {
        e.preventDefault();

        const response = await axios
            .get(`https://plankton-app-i2dnd.ondigitalocean.app/login/${mobilenumber}/`)
            // 
            .then(response => {
                const posts = response.data;
                setresponsedata(response.data);
                console.log(response);
                if (response.status === 200) {
                    setloginDone(true)
                    setlogin(false)
                }
                //   this.setState ({posts});
            }).catch((error) => {
                console.log('Error: ', error);
                setloginfailedpopup(true);

                setTimeout(() => {
                    // alert("test");
                    setloginfailedpopup(false);
                    setlogin(false);
                    setregistration(true)

                }, 3000);
            });





        console.log(showpopup);
    };

    const THREE_DAYS_IN_MS = 12 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    // To set two dates to two variables
    var date1 = new Date();
    var date2 = new Date("02/26/2023");

    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    let TotalDays = Math.ceil(Difference_In_Time / (1000 * 3600 * 24));
    console.log(TotalDays + ' days to world Cup');

    // console.log(Difference_In_Days);


    return (
        <section className='c-loginpage'>
            <div className='c-login'>
                {loginDone ? null : <div className='logo'>
                    <div className='ujblogo'>
                        <img src="/images/logo.png" />
                    </div>
                    <div className='unniversarylogo'>
                        <img src="/images/unniversary.png" />
                    </div>
                </div>

                }


                {
                    loginDone ? <div className='c-logindone'>
                        <div className='logos'>
                            <div className='ujbl'>
                                <img src="/images/logo.png" />
                            </div>
                            <div className='welcome'>{'Welcome '}
                                <span>
                                    {responsedata.firstname} {responsedata.lastname}
                                </span></div>
                            <div className='unniversaryl'>
                                <img src="/images/unniversary.png" />
                            </div>
                        </div>
                        {/* <CountdownTimer targetDate={dateTimeAfterThreeDays} /> */}
                        <div className='show-counter'>
                            <div className='eventdate'>
                                <h4>26th February 2023</h4>
                            </div>
                            <div className='countdownfour'>
                                {TotalDays} DAYS
                                {/* <DateTimeDisplay value={days} type={'DAYS'} isDanger={days <= 3} /> */}
                            </div>
                        </div>
                        <h2>Event Details</h2>
                        <ul>
                            {/* <li>
                                <h5>Date:</h5>
                                <h6>Sunday, 26th February 2023</h6>
                            </li> */}
                            <li>
                                <h5>Time:</h5>
                                <h6>4:00 pm onwards</h6>
                            </li>
                            <li>
                                <h5>Venue:</h5>
                                <h6>Country Club, Andheri West</h6>
                            </li>
                            <li>
                                <h5>Dress Code:</h5>
                                <h6>Traditional Indian Wear</h6>
                            </li>
                        </ul>
                    </div> : null
                }
                {
                    registration ? <form onSubmit={handleClick}>
                        <div className='regfrom'>
                            <input required minlength="10" type='tel' value={mobilenumber} placeholder='Mobile Number' onChange={(event) => {
                                setmobilenumber(event.target.value)
                            }}></input>
                            <input required value={firstname} placeholder='First Name' onChange={(event) => {
                                setfirstname(event.target.value)
                            }}></input>
                            <input required value={lastname} placeholder='Last Name' onChange={(event) => {
                                setlastname(event.target.value)
                            }}></input>
                            <select required name="role" id="role" onChange={(event) => {
                                setrole(event.target.value)
                            }}>
                                <option value="none" selected disabled hidden>Select Role</option>
                                <option value="Orbiter">Orbiter</option>
                                <option value="Cosmonaut">Cosmonaut</option>
                                <option value="Guest">Guest</option>
                            </select>

                            <button type="submit" > Submit</button>
                        </div>
                    </form> : null
                }

                {
                    loginstate ? <form onSubmit={loginClick}>
                        <div className='regfrom'>
                            <input required type='tel' minlength='10' value={mobilenumber} placeholder='Mobile Number' onChange={(event) => {
                                setmobilenumber(event.target.value)
                            }}></input>
                            <button type="submit" > Submit</button>
                        </div>
                    </form> : null
                }
            </div>
            {
                showpopup ? <div className='c-popupbg'>
                    <div onClick={hidepopup} className='bg-popup'></div>
                    <div className='c-loginpopup'>
                        <div>
                            <img src="/images/checked.png" />
                            <h5>Hi Orbiter {responsedata.firstname} {responsedata.lastname}</h5>
                            <h4>Welcome to celebration </h4>
                        </div>
                    </div></div> : null
            }
            {
                showpopup2 ? <div className='c-popupbg'>
                    <div onClick={hidepopup} className='bg-popup'></div>
                    <div className='c-loginpopup'>
                        <div>
                            <img src="/images/cancel_icon.png" />
                            <h5>This number already Exist</h5>
                            {/* <h4>Welcome to celebration </h4> */}
                        </div>
                    </div></div> : null
            }
            {
                loginfailedpopup ? <div className='c-popupbg'>
                    <div onClick={hidepopup} className='bg-popup'></div>
                    <div className='c-loginpopup'>
                        <div>
                            <img src="/images/cancel_icon.png" />
                            <h5>You have not register yet kindly register </h5>
                            {/* <h4>Welcome to celebration </h4> */}
                        </div>
                    </div></div> : null
            }
        </section>
    )
}

export default Login
