"use client"; 
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

                }, 3000);

            }
            if (response.status === 200) {
                setshowpopup2(true);
                
            }
        }

        // fetch('https://plankton-app-i2dnd.ondigitalocean.app/reg/')
        //     .then(response => response.json())
        //     .then(json => console.log(json))
        // add class success-popup to c-login  and to show hide 
        // setshowpopup(true);
        console.log(showpopup);
    };



    return (
        <section className='c-loginpage'>
            <div className='c-login'>
                <div className='logo'>
                    <div className='ujblogo'>
                        <img src="/images/logo.png" />
                    </div>
                    <div className='unniversarylogo'>
                        <img src="/images/unniversary.png" />
                    </div>
                </div>
                <div className='regfrom'>
                    <input value={firstname} placeholder='First Name' onChange={(event) => {
                        setfirstname(event.target.value)
                    }}></input>
                    <input value={lastname} placeholder='Last Name' onChange={(event) => {
                        setlastname(event.target.value)
                    }}></input>
                    <select name="role" id="role" onChange={(event) => {
                        setrole(event.target.value)
                    }}>
                        <option value="none" selected disabled hidden>Select Role</option>
                        <option value="Partner">Partner</option>
                        <option value="Listed Partner">Listed Partner</option>
                    </select>
                    <input value={mobilenumber} placeholder='Mobile Number' onChange={(event) => {
                        setmobilenumber(event.target.value)
                    }}></input>
                    <button type="submit" onClick={handleClick}> Submit</button>
                </div>
            </div>
            {
                showpopup ? <div className='c-loginpopup'>
                    <div>
                        <img src="/images/checked.png" />
                        <h5>Hi Orbiter {responsedata.firstname} {responsedata.lastname}</h5>
                        <h4>Welcome to celebration </h4>
                    </div>
                </div> : null
            }
            {
                showpopup2 ? <div className='c-loginpopup'>
                    <div>
                        <img src="/images/cancel_icon.png" />
                        <h5>This number already Exist</h5>
                        {/* <h4>Welcome to celebration </h4> */}
                    </div>
                </div> : null
            }
        </section>
    )
}

export default Login