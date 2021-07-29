import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function StudentProfile() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
      axios.get("http://localhost:4000/student-profile")
      .then(response =>{
        setUsers(response.data);
      })
      .catch(err =>{
        console.log(err);
      })
    })
    return (
        <div className="container-box">
        <div className="studentCard">
        {users.map((user, index) =>{
          return(
              <div className="studentCardItem">
                <img src={user.profile_pic} alt="student" key={index}/>
                <div className="studentName">{user.user_name}</div>
              </div>
            )
        })}
        </div> 
        </div>
    )
}
