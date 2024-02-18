'use client'
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import WebsiteSearch from "./WebsiteSearch";
import {AnimatePresence, motion} from "framer-motion";

export default function SearchIcon () {

    const [open, setOpen ] = useState(false);

    return (
        <div className="z-50">
            <button onClick={() => {setOpen(true)}}>
                <motion.div className="fixed bottom-0 m-6 ml-7 z-50"
                    whileHover={{scale: 1.2}}
                    whileTap={{scale: 0.8}}
                    transition={{ease: "easeOut", duration: 0.3}}
                >
                    <MagnifyingGlassIcon className="h-8 w-6 text-neutral-500 hover:text-[#60D394] transition-all duration-500"/>
                </motion.div>

            </button>
            <AnimatePresence>
                { open &&
                    <WebsiteSearch open={open} setOpen={setOpen}/>
                }
            </AnimatePresence>
        </div>
    )

}