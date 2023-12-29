import {XMarkIcon} from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import ReactSkinview3d from "react-skinview3d"
import { db } from '../../../firebase-config'
import { doc, setDoc } from "firebase/firestore";

export default function SkinsModal({ change }) {

    const [ uuid, setUUID] = useState('');
    const [ skin, setSkin ] = useState('');
    const [ username, setUsername ] = useState(null);

    useEffect(() => {
        fetchData();
    })

    const fetchData = async () => {
            const response = await fetch(`https://playerdb.co/api/player/minecraft/${username}`).then(response => response.json())
            setStates(response)
    }

    const setStates = async (response) => {
        const skin = `https://mc-heads.net/skin/${uuid}`
        setUUID(response.data.player.id)
        setSkin(skin)
    }

    //adds data to player collection in Firestore via input tags
    const playerFirebase = async () => {
        await setDoc(doc(db, "players", `${username}`), {
            username: { username },
            uuid: { uuid },
            skin: { skin },
        });
    }

    return (
        <div className=" border-2 border-neutral-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 backdrop-blur-2xl bg-neutral-950/90 transition-all duration-500 inset-0 z-50 drop-shadow-2xl rounded-2xl">
            <XMarkIcon
                onClick={() => change()}
                className="hover:bg-neutral-800 rounded-3xl h-6 w-6 m-5 opacity-10 hover:opacity-50 text-neutral-300 transition-all duration-500"/>
            <div className="flex items-center m-20">
                    <h1 className="text-5xl font-montserrat tracking-widest m-10 select-none font-bold"><span
                        className="select-none font-light font-montserrat text-3xl tracking-widest">add a new </span>
                         <span
                            className="hover:text-black transition-all duration-200 hover:bg-neutral-200">Skin</span>
                    </h1>

                <div className="flex flex-col w-screen items-center justify-center">
                    <div className="flex flex-col gap-10">
                        <input onChange={(event) => setUsername(event.target.value)}
                               className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"
                               placeholder="Username"/>
                        {/*<input onChange={(event) => {
                            setUUID(event.target.value)
                        }}
                                className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest font-extrabold h-20 text-5xl placeholder:text-neutral-700 transition-all duration-500 focus:bg-neutral-900 outline-0 rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"
                                placeholder="UUID" value={uuid}/>*/}

                        <ReactSkinview3d
                            skinUrl={`https://mc-heads.net/skin/${uuid}`}
                            height="300"
                            width="300"
                        />

                    </div>
                    <button
                        className="hover:bg-stone-800 transition-all duration-500 p-5 font-montserrat rounded-2xl tracking-widest"
                        onClick={playerFirebase}
                        >Submit
                    </button>
                </div>
            </div>
        </div>
    )
}

