import axios from 'axios';
import React, { useEffect, useState } from 'react'

function all() {

    const [alldata, setAllData] = useState([])

    useEffect(() => {

        axios.get('https://plankton-app-i2dnd.ondigitalocean.app/reg/').then(response => {
            console.log(response.data);
            setAllData(response.data)
        });


        // return () => {
        //   second
        // }
    }, [])


    return (
        <>
            <div>
                <table >
                    <thead>
                        <th>SR No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone Number</th>
                        <th>Role</th>
                        <th>registeration</th>
                        <th>Attendance</th>
                        <th>Foodcounter</th>
                    </thead>
                    <tbody>
                        {
                            alldata && alldata.map((alldata, i) =>
                                // console.log(alldata);
                                <tr key={i + 1}>
                                    <td>{i + 1}</td>
                                    <td>
                                        {alldata.firstname}
                                    </td>
                                    <td>
                                        {alldata.lastname}
                                    </td>
                                    <td>
                                        {alldata.phonenumber}
                                    </td>
                                    <td>
                                        {alldata.role}
                                    </td>
                                    <td>
                                        {alldata.registeration}
                                    </td>
                                    <td>
                                        {/* {alldata.phonenumber} */}
                                        {alldata.attendance === 0 ? "No" : "yes"}
                                    </td>
                                    <td>
                                        {/* {alldata.phonenumber} */}
                                        {alldata.foodcounter === 0 ? "No" : "yes"}
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>

                </table>
            </div>
        </>
    )
}

export default all