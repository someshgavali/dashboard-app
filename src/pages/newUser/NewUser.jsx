import React from "react";
import "./NewUser.css";
import { Link } from "react-router-dom";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="NewUserItem">
          <label>Username</label>
          <input type="text" placeholder="somesh" />
        </div>
        <div className="NewUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="somesh Gavali" />
        </div>
        <div className="NewUserItem">
          <label>Email</label>
          <input type="email" placeholder="someshgavali1996@gmail.com" />
        </div>
        <div className="NewUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="NewUserItem">
          <label>Contact</label>
          <input type="text" placeholder="7066779023" />
        </div>
        <div className="NewUserItem">
          <label>Address</label>
          <input type="text" placeholder="Pune" />
        </div>
        <div className="NewUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        {/* <button className="newUserButton">Create</button> */}
      </form>
      <Link to="/">
        <button
          className="newUserButton"
          onClick={() => {
            alert("Hello User Your Account has been Created");
          }}
        >
          Create
        </button>
      </Link>
    </div>
  );
}
