import React from "react";
import usericon from "../Images/Header/ProfileIMG.png";
import { auth } from "../Utils/firebase"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {  onAuthStateChanged } from "firebase/auth";

import {addUser, removeUser} from "../Utils/userSlice"
import { useDispatch } from "react-redux";
import   { useEffect } from "react";
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleSignOut = () => {


    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }

  useEffect(()=>{
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName}));
        navigate("/browse")
       
  
        // ...
      } else {
        dispatch(removeUser());
        navigate("/")
       
        // User is signed out
        // ...
      }
    });
  },[])


  return (
    <>
      <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
        <img
          className="w-44 px-8 py-2"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />

        <div className="flex p-2 ">
          <img
            className="w-10 h-10 m-2"
            src={usericon}
            alt="user img"
          />
          <button onClick={handleSignOut} className="  font-bold text-white" >Sign Out</button>
        </div>
      </div>
    </>
  );
};

export default Header;
