import {XMarkIcon} from "@heroicons/react/20/solid";
import { PlusIcon} from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { storage, db } from '@/firebase-config'
import { doc, setDoc } from "firebase/firestore";

export default function TexturepackModal ({ change }) {

    const [imageUpload, setImageUpload] = useState(null);
    const [name, setName] = useState('');
    const [ texturepackURL, setTexturepackURL] = useState('');
    const [ user, setUser] = useState('Tayte');
    
    //adds data via input fields to firestore texturepacks collection
    const addData = async () => {
        await setDoc(doc(db, "texturepacks", `${name}`), {
            name: {name},
            thumbnail: {texturepackURL},
            user: {user}
            //user:
        });
    }

    //uploads file to Firebase storage
    const uploadFile = async () => {

        const imageRef = ref(storage, `pixelpunk/images/${name}/${imageUpload.name}`);

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url)
                setTexturepackURL(url)

            });
        });
    };

    return (
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
                        onChange={(event) => {setImageUpload(event.target.files[0])}}
                    />

                    <button onClick={ () => {
                        uploadFile();
                            addData();
                    }}><PlusIcon className="select-none h-10 text-white hover:bg-neutral-200 transition-all duration-200 hover:text-black"/></button>
                   

                </div>

                <div onClick={() => change()}>
                    Close
                </div>

            </div>
        </div>
    </div>
    )
}