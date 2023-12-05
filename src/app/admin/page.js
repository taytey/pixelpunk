'use client'

import { PlusIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import {XMarkIcon} from "@heroicons/react/20/solid";
import prisma from "prisma/prisma-client/index-browser";

export default function Admin() {
    const [visibility, setVisibility ] = useState(false);

    const [name, setName] = useState('');

//Trying to get data from input to variables and into table on vercel using prisma





    return(
        <div>
            <div className=" pt-40 pl-40">
                <h1 className="font-montserrat tracking-widest font-bold text-5xl select-none">Admin</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4 m-20" onClick={() => {setVisibility(true)}}>
                <div className="hover:opacity-50 hover:border-4 bg-neutral-400 h-96 w-96 flex items-center justify-center opacity-75 rounded-lg hover:scale-110 transition-all duration-500">
                    <PlusIcon className="h-20 text-white"/>
                </div>
            </div>
            { visibility &&
                <div className="absolute flex justify-between bg-neutral-950/50 h-screen w-screen">
                    <XMarkIcon className=" text-white"/>
                    <div>
                        <div className="flex justify-center items-center">
                            <h1 className="text-5xl font-montserrat tracking-widest m-10 select-none font-bold">Add a new <span className="hover:text-black transition-all duration-200 hover:bg-neutral-200">Texturepack</span></h1>
                        </div>
                        <div className="flex w-screen items-center justify-center">
                            <form className="flex gap-4">
                                <input className="bg-neutral-800 select-none tracking-widest font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"  placeholder="Name"/>
                                <input className="bg-neutral-800 select-none tracking-widest font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10" placeholder="Thumbnail"/>
                                <button type="submit"><PlusIcon className="select-none h-10 text-white hover:bg-neutral-200 transition-all duration-200 hover:text-black"/></button>
                            </form>

                        </div>
                    </div>
                </div>
            }

        </div>
    )
}