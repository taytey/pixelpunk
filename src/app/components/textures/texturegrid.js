'use client'

import {useEffect, useState} from "react";
import { createClient } from "@supabase/supabase-js";
import { XMarkIcon} from "@heroicons/react/20/solid";
import {AnimatePresence, motion} from "framer-motion";
import {PlusIcon} from "@heroicons/react/24/outline";

const supabase = createClient("https://vkufsrztvuwnrboaridj.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrdWZzcnp0dnV3bnJib2FyaWRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA3MTk5MTAsImV4cCI6MjAxNjI5NTkxMH0.U9HDIv1GgQnz_6iDPjBpm38z4_NiQtjiZnWF7N8WZ8U");

export default function TextureGrid() {

    const [ texturepacks, setTextures] = useState([]);
    const [ visibility, setVisibility] = useState(false);
    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [hovered, setHovered] = useState(null);

    useEffect(() => {
        getTextures();

    }, []);

    async function getTextures() {
        const {data} = await supabase.from('Texturepacks').select('thumbnail, id, name, author, description');
        setTextures(data);
    }

    return(
        <main>
            <div>
                <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4">
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
                                                    <img key={texturepacks.id}  className="hover:scale-105 h-auto max-w-full hover:rounded-md opacity-70 hover:opacity-10 hover:border-2 hover:border-white border-neutral-700 transition-all duration-500"  src={texturepacks.thumbnail} alt={texturepacks.name}/>
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
                                    transition={{ ease: "easeInOut", duration: 0.2}}
                                >
                                    <div className="flex items-center justify-center ">
                                        <div className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 backdrop-blur-2xl bg-neutral-950/90 transition-all duration-500 inset-0 z-50 drop-shadow-2xl rounded-2xl">
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
                                                <img width="700" className="border-2 border-neutral-700 rounded-xl opacity-75 hover:opacity-100 ml-10 mt-5 drop-shadow-lg hover:drop-shadow-2xl shadow-black transition-all duration-1000" src={thumbnail} alt="test"/>
                                                <p className="text-neutral-400 tracking-widest font-montserrat font-light text-xl m-5 select-none">{description}</p>
                                            </div>
                                            <div className="flex justify-end absolute right-0 bottom-5">
                                                <PlusIcon className="ml-10 h-8 tracking-widest font-montserrat font-extralight hover:bg-neutral-800 text-neutral-500 hover:text-neutral-200 bg-opacity-50 rounded-3xl py-1 px-4 transition-all duration-500"/>
                                                <button className="ml-10 mr-4 tracking-widest font-montserrat font-extralight hover:bg-neutral-800 text-neutral-500 hover:text-neutral-200 bg-opacity-50 rounded-3xl py-1 px-4 transition-all duration-500">Download</button>
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