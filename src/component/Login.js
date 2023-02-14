
"use client"; // this is a client component
import axios from 'axios';
import React, { useState } from 'react';
// import logo from '../images/logo.png'

function Login() {
    const [firstname, setfirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [role, setrole] = useState('');
    const [mobilenumber, setmobilenumber] = useState('');


    const config = {
        headers: {
//             'content-type': 'application/json',
//             'Access-Control-Allow-Origin': "*"
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': '*'
        }
    }

    const dataToBeFedToFootballersAPI = {
        firstname: firstname,
        lastname: lastname,
        role: role,
        mobilenumber: mobilenumber,
    }

    const handleClick = async (event) => {
        event.preventDefault()

        await axios.post(`https://sandhiyaacharya.pythonanywhere.com/reg/`, dataToBeFedToFootballersAPI, config)
            .then((response) => {
                // dispatch(createFootballPlayerProfile(response.data))
                console.log(response.data)
                // setPostValStatus(true);
            })

//             await axios.get("https://sandhiyaacharya.pythonanywhere.com/reg/")
//   .then(function (response) {
//     console.log(response);
//   });
    }



    const handleClick9 = async (e) => {
        e.preventDefault();
        const user = {
            firstname: firstname,
            lastname: lastname,
            role: role,
            mobilenumber: mobilenumber,
        }
        const response = await axios
            .post('https://sandhiyaacharya.pythonanywhere.com/reg/', user)
            .catch((error) => console.log('Error: ', error));
        if (response && response.data) {
            console.log(response);
            console.log(response.data);
        }
    };

    return (
        <>
            <section className='c-loginpage'>
                <div className='logo'>
                    <div className='ujblogo'>
                        <img src="/images/logo.png" />
                    </div>
                    <div className='unniversarylogo'>
                        <img src="/images/unniversary.png" />
                    </div>
                </div>
                <div className='regfrom'>
                    <input placeholder='First Name' onChange={(event) => {
                        setfirstname(event.target.value)
                    }}></input>
                    <input placeholder='Last Name' onChange={(event) => {
                        setlastname(event.target.value)
                    }}></input>
                    <select name="role" id="role" onChange={(event) => {
                        setrole(event.target.value)
                    }}>
                        <option value="none" selected disabled hidden>Select Role</option>
                        <option value="Partner">Partner</option>
                        <option value="Listed Partner">Listed Partner</option>
                    </select>
                    <input placeholder='Mobile Number' onChange={(event) => {
                        setmobilenumber(event.target.value)
                    }}></input>
                    <button type="submit" onClick={handleClick}> Submit</button>
                </div>
            </section>
            <div className='c-loginpopup'>
                <img src="/images/checked.png" />
                <h5>Hi Orbiter Rajeev Ubhe</h5>
                <h4>Welcome to celebration </h4>
            </div>
        </>
    )
}

export default Login
