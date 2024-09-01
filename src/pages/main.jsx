import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Item from "./components/item";
import Home from "./home";
const logout = () => {
  auth.signOut().then(() => {
    window.location.href = "/login";
  });
}


export default function Main() {
    const [userDetails, setUserDetails] = useState(null);
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async(user) => {
            if (user) {
                console.log(user);
                const docRef = doc(db, 'users', user.uid);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setUserDetails(docSnap.data());
                    console.log(userDetails);
                } else {
                    console.log('No such document!');
                }
            }
        });
        return unsubscribe;
        
    },[]);

    return (
        
    <div className="flex flex-col min-h-screen">

      <Home></Home>

      <main className="px-32 bg-slate-100 ">
        {/* {userDetails && <h1>Hi, {userDetails.name} you are logged in.</h1>}
        {userDetails && <h1>{userDetails.email}</h1>} */}
        <div className="lg:grid md:grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4    p-5 w-full bg-slate-200 ">
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          <Item></Item>
          
        </div>
      </main>

      <footer className="bg-gray-300 p-4">
        <p className="text-center">© 2024 SportCart. All rights reserved.</p>
      </footer>
    </div>
  );
}
