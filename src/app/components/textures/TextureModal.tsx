import {motion} from "framer-motion";
import { XMarkIcon} from "@heroicons/react/20/solid";
import {HeartIcon, PlusIcon} from "@heroicons/react/24/outline";


export default function TextureModal ({setVisibility, name, author, thumbnail, description}) {
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "easeInOut", duration: 0.5}}
        >

            <div className=" flex items-center justify-center">
                <div
                    className="border-2 border-neutral-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 backdrop-blur-2xl bg-neutral-950/90 transition-all duration-500 inset-0 z-50 drop-shadow-2xl rounded-2xl">
                    <div className="flex justify-between">
                        <div>
                            <h1 className="text-neutral-400 text-3xl tracking-widest pt-6 font-montserrat font-light select-none pl-11">{name}</h1>
                            <h1 className="text-neutral-600 text-xl tracking-widest font-montserrat font-light select-none pl-11">by {author}</h1>
                        </div>

                        <button onClick={() => {
                            setVisibility(false)
                        }}>
                            <XMarkIcon
                                className="hover:bg-neutral-800 rounded-3xl h-6 w-6 m-5 opacity-10 hover:opacity-50 text-neutral-300 transition-all duration-500"/>
                        </button>
                    </div>
                    <div className="flex justify-between">
                        <img width="700"
                             className=" border-neutral-700 rounded-xl opacity-75 hover:opacity-100 ml-10 mt-5 drop-shadow-2xl shadow-black transition-all duration-1000"
                             src={thumbnail} alt="test"/>
                        <p className="text-neutral-400 tracking-widest font-montserrat font-light text-xl m-5 select-none">{description}</p>
                    </div>
                    <div className="flex justify-evenly absolute right-0 bottom-5 space-x-40 mr-10">
                        <HeartIcon
                            className="hover:text-[#60d394] h-8 mt-1 tracking-widest font-montserrat font-extralight text-neutral-500 bg-opacity-50 rounded-xl transition-all duration-500"/>
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
    )
}