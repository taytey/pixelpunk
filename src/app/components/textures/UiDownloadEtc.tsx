import { AnimatePresence, motion } from "framer-motion"
import {HeartIcon, PlusIcon, ArrowDownTrayIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UiDownloadEtc({downloadLink}) {

const [hovered, setHovered] = useState(false);

useEffect(() => {
    setHovered
},)

    return (

        <AnimatePresence>

<motion.div 
onMouseEnter={() => setHovered(true)}
onMouseLeave={() => setHovered(false)}
initial={{x: 180, opacity:0}}
animate={{x: 0, opacity: 1}}
exit={{ x: 180, opacity: 0}}
transition={{ease: "easeInOut", duration: 0.1}}
className="flex flex-col justify-center items-center fixed right-0 bottom-0 z-50 space-y-10  p-5 rounded-2xl opacity-95 hover:opacity-100 transition-all duration-500 ">
<AnimatePresence>
{ hovered &&

<div>


<div
            className=" mb-10 hover:shadow-none rounded-md hover:border-opacity-0 transition-all duration-500">
            <motion.div
                
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{delay: 0.5, ease: "easeInOut"}}
                
            >
                <motion.div
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                >

                
                <HeartIcon
                    className="hover:text-[#60d394] p-2 h-10 tracking-widest  font-montserrat font-extralight text-neutral-500 bg-opacity-50 rounded-xl transition-all duration-500"/>
                    </motion.div>
            </motion.div>
        </div>

        <div
            className="  border-white rounded-md hover:border-opacity-0 transition-all duration-500">
            <motion.div
           initial={{opacity: 0}}
           animate={{opacity: 1}}
           exit={{opacity: 0}}
           transition={{delay: 0.3, ease: "easeInOut"}}

                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
            >
                <motion.div
                whileHover={{scale: 1.2}}
                whileTap={{scale: 0.9}}
                >
                <PlusIcon
                    className="hover:text-[#60d394] p-2 h-10 tracking-widest font-montserrat font-extralight text-neutral-500 bg-opacity-50 transition-all duration-500"/>
                    </motion.div>

            </motion.div>
        </div>
        </div>



}
</AnimatePresence>

        <div
            
            className="shadow-2xl shadow-black hover:shadow-none border-white rounded-md hover:border-opacity-0 transition-all duration-500">
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{delay: 0.7, ease: "easeInOut"}}

            whileHover={{scale: 1}}
            whileTap={{scale: 0.9}}
        >
             <Link href={downloadLink}>
                <div className="flex">

                
             <ArrowDownTrayIcon
             
                    className="hover:text-[#60d394] p-2 h-10 tracking-widest  font-montserrat font-extralight text-neutral-500 bg-opacity-50 rounded-xl transition-all duration-500"/>
    
                    </div>
            </Link>
        </motion.div>
        </div>
    </motion.div>

    </AnimatePresence>

        
    )
}