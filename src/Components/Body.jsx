import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";

import { auth } from "../Utils/firebase";
import {addUser, removeUser} from "../Utils/userSlice"
import { useDispatch } from "react-redux";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  const dispatch = useDispatch();
  
useEffect(()=>{
  
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName} = user;
      dispatch(addUser({uid:uid, email:email, displayName:displayName}))
     

      // ...
    } else {
      dispatch(removeUser());
     
      // User is signed out
      // ...
    }
  });
},[])

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
