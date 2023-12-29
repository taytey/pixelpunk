import {XMarkIcon} from "@heroicons/react/20/solid";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL, getStorage } from "firebase/storage";
import { storage, db } from '../../..//firebase-config'
import {doc, setDoc, serverTimestamp, collection} from "firebase/firestore";
import { v4 as uuidv4 } from 'uuid';
import { motion} from "framer-motion";



export default function TexturepackModal ({ change }) {

    //TODO ability to upload multiple images and add to database

    const [imageUpload, setImageUpload] = useState(null);
    const [name, setName] = useState('');
    const [ thumbnail, setThumbnail] = useState('');
    const [ author, setAuthor] = useState('');
    const [ description, setDescription] = useState('');
    const collectionRef = collection(db, 'texturepacks');

    //adds data via input fields to firestore texturepacks collection
    const texturepackData = {
        name,
        thumbnail,
        description,
        author,
        createdAt: serverTimestamp(),
        id: uuidv4(),
    }


    const addData = async () => {
        const texturepackRef = doc(collectionRef, texturepackData.name);
        await setDoc( texturepackRef, texturepackData)
    }

    //uploads file to Firebase storage
    const uploadFile = async () => {

        const imageRef = ref(storage, `pixelpunk/images/${name}/${imageUpload.name}`);

        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url)
                setThumbnail(url)

            });
        });
    };

    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "easeInOut", duration: 0.2}}
        >
        <div className=" border-2 border-neutral-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 backdrop-blur-2xl bg-neutral-950/90 transition-all duration-500 inset-0 z-50 drop-shadow-2xl rounded-2xl">
            <XMarkIcon
                onClick={() => change()}
                className="hover:bg-neutral-800 rounded-3xl h-6 w-6 m-5 opacity-10 hover:opacity-50 text-neutral-300 transition-all duration-500"/>

        <div>
        <div className="flex items-center m-20">
            <div>
                <h1 className="text-5xl font-montserrat tracking-widest m-10 select-none font-bold"><span className="select-none font-light font-montserrat text-3xl tracking-widest">add a new</span> <span className="hover:text-black transition-all duration-200 hover:bg-neutral-200">Texturepack</span></h1>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col gap-10">
                    <input onChange={(event) => {
                        setName(event.target.value)
                    }}
                           className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"
                           value={name} placeholder="Name"/>
                    <input onChange={(event) => {
                        setAuthor(event.target.value)
                    }}
                           className="bg-black focus:placeholder:text-opacity-0 select-none tracking-widest placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold h-20 text-5xl rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"
                           value={author} placeholder="Author"/>

                    <textarea onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                              className="bg-black focus:placeholder:text-opacity-0 select-none placeholder:text-neutral-700 outline-0 focus:bg-neutral-900 transition-all duration-500 font-extrabold text- rounded-lg focus:ring-0 focus:ring-offset-0 placeholder:font-extralight placeholder:tracking-widest placeholder:pl-10"
                              placeholder="Description" rows={10} cols={50}></textarea>
                    <input
                        className="block w-full text-sm text-neutral-900 border border-neutral-900 rounded-lg cursor-pointer bg-neutral-800 focus:outline-none dark:border-gray-600 dark:placeholder-gray-400"
                        type="file"
                        onChange={(event) => {
                            setImageUpload(event.target.files[0])
                        }}
                    />

                    <button className="hover:bg-stone-800 transition-all duration-500 p-5 font-montserrat rounded-2xl tracking-widest" onClick={() => {
                        uploadFile();
                        addData();
                    }}>Submit
                    </button>


                </div>
            </div>
        </div>
        </div>
        </div>
        </motion.div>
    )
}