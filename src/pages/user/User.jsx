import React from "react";
import "./User.css";
import somesh from "../../assets/somesh.jpeg";
import { MdPermIdentity } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { MdPublish } from "react-icons/md";
import { Link } from "react-router-dom";

export default function User() {
  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={somesh} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Somesh Gavali</span>
              <span className="userShowUserTitle">Software Engineer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <MdPermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">Somesh</span>
            </div>
            <div className="userShowInfo">
              <SlCalender className="userShowIcon" />
              <span className="userShowInfoTitle">12/05/1996</span>
            </div>
            <span className="userShowTitle">Contact Details</span>

            <div className="userShowInfo">
              <BsTelephone className="userShowIcon" />
              <span className="userShowInfoTitle">7066779023</span>
            </div>
            <div className="userShowInfo">
              <AiOutlineMail className="userShowIcon" />
              <span className="userShowInfoTitle">
                someshgavali1996@gmail.com
              </span>
            </div>
            <div className="userShowInfo">
              <GoLocation className="userShowIcon" />
              <span className="userShowInfoTitle">Pune</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="Somesh"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="someshgavali1996@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Contact No</label>
                <input
                  type="text"
                  placeholder="7066779023"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Location</label>
                <input
                  type="text"
                  placeholder="Pune"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src={somesh} alt="" className="userUpdateImg" />
                <label htmlFor="file">
                  <MdPublish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
