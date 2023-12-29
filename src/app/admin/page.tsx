'use client'
import { useState} from "react";
import TexturepackModal from "../components/admin/texturepackModal";
import SkinsModal from "../components/admin/skinsModal";
import {supabase} from "../supabase"
import CreateButtons from "../components/admin/CreateButtons";
export default function Admin() {
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
                <CreateButtons setTexturepackVisibility={setTexturepackVisibility} setSkinVisibility={setSkinVisibility}/>

                {texturepackVisibility &&
                    <TexturepackModal change={handleTexturepackVisibility}/>
                }

                {skinVisibility &&
                    <SkinsModal change={handleSkinsVisibility}/>
                }

            </div>
        )
}
