'use client'
import { PlusIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {XMarkIcon} from "@heroicons/react/20/solid";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { storage, db } from '@/firebase-config'
import {doc, getFirestore, setDoc, addDoc, collection} from "firebase/firestore";
import ReactSkinview3d from "react-skinview3d"



export default function Admin() {

    const [texturepackVisibility, setTexturepackVisibility ] = useState(false);
    const [skinVisibility, setSkinVisibility] = useState(false);
    const [name, setName] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [ texturepackURL, setTexturepackURL] = useState('');
    const [ user, setUser] = useState('Tayte');
    const [ username, setUsername ] = useState(null);
    const [ uuid, setUUID] = useState("");
    const [ data, setData ] = useState();
    const [ skin, setSkin ] = useState("");

    const addData = async () => {
        await setDoc(doc(db, "texturepacks", `${name}`), {
            name: {name},
            thumbnail: {texturepackURL},
            user: {user}
            //user:
        });
    }

    const playerFirebase = async () => {

        await setDoc(doc(db, "players", "username"), {
            skin: {skin},
            username: {username},
            uuid: {uuid}
        });
    }

    const uploadFile = async () => {
        if (!imageUpload) {
            setUploadStatus("Please try again.")
        }
        const imageRef = ref(storage, `pixelpunk/images/${name}/${imageUpload.name}`);

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url)
                setTexturepackURL(url)
                setUploadStatus("Image uploaded");
            });
        });
    };
    
    const handleImageChange = (event) => {
        setImageUpload(event.target.files[0])
    }

    const handleUsernameChange = async (event) => {
        const response = await fetch(`https://playerdb.co/api/player/minecraft/${username}`).then(response => response.json())
        setUUID(response.data.player.id)
        setSkin(`https://mc-heads.net/skin/${uuid}`)
        console.log(skin);
    }

    return(
        <div>
            <div className="pt-40 pl-20">
                <h1 className="font-montserrat tracking-widest font-bold text-5xl select-none">Admin Dashboard</h1>
            </div>
            <div className="pt-20 pl-20">
                <h1 className="font-montserrat font-light tracking-widest text-3xl">Add content</h1>
            </div>
            <div className="absolute grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-10 m-20" >
                <div onClick={() => {setTexturepackVisibility(true)}} className="hover:opacity-50 hover:border-4 bg-neutral-400 h-96 w-96 flex items-center justify-center opacity-75 rounded-lg hover:scale-110 transition-all duration-500">
                    <h1 className="select-none font-montserrat tracking-widest font-bold text-3xl">Texturepacks</h1>
                </div>
                <div onClick={() => {setSkinVisibility(true)}} className="hover:opacity-50 hover:border-4 bg-neutral-400 h-96 w-96 flex items-center justify-center opacity-75 rounded-lg hover:scale-110 transition-all duration-500">
                    <h1 className="select-none font-montserrat tracking-widest font-bold text-3xl">Players</h1>
                </div>
            </div>
            { texturepackVisibility &&
                <div className="absolute flex justify-between bg-black top-40">
                    <XMarkIcon className=" text-white"/>
                    <div>
                        <div className="flex justify-center items-center">
                            <h1 className="text-5xl font-montserrat tracking-widest m-10 select-none font-bold">Add a new <span className="hover:text-black transition-all duration-200 hover:bg-neutral-200">Texturepack</span></h1>
                        </div>
                        <div className="flex flex-col w-screen m-10  items-center justify-center">
                            <div className="flex flex-col gap-10">
                                <input onChange={(event) => {setName(event.target.value)}} className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10" value={name}  placeholder="Name"/>
                                <input className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest font-extrabold h-20 text-5xl placeholder:text-neutral-700 transition-all duration-500 focus:bg-neutral-900 outline-0 rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10" placeholder="Thumbnail"/>
                                <input className="block w-full text-sm text-neutral-900 border border-neutral-900 rounded-lg cursor-pointer bg-neutral-800 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                                    type="file"
                                    onChange={handleImageChange}
                                />

                                <button onClick={ () => {
                                    uploadFile();
                                        addData();
                                }}><PlusIcon className="select-none h-10 text-white hover:bg-neutral-200 transition-all duration-200 hover:text-black"/></button>
                                {!imageUpload &&
                                    <h1 className="text-red-600">{uploadStatus}</h1>
                                }

                            </div>

                            <div onClick={() => {setTexturepackVisibility(false)}}>
                                Close
                            </div>

                        </div>
                    </div>
                </div>
            }

            { skinVisibility &&
                <div className="absolute flex justify-between bg-black top-40">
                    <XMarkIcon className=" text-white"/>
                    <div>
                        <div className="flex justify-center items-center">
                            <h1 className="text-5xl font-montserrat tracking-widest m-10 select-none font-bold">Add a new <span className="hover:text-black transition-all duration-200 hover:bg-neutral-200">Player</span></h1>
                        </div>
                        <div className="flex flex-col w-screen m-10  items-center justify-center">
                            <div className="flex flex-col gap-10">
                                <input onChange={(event) => {setUsername(event.target.value)}} className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"  placeholder="Username"/>
                                <input className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest font-extrabold h-20 text-5xl placeholder:text-neutral-700 transition-all duration-500 focus:bg-neutral-900 outline-0 rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10" placeholder="UUID" value={uuid}/>

                                <ReactSkinview3d
                                    skinUrl={`https://mc-heads.net/skin/${uuid}`}
                                    height="300"
                                    width="300"
                                />

                            </div>
                            <button onClick={handleUsernameChange}>Convert username to id</button>
                            <button onClick={playerFirebase}
                             className="border-4">Submit</button>
                            <div onClick={() => {setSkinVisibility(false); setUUID(null)} }>
                                Close
                            </div>

                        </div>
                    </div>
                </div>
            }

        </div>
    )
}