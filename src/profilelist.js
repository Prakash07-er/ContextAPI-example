import { Link } from "react-router-dom";

import React from 'react'
import { useContext } from "react";
import ProfileContext from './profileContext';

export default function Profilelist() {
    let users =useContext(ProfileContext)

    return (
        <div>
            <h1>Employee Profile</h1>
            <button className="btn btn-light text-light"> <Link to="/profileCreate"> Create Profile </Link></button>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Position</th>
                                            <th>Office</th>
                                            <th>Age</th>
                                            <th>Salary</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {
                                            users.profileList.map((obj) => {
                                                return(
                                             <tr>
                                                <td>{obj.name}</td>
                                                <td>{obj.position}</td>
                                                <td>{obj.office}</td>
                                                <td>{obj.age}</td>
                                                <td>{obj.salery}</td>      
                                                <td  > <Link to="/useredit/8"> edit profile</Link></td>
                                               
                                            </tr> 
                                                )
                                               
                                            })
                                        
                                        }
                                                                         
                                    </tbody>
                                </table>
                            </div>
                        </div>
        </div>
    )
}
