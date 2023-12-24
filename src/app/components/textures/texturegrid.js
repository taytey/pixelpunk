'use client'

import {useEffect, useState} from "react";
import { createClient } from "@supabase/supabase-js";
import { XMarkIcon} from "@heroicons/react/20/solid";
import {AnimatePresence, motion} from "framer-motion";
import {HeartIcon, PlusIcon} from "@heroicons/react/24/outline";
import { Link, animateScroll as scroll } from "react-scroll";
import { doc,
    onSnapshot,
    updateDoc,
    setDoc,
    deleteDoc,
    collection,
    serverTimestamp,
    getDocs,
    query,
    where,
    orderBy,
    limit, } from "firebase/firestore";
import { db } from "../../../firebase-config"
import {Glow, GlowCapture} from "@codaworks/react-glow";

export default function TextureGrid() {

    const colletionRef = collection(db, 'texturepacks');

    const [ texturepacks, setTextures] = useState([]);
    const [ visibility, setVisibility] = useState(false);
    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [hovered, setHovered] = useState(null);
    const [ downloads, setDownloads ] = useState(0);
    const [ loading, setLoading ] = useState(null);

    useEffect(() => {
    }, [downloads])


    useEffect(() => {
        const q = query(
            colletionRef,
            //  where('owner', '==', currentUserId),
            where('thumbnail', '==', 'School1') // does not need index
            //  where('score', '<=', 100) // needs index  https://firebase.google.com/docs/firestore/query-data/indexing?authuser=1&hl=en
            // orderBy('score', 'asc'), // be aware of limitations: https://firebase.google.com/docs/firestore/query-data/order-limit-data#limitations
            // limit(1)
        );

        setLoading(true);
        // const unsub = onSnapshot(q, (querySnapshot) => {
        const unsub = onSnapshot(colletionRef, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setTextures(items);
            setLoading(false);
        });
        return () => {
            unsub();
        };

        // eslint-disable-next-line
    }, []);

    function otherTiles() {
        return texturepacks.filter(texturepack => texturepack.id !== hovered);
    }

    return(
        <main>
            <div>
                <div className="masonry sm:masonry-sm md:masonry-md m-10">
                    {texturepacks.map((texturepacks) => (
                        <div key={texturepacks.id} >
                            <button onMouseEnter={() =>  setHovered(texturepacks.id)} onMouseLeave={() => {setHovered(null)}} onClick={() => { setVisibility(true), setName(texturepacks.name), setThumbnail(texturepacks.thumbnail), setAuthor(texturepacks.author), setDescription(texturepacks.description) }}>
                                    <motion.div
                                        initial={{ opacity: 0}}
                                        animate={{opacity: 100}}
                                        transition={{ ease: "easeOut", duration: 1 }}

                                    >
                                        <div className="flex justify-center items-center">

                                            { hovered===texturepacks.id &&
                                                <motion.div className="text-neutral-300 absolute text-3xl z-50 font-extralight font-montserrat tracking-widest"
                                                            initial={{ opacity: 0 }}
                                                            animate={{ opacity: 100 }}
                                                            transition={{ ease: "easeOut", duration: 1}}
                                                >
                                                    {texturepacks.name}
                                                </motion.div>
                                            }
                                            <div className="grid gap-4">
                                                <img key={texturepacks.id}
                                                     className="p-2 hover:scale-105 hover:rounded-md opacity-100 hover:opacity-10 rounded-3xl hover:border-2 hover:border-neutral-200 border-neutral-700 transition-all duration-500"
                                                     src={texturepacks.thumbnail} alt={texturepacks.name}/>

                                            </div>
                                        </div>
                                    </motion.div>
                            </button>
                        </div>
                    ))}

                    <AnimatePresence>

                        {visibility &&
                            <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ ease: "easeInOut", duration: 0.5}}
                                >

                                    <div className=" flex items-center justify-center">
                                        <div className="border-2 border-neutral-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 backdrop-blur-2xl bg-neutral-950/90 transition-all duration-500 inset-0 z-50 drop-shadow-2xl rounded-2xl">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h1 className="text-neutral-400 text-3xl tracking-widest pt-6 font-montserrat font-light select-none pl-11">{name}</h1>
                                                    <h1 className="text-neutral-600 text-xl tracking-widest font-montserrat font-light select-none pl-11">by {author}</h1>
                                                </div>

                                                <button onClick={() => {setVisibility(false)}}>
                                                    <XMarkIcon className="hover:bg-neutral-800 rounded-3xl h-6 w-6 m-5 opacity-10 hover:opacity-50 text-neutral-300 transition-all duration-500"/>
                                                </button>
                                            </div>
                                            <div className="flex justify-between">
                                                <img width="700" className=" border-neutral-700 rounded-xl opacity-75 hover:opacity-100 ml-10 mt-5 drop-shadow-2xl shadow-black transition-all duration-1000" src={thumbnail} alt="test"/>
                                                <p className="text-neutral-400 tracking-widest font-montserrat font-light text-xl m-5 select-none">{description}</p>
                                            </div>
                                            <div className="flex justify-evenly absolute right-0 bottom-5 space-x-40 mr-10">
                                                <HeartIcon className="hover:text-[#60d394] h-8 mt-1 tracking-widest font-montserrat font-extralight text-neutral-500 bg-opacity-50 rounded-xl transition-all duration-500"/>
                                                <PlusIcon
                                                    className="hover:text-[#60d394] h-8 mt-1 tracking-widest font-montserrat font-extralight text-neutral-500 bg-opacity-50 rounded-xl transition-all duration-500"/>

                                                <button
                                                    className="select-none relative inline-flex items-center justify-center overflow-hidden text-sm font-medium text-gray-900 rounded-lg group hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
<span
    className=" duration-300 relative px-5 py-2.5 transition-all ease-in hover:bg-[#60d394] hover:text-black rounded-md text-neutral-500">
D O W N L O A D
</span>

                                                </button>

                                            </div>

                                        </div>
                                    </div>


                                </motion.div>

                        }

                    </AnimatePresence>


                </div>
            </div>
        </main>
    )
}