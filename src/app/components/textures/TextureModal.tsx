import {AnimatePresence, motion} from "framer-motion";
import { XMarkIcon} from "@heroicons/react/20/solid";
import Image from 'next/image'
import {useEffect} from "react";
import Link from "next/link";
import UiDownloadEtc from "./UiDownloadEtc";
import TextureViewer from "./TextureViewer";



export default function TextureModal ({setVisibility, name, author, thumbnail, description, uploadDate, setUploadDate, downloadLink}) {


    useEffect(() => {
        downloadLink;
   })


    return (


        <div className="">
                           

                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{ease: "easeInOut", duration: 0.5}} 
                    >
                        <div className="overflow-auto fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 inset-0 h-screen w-screen z-50 pl-40 pr-40 pt-10 backdrop-blur-2xl bg-neutral-900/95 transition-all duration-500">

                        
                    <div className="flex justify-center">
                        <div>
                            <h1 className="flex justify-center text-neutral-300 text-5xl tracking-widest pt-6 font-pixel2 font-light select-none pl-11">{name}</h1>
                            <h1 className="flex justify-center text-neutral-600 text-2xl pt-4 tracking-widest font-pixel2 font-light select-none pl-11">by {author}</h1>
                        </div>
                        
                        <motion.div
                            whileHover={{scale: 1.2}}
                            whileTap={{scale: 0.8}}
                            className="absolute right-0 mr-20 mt-10"
                        >
                            <button onClick={() => {
                                setVisibility(false)
                            }}>
                                <XMarkIcon
                                    className="hover:bg-neutral-800 right-0 hover:text-[#60D394] rounded-3xl h-6 w-6 opacity-10 hover:opacity-100 text-neutral-300 transition-all duration-500"/>
                            </button>
                        </motion.div>
                    </div>
                    <TextureViewer />
                    <div className="flex justify-between mt-10 ">
                        <div className="flex overflow-scroll ">
                            <Image
                                objectFit="fit"
                                alt="test"
                                sizes="(min-width: 500px) 50vw, 100vw"
                                src={thumbnail}
                                width={800}
                                height={800}
                                priority
                                className="border-neutral-700 rounded-xl opacity-75 hover:opacity-100 ml-10 mt-5 drop-shadow-2xl shadow-black transition-all duration-1000"
                            />
                             <Image
                                objectFit="fit"
                                alt="test"
                                sizes="(min-width: 500px) 50vw, 100vw"
                                src={thumbnail}
                                width={800}
                                height={800}
                                priority
                                className="border-neutral-700 rounded-xl opacity-75 hover:opacity-100 ml-10 mt-5 drop-shadow-2xl shadow-black transition-all duration-1000"
                            />
                             <Image
                                objectFit="fit"
                                alt="test"
                                sizes="(min-width: 500px) 50vw, 100vw"
                                src={thumbnail}
                                width={800}
                                height={800}
                                priority
                                className="border-neutral-700 rounded-xl opacity-75 hover:opacity-100 ml-10 mt-5 drop-shadow-2xl shadow-black transition-all duration-1000"
                            />
                             <Image
                                objectFit="fit"
                                alt="test"
                                sizes="(min-width: 500px) 50vw, 100vw"
                                src={thumbnail}
                                width={800}
                                height={800}
                                priority
                                className="border-neutral-700 rounded-xl opacity-75 hover:opacity-100 ml-10 mt-5 drop-shadow-2xl shadow-black transition-all duration-1000"
                            />
                           

                          
                        </div>

                   
                    </div>
                    <div className="flex space-x-20">

                    <p className="text-neutral-400 tracking-widest font-pixel font-light text-xl p-20 select-none ">{description}</p>

                       </div>

                   </div>
                    <AnimatePresence>
                        <UiDownloadEtc downloadLink={downloadLink}/>
                        </AnimatePresence>

                </motion.div>
        </div>
)
}