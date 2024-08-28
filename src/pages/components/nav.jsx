import React from "react";
import { useEffect, useState } from "react";
import { getDoc, doc } from "firebase/firestore";
import {auth,db} from "../../firebase/firebase";
import CartIcon from "../../Shopping cart.svg";

const logout = () => {
  auth.signOut().then(() => {
    window.location.href = "/login";
  });
}

export default function Nav(){
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
        <nav className="bg-slate-800">
            <div className="flex px-28">
                <h1 className="text-3xl text-white font-bold py-5">SportCart</h1>
                <div className="w-full"></div>
                <div className="flex flex-row">
                    {userDetails && <img src={CartIcon} alt="cart" className="w-7 h-7 m-auto"/>}
                    {userDetails && <h1 className="text-white min-w-40 text-xl my-5 px-4 py-2 rounded ml-4">{userDetails.name}</h1>}
                    {userDetails && <button className="bg-red-500 text-white my-5 px-4 py-2 rounded ml-4" onClick={logout} >logout</button>}
                    
                </div>
            </div>
        </nav>
    )
}