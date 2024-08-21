import React from "react";
import usericon from "../Images/Header/ProfileIMG.png";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { onAuthStateChanged } from "firebase/auth";

import { addUser, removeUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGE } from "../Utils/constants";
import { toogleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";
const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");

        // ...
      } else {
        dispatch(removeUser());
        navigate("/");

        // User is signed out
        // ...
      }
    });
    //will be clled when comp unmountes
    return () => unsubscribe();
  }, []);

  //for GPT
  const handleSearchClick = () => {
    //toogle gpt search
    dispatch(toogleGptSearchView());
  };

  const handleLanguageChange = (e)=>{
    dispatch(changeLanguage(e.target.value));

  }
  return (
    <>
      <div className="absolute bg-gradient-to-b from-black w-full z-10 flex justify-between">
        {/* NETFLIX LOGO */}
        <img className="w-44 px-8 py-2" src={LOGO} alt="logo" />

        <div className="flex p-2 ">
          <select className="p-2 bg-gray-600 text-white m-2" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map(lang=><option key={lang.identifier}  value={lang.identifier}>{lang.name}</option>)}
           
            
          </select>
          {/* //<div className="text-white bg-purple-800 flex p-4  rounded-lg">Gpt Search</div> */}
          <button
            className="text-white bg-purple-800 flex p-4 mx-2 rounded-lg font-bold"
            onClick={handleSearchClick}
          >
            GPT Search
          </button>
          <img className="w-10 h-10 m-2" src={usericon} alt="user img" />
          <button onClick={handleSignOut} className="  font-bold text-white">
            Sign Out
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
