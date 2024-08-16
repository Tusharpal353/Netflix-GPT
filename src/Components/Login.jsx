import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
/* import {  updateProfile } from "firebase/auth"; */
const Login = () => {
  const [SingIn, setSignin] = useState(true);
  const [errormsg, seterrormsg] = useState(null);
  const navigate = useNavigate();
/*   const name=useRef(null) */
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //validate the form data
    //checkVlidation(email,password)

    //console.log(email.current.value);
    //console.log(password.current.value);

    const message = validate(email.current.value, password.current.value);
    //console.log(message)
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
          console.log(user);

          //implementing to show user name
          
        /*   updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            }); */
          navigate("/browse"); //to navigate the user to after login
          // ...
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
          console.log(user);
          navigate("/browse"); //to navigate the user to after login
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

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg"
          alt="Banner"
        />
      </div>

      <form
        className="absolute p-12  bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 "
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
