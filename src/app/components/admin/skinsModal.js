import {XMarkIcon} from "@heroicons/react/20/solid";
import { useState, useEffect } from "react";
import ReactSkinview3d from "react-skinview3d"
import { db } from '@/firebase-config'
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
        <div className="absolute flex justify-between bg-black top-40">
            <XMarkIcon className=" text-white" />
            <div>
                <div className="flex justify-center items-center">
                    <h1 className="text-5xl font-montserrat tracking-widest m-10 select-none font-bold">Add a new <span className="hover:text-black transition-all duration-200 hover:bg-neutral-200">Player</span></h1>
                </div>
                <div className="flex flex-col w-screen m-10  items-center justify-center">
                    <div className="flex flex-col gap-10">
                        <input onChange={(event) => setUsername(event.target.value)} className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10" placeholder="Username" />
                        <input onChange={(event) => {setUUID(event.target.value)}} className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest font-extrabold h-20 text-5xl placeholder:text-neutral-700 transition-all duration-500 focus:bg-neutral-900 outline-0 rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10" placeholder="UUID" value={uuid}/>

                        <ReactSkinview3d
                            skinUrl={`https://mc-heads.net/skin/${uuid}`}
                            height="300"
                            width="300"
                        />

                    </div>

                    <button onClick={playerFirebase}
                        className="border-4">Submit</button>
                    <div onClick={() => { change()}}>
                        Close
                    </div>

                </div>
            </div>
        </div>
    )
}

