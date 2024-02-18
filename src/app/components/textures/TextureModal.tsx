import {motion} from "framer-motion";
import { XMarkIcon} from "@heroicons/react/20/solid";
import {HeartIcon, PlusIcon} from "@heroicons/react/24/outline";
import Image from 'next/image'
import {useEffect} from "react";


export default function TextureModal ({setVisibility, name, author, thumbnail, description, uploadDate, setUploadDate}) {



    return (


        <div className=" flex items-center justify-center">

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.5}}
                    className="shadow-2xl border-neutral-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-4/6 backdrop-blur-2xl bg-neutral-900/95 transition-all duration-500 inset-0 drop-shadow-2xl rounded-2xl">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-neutral-400 text-3xl tracking-widest pt-6 font-pixel2 font-light select-none pl-11">{name}</h1>
                            <h1 className="text-neutral-600 text-xl tracking-widest font-pixel2 font-light select-none pl-11">by {author}</h1>
                        </div>
                        <motion.div
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                        >
                            <button onClick={() => {
                                setVisibility(false)
                            }}>
                                <XMarkIcon
                                    className="hover:bg-neutral-800 hover:text-[#60D394] rounded-3xl h-6 w-6 m-8 opacity-10 hover:opacity-100 text-neutral-300 transition-all duration-500"/>
                            </button>
                        </motion.div>
                    </div>
                    <div className="flex justify-between">
                        <div className=" grid">
                            <Image
                                objectFit="fit"
                                alt="test"
                                sizes="(min-width: 808px) 50vw, 100vw"
                                src={thumbnail}
                                width={500}
                                height={500}
                                priority
                                className="border-neutral-700 rounded-xl opacity-75 hover:opacity-100 ml-10 mt-5 drop-shadow-2xl shadow-black transition-all duration-1000"
                            />
                            <h1 className="ml-10 mt-5 font-pixel2 text-neutral-600 text-lg select-none">Uploaded
                                on:<span
                                    className="text-[#60D394]"> {uploadDate}</span></h1>

                            <h1 className="ml-10 font-pixel2 text-neutral-600 text-lg select-none">Downloads:<span
                                className="text-[#60D394]"> 1902</span></h1>

                            <h1 className="ml-10 font-pixel2 text-neutral-600 text-lg select-none">Likes:<span
                                className="text-[#60D394]"> 23</span></h1>


                        </div>


                        <p className="text-neutral-400 tracking-widest font-pixel font-light text-xl m-5 select-none">{description}</p>
                    </div>
                    <div className="flex justify-evenly absolute right-0 bottom-5 space-x-40 mr-10">
                        <div
                            className="shadow-2xl shadow-black hover:shadow-none border-2 border-dashed border-opacity-10 border-white rounded-md hover:border-opacity-0 transition-all duration-500">
                            <motion.div
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.9}}
                            >
                                <HeartIcon
                                    className="hover:text-[#60d394] p-2 h-12 tracking-widest  font-montserrat font-extralight text-neutral-500 bg-opacity-50 rounded-xl transition-all duration-500"/>
                            </motion.div>
                        </div>
                        <div
                            className="shadow-2xl shadow-black hover:shadow-none border-2 border-dashed border-opacity-10 border-white rounded-md hover:border-opacity-0 transition-all duration-500">
                            <motion.div
                                whileHover={{scale: 1.2}}
                                whileTap={{scale: 0.9}}
                            >
                                <PlusIcon
                                    className="hover:text-[#60d394] p-2 h-12 tracking-widest font-montserrat font-extralight text-neutral-500 bg-opacity-50 transition-all duration-500"/>

                            </motion.div>
                        </div>
                        <motion.div
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.9}}
                        >
                            <button
                                className="shadow-2xl shadow-black hover:shadow-none transition-all duration-1000 focus:outline-0 outline-none select-none relative inline-flex items-center justify-center overflow-hidden text-sm text-gray-900 rounded-lg group hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
                                                    <span
                                                        className="font-pixel2 outline-0 focus:outline-none border-2 border-dashed border-white border-opacity-10 text-md tracking-widest duration-300 relative px-10 py-3 transition-all ease-in hover:bg-[#60d394] hover:text-black rounded-md text-neutral-500">
                                                    DOWNLOAD
                                                    </span>
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
        </div>
)
}