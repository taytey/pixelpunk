'use client'

import {useState} from "react";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import { auth } from '../../firebase-config'

export default function Signup() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function signInWithEmailPassword() {
        // [START auth_signin_password]
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
        // [END auth_signin_password]
    }




    return(
        <div className="grid grid-cols-2 space-x-40 justify-end">
            <div className="">
                <h1 className="ml-10 absolute z-40 top-1/2 text-6xl text-white font-montserrat font-bold tracking-widest">Welcome to <span className="tracking-tighter select-none font-black bg-[#60d394] text-black">PIXELPUNK</span></h1>
                <img src="/54.png" className="opacity-30 absolute rounded-3xl" alt="test"/>
            </div>
            <div>
                <div className="mt-40 pt-40 ml-20">
                    <form>
                    <input
                        onChange={(e) => {setUsername(e.target.value)}}
                        className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"
                        placeholder="Username"/>
                    <input
                        onChange={(e) => {setEmail(e.target.value)}}
                        className="bg-black mt-5 focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"
                        placeholder="Email"/>
                    <input
                        onChange={(e) => {setPassword(e.target.value)}}
                        className="bg-black mt-5 focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"
                        placeholder="Password"/>
                    <button
                        onClick={signInWithEmailPassword}
                        type="submit"
                        className="select-none relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span
    className="mt-10 duration-300 text-2xl tracking-widest font-light relative px-5 py-2.5 transition-all ease-in hover:bg-[#60d394] hover:text-black rounded-md text-neutral-500">
SIGNUP
</span>
                    </button>
                    </form>
                </div>


            </div>
        </div>

)
}