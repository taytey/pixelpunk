'use client'
import { useState} from "react";
import TexturepackModal from "../components/admin/TexturepackModal";
import SkinsModal from "../components/admin/skinsModal";
import CreateButtons from "../components/admin/CreateButtons";
import {AnimatePresence} from "framer-motion";


export default function Admin({user}) {
    const [texturepackVisibility, setTexturepackVisibility ] = useState(false);
    const [skinVisibility, setSkinVisibility] = useState(false);

    const handleTexturepackVisibility = () => {
        setTexturepackVisibility(false);
     }

     const handleSkinsVisibility = () => {
        setSkinVisibility(false);
     }

        return (
            <div>
                <div className="flex p-10 justify-between">
                    <div >
                        <h1 className="font-montserrat tracking-widest font-bold text-5xl select-none">Admin
                            Dashboard</h1>
                    </div>
                    <h1 className="text-3xl font-montserrat tracking-widest">Welcome back, <span className="font-montserrat font-bold text-neutral-500 select-none hover:text-black hover:bg-[#60D394] transition-all duration-200">{user}</span></h1>
                </div>

                <div className="">
                    <CreateButtons setTexturepackVisibility={setTexturepackVisibility}
                                   setSkinVisibility={setSkinVisibility}/>
                </div>
                <AnimatePresence>
                    {texturepackVisibility &&
                        <TexturepackModal change={handleTexturepackVisibility}/>
                    }

                    {skinVisibility &&
                        <SkinsModal change={handleSkinsVisibility}/>
                    }
            </AnimatePresence>
            </div>
        )
}
