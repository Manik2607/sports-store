import React from "react";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";
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
      <header className="bg-blue-800 px-20">
        <div className="flex justify-between items-center p-4">
          <h1 className="text-3xl text-white font-bold">SportCart</h1>
          <div className="flex">
            <input
              type="text"
              placeholder="Search"
              className="px-2 py-1 border border-gray-300 rounded"
            />
            <button className="bg-blue-500 text-white px-4 py-2 rounded">
              Search
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded ml-4" onClick={logout}>logout</button>
          </div>
        </div>
      </header>


      <main className="flex-grow p-4">
        {userDetails && <h1>Hi, {userDetails.name} you are logged in.</h1>}
        {userDetails && <h1>{userDetails.email}</h1>}

      </main>

      <footer className="bg-gray-200 p-4">
        <p className="text-center">© 2022 SportCart. All rights reserved.</p>
      </footer>
    </div>
  );
}
