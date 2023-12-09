'use client'
import { PlusIcon} from "@heroicons/react/24/outline";
import {useEffect, useState} from "react";
import {XMarkIcon} from "@heroicons/react/20/solid";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { storage, db } from '@/firebase-config'
import {doc, getFirestore, setDoc, addDoc, collection} from "firebase/firestore";


export default function Admin() {

    const [visibility, setVisibility ] = useState(false);
    const [name, setName] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');
    const [ texturepackURL, setTexturepackURL] = useState('');
    const [ user, setUser] = useState('Tayte')

    const addData = async () => {
        await setDoc(doc(db, "texturepacks", `${name}`), {
            name: {name},
            thumbnail: {texturepackURL},
            user: {user}
            //user:
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

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleImageChange = (event) => {
        setImageUpload(event.target.files[0])
    }

    return(
        <div>
            <div className="pt-40 pl-20">
                <h1 className="font-montserrat tracking-widest font-bold text-5xl select-none">Admin Dashboard</h1>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-4 m-20" onClick={() => {setVisibility(true)}}>
                <div className="hover:opacity-50 hover:border-4 bg-neutral-400 h-96 w-96 flex items-center justify-center opacity-75 rounded-lg hover:scale-110 transition-all duration-500">
                    <PlusIcon className="h-20 text-white"/>
                </div>
                <div>

                </div>
            </div>
            { visibility &&
                <div className="absolute flex justify-between bg-neutral-950/50 h-screen w-screen">
                    <XMarkIcon className=" text-white"/>
                    <div>
                        <div className="flex justify-center items-center">
                            <h1 className="text-5xl font-montserrat tracking-widest m-10 select-none font-bold">Add a new <span className="hover:text-black transition-all duration-200 hover:bg-neutral-200">Texturepack</span></h1>
                        </div>
                        <div className="flex w-screen items-center justify-center">
                            <div className="flex gap-4">
                                <input onChange={handleNameChange} className="bg-neutral-800 select-none tracking-widest font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10" value={name}  placeholder="Name"/>
                                <input className="bg-neutral-800 select-none tracking-widest font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10" placeholder="Thumbnail"/>
                                <input
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

                        </div>
                    </div>
                </div>
            }

        </div>
    )
}