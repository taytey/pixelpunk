import {AnimatePresence, motion} from "framer-motion";
import Image from "next/image";

export default function SearchHits({hit}) {
    return(
        <AnimatePresence>
        <motion.div
            initial={{y: 60, opacity: 0}}
            animate={{y: 0, opacity: 100}}
            transition={{ease: "easeInOut", duration: 1}}
        >
            <motion.div
                whileHover={{scale: 1.03}}
                whileTap={{scale: 0.8}}
                transition={{ease: "easeOut", duration: 0.3}}
            >


                <div
                    className=" grid-cols-4 border border-dashed rounded-2xl m-8 p-2 flex-col border-neutral-700 hover:border-neutral-300 transition-all duration-500">
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 100}}
                        transition={{ease: "easeInOut", duration: 1, delay: 0.5}}
                    >
                        <Image className="opacity-30 rounded-xl hover:opacity-70 transition-all duration-1000" src={hit.thumbnail} alt="test" width={300} height={300}/>


                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
        </AnimatePresence>

)
}