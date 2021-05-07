import { Link } from "react-router-dom";

import React from 'react'
import { useContext } from "react";
import UserContext from "./userContext";

export default  function Userlist() {
    let users =useContext(UserContext)
    return (
        <div>
            <h3>User List</h3>
            <button className="btn btn-light text-light"> <Link to="/usercreate"> Create User </Link></button>
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
                                            users.userList.map((obj) => {
                                                return(
                                             <tr>
                                                <td>{obj.name}</td>
                                                <td>{obj.position}</td>
                                                <td>{obj.office}</td>
                                                <td>{obj.age}</td>
                                                <td>{obj.salery}</td>      
                                                <td  > <Link to="/useredit/8"> edit user </Link></td>
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


