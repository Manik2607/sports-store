import React, { useState } from 'react';
import {auth} from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            const user = auth.currentUser;
            console.log(user);
            console.log(user.email);
            window.location.href = '/';
            
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96">

            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                    <label className="block mb-2">Email:</label>
                    <input
                        type="email"
                        value={email}
                        placeholder='Email'
                        pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                        onChange={handleEmailChange}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2">Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder='Password'
                        className="w-full border border-gray-300 rounded px-3 py-2"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Login
                </button>
            </form>
            </div>
        </div>
    );
};

export default Login;