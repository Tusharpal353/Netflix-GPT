import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { BANNER } from "../Utils/constants";

/* import {  updateProfile } from "firebase/auth"; */
const Login = () => {
  const [SingIn, setSignin] = useState(true);
  const [errormsg, seterrormsg] = useState(null);
  
/*   const name=useRef(null) */
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    

    const message = validate(email.current.value, password.current.value);
   
    seterrormsg(message);

    //checking is there is erro in the sign in
    if (message) return;

    if (!SingIn) {
      //signup login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          //console.log(user);

          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + "-" + errorMessage);
          // ..
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
         // console.log(user);
         
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + "-" + errorMessage);
          //console.log(errorCode+"-"+errorMessage)
        });
    }
  };

  //for Login Singup
  const toogleSignin = () => {
    setSignin(!SingIn);
  };
  return (
    <>
       <Header />

      <div className="absolute ">
        <img
        className="h-screen w-screen object-cover md:h-auto"
          src={BANNER}
          alt="Banner"
        />
      </div>

      <form
        className="absolute p-12  bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80  h-auto "
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl py-4 font-bold">
          {SingIn ? "Sign-in " : "Sign-up"}
        </h1>
        {!SingIn && (
          <input
            className="p-4 my-4 w-full bg-gray-800 rounded-lg "
            type="tet"
            placeholder="Fullname"
          />
        )}
        <input
          ref={email}
          className="p-4 my-4 w-full bg-gray-800 rounded-lg "
          type="email"
          placeholder="Email"
        />

        <input
          ref={password}
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <p className="text-red-500 text-s p-2">{errormsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg "
          onClick={handleButtonClick}
        >
          {SingIn ? "Sign-in " : "Sign-up"}
        </button>
        <p className="py-4 font-bold cursor-pointer " onClick={toogleSignin}>
          {SingIn ? " New to Netflix ?   Sign-Up" : " Alreadt a user sign-in"}
        </p>
      </form>
    </>
  );
};

export default Login;
