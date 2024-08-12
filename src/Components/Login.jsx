import React, { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [SingIn, setSignin]=useState(true)
  const toogleSignin = ()=>{
  setSignin(!SingIn)
  
  };
  return <>


    <Header />

    <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg" alt="Banner" />
    </div>

    <form className="absolute p-12  bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80" >
      <h1 
      className="text-white text-3xl py-4 font-bold">{SingIn ? "signin " : "signup"}</h1>
      <input 
      className="p-4 my-4 w-full bg-gray-800 rounded-lg " type="email" placeholder="Email" />
      <input 
      className="p-4 my-4 w-full bg-gray-800 rounded-lg" type="password" placeholder="Password" />
      <button 
      className="p-4 my-4 bg-red-700 w-full rounded-lg">Sign-IN</button>
      <p 
      className="py-4 font-bold cursor-pointer " onClick={toogleSignin}>New to Netflix ? {SingIn ? "Sign-Up" :"sign-in"}  </p>
    </form>
  </>;
};

export default Login;
