// my code 

//import React, { useRef, useState } from "react";
// import Header from "./Header";
// import { validate } from "../Utils/validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from "firebase/auth";
// import { auth } from "../Utils/firebase";
// import { BANNER } from "../Utils/constants";

// /* import {  updateProfile } from "firebase/auth"; */
// const Login = () => {
//   const [SingIn, setSignin] = useState(true);
//   const [errormsg, seterrormsg] = useState(null);
  
// /*   const name=useRef(null) */
//   const email = useRef(null);
//   const password = useRef(null);

//   const handleButtonClick = () => {
    

//     const message = validate(email.current.value, password.current.value);
   
//     seterrormsg(message);

//     //checking is there is erro in the sign in
//     if (message) return;

//     if (!SingIn) {
//       //signup login
//       createUserWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed up
//           const user = userCredential.user;
//           //console.log(user);

          
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           seterrormsg(errorCode + "-" + errorMessage);
//           // ..
//         });
//     } else {
//       //sign in logic
//       signInWithEmailAndPassword(
//         auth,
//         email.current.value,
//         password.current.value
//       )
//         .then((userCredential) => {
//           // Signed in
//           const user = userCredential.user;
//          // console.log(user);
         
//           // ...
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           seterrormsg(errorCode + "-" + errorMessage);
//           //console.log(errorCode+"-"+errorMessage)
//         });
//     }
//   };

//   //for Login Singup
//   const toogleSignin = () => {
//     setSignin(!SingIn);
//   };
//   return (
//     <>
//        <Header />

//       <div className="absolute ">
//         <img
//         className="h-screen w-screen object-cover md:h-auto"
//           src={BANNER}
//           alt="Banner"
//         />
//       </div>

//       <form
//         className="absolute p-12  bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80  h-auto "
//         onSubmit={(e) => e.preventDefault()}
//       >
//         <h1 className="text-white text-3xl py-4 font-bold">
//           {SingIn ? "Sign-in " : "Sign-up"}
//         </h1>
//         {!SingIn && (
//           <input
//             className="p-4 my-4 w-full bg-gray-800 rounded-lg "
//             type="tet"
//             placeholder="Fullname"
//           />
//         )}
//         <input
//           ref={email}
//           className="p-4 my-4 w-full bg-gray-800 rounded-lg "
//           type="email"
//           placeholder="Email"
//           value="Demo@gmail.com"
//         />

//         <input
//           ref={password}
//           className="p-4 my-4 w-full bg-gray-800 rounded-lg"
//           type="password"
//           placeholder="Password"
//           value="Demo@gmail.com"
//         />
//         <p className="text-red-500 text-s p-2">{errormsg}</p>
//         <button
//           className="p-4 my-4 bg-red-700 w-full rounded-lg "
//           onClick={handleButtonClick}
//         >
//           {SingIn ? "Sign-in " : "Sign-up"}
//         </button>
//         <p className="py-4 font-bold cursor-pointer " onClick={toogleSignin}>
//           {SingIn ? " New to Netflix ?   Sign-Up" : " Alreadt a user sign-in"}
//         </p>
//       </form>
//     </>
//   );
// };

// export default Login;



// for showing existing user
import React, { useRef, useState } from "react";
import Header from "./Header";
import { validate } from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { BANNER } from "../Utils/constants";

const Login = () => {
  const [SingIn, setSignin] = useState(true); // To toggle between sign-in and sign-up
  const [errormsg, seterrormsg] = useState(null);
  const [email, setEmail] = useState("Demo@gmail.com"); // Default demo email
  const [password, setPassword] = useState("Abcd@123456"); // Default demo password

  const handleButtonClick = () => {
    const message = validate(email, password); // Validate the inputs
    seterrormsg(message);

    if (message) return; // If there's an error, return early

    if (!SingIn) {
      // Sign-up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign-in logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrormsg(errorCode + "-" + errorMessage);
        });
    }
  };

  // Toggle between Sign-in and Sign-up
  const toggleSignin = () => {
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
        className="absolute p-12 bg-black w-full md:w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 h-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-white text-3xl py-4 font-bold">
          {SingIn ? "Sign-in " : "Sign-up"}
        </h1>
        {!SingIn && (
          <input
            className="p-4 my-4 w-full bg-gray-800 rounded-lg"
            type="text"
            placeholder="Fullname"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state on change
        />

        <input
          className="p-4 my-4 w-full bg-gray-800 rounded-lg"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update password state on change
        />
        <p className="text-red-500 text-s p-2">{errormsg}</p>
        <button
          className="p-4 my-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {SingIn ? "Sign-in" : "Sign-up"}
        </button>
        <p className="py-4 font-bold cursor-pointer" onClick={toggleSignin}>
          {SingIn ? "New to Netflix? Sign-Up" : "Already a user? Sign-in"}
        </p>
      </form>
    </>
  );
};

export default Login;
