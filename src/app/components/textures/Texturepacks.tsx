'use client'

import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {
    onSnapshot,
    collection,
    query,
    where,
} from "firebase/firestore";
import { db } from "../../../firebase-config"
import TextureModal from "./TextureModal";
import MasonryGrid from "./MasonryGrid";
import {Timestamp} from "firebase/firestore";
import {timestamp} from "yaml/dist/schema/yaml-1.1/timestamp";

export default function Texturepacks() {

    const colletionRef = collection(db, 'texturepacks');

    const [ texturepacks, setTextures] = useState([]);
    const [ visibility, setVisibility] = useState(false);
    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState();
    const [author, setAuthor] = useState();
    const [description, setDescription] = useState();
    const [hovered, setHovered] = useState(null);
    const [ downloads, setDownloads ] = useState(0);
    const [ uploadDate, setUploadDate ] = useState ();
    const [ downloadLink, setDownloadLink ] = useState ();

    useEffect(() => {
        const q = query(
            colletionRef,
            where('thumbnail', '==', 'School1') // does not need index
        );

        const unsub = onSnapshot(colletionRef, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setTextures(items);
        });
        return () => {
            unsub();
        };
    }, []);

    return(
            <div>
                <MasonryGrid uploadDate={uploadDate} setHovered={setHovered} setUploadDate={setUploadDate} hovered={hovered} texturepacks={texturepacks} setVisibility={setVisibility} setAuthor={setAuthor} setDescription={setDescription} setName={setName} setThumbnail={setThumbnail} downloadLink={downloadLink} setDownloadLink={setDownloadLink}/>
                <AnimatePresence>
                    {visibility &&
                        <TextureModal setUploadDate={setUploadDate} setVisibility={setVisibility} uploadDate = {uploadDate} author = {author} name = {name} description = {description} thumbnail = {thumbnail} downloadLink={downloadLink}/>
                    }
                </AnimatePresence>
            </div>
    )
}