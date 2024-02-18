import {XMarkIcon} from "@heroicons/react/20/solid";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {db} from "../../firebase-config";
import algoliasearch from 'algoliasearch/lite';
import {Hits, InstantSearch, SearchBox, useHits} from 'react-instantsearch';
import SearchResults from "../layout/SearchResults";



export default function WebsiteSearch({open, setOpen, props}) {

    const [clicked, setClicked ] = useState(false);
    const [searchResults, setSearchResults ] = useState([]);
    const [input, setInput ] = useState('try this')


    const searchClient = algoliasearch('ZBNXSKFARC', '8628308e9cfcc32b1181e4bc5b7e2325');
    const colletionRef = collection(db, 'texturepacks');




    useEffect(() => {
        const q = query(colletionRef, where(input, '==', true));

        const unsub = onSnapshot(colletionRef, (querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            });
            setSearchResults(items);
        });
        return () => {
            unsub();
        };

    }, []);

    return (
<AnimatePresence>
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{opacity: 0}}
            transition={{ease: "easeOut", duration: 0.2}}
        >

            <div
                className="z-50 overflow-scroll shadow-2xl border-neutral-700 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/6 backdrop-blur-2xl bg-neutral-900/95 transition-all duration-500 inset-0 drop-shadow-2xl rounded-2xl">
                <InstantSearch searchClient={searchClient} indexName="pixelpunk">
                    <SearchBox
                        searchAsYouType={true}
                        placeholder="Search for anything..."
                        classNames={{
                            root: '',
                            form: 'text-white font-pixel2',
                            input: 'absolute m-auto right-96 left-96 top-0 mt-20 rounded-lg text-neutral-400 p-8 absolute h-10 border-2 focus:bg-neutral-800 focus:border-neutral-500 font-pixel2 border-dashed bg-transparent border-opacity-10 border-white focus:placeholder-transparent placeholder:text-neutral-700 focus:ring-0 focus:outline-0 transition-all duration-500',
                        }}
                    />

                <div className="flex flex-row justify-end right-0 top-0 absolute">
                    <motion.div
                        whileHover={{scale: 1.2}}
                        whileTap={{scale: 0.8}}
                    >
                        <div onClick={() => {
                            setOpen(false), console.log("Trying to close")
                        }}>
                            <XMarkIcon
                                className="hover:bg-neutral-800 hover:text-[#60D394] rounded-3xlm h-6 w-6 m-8 opacity-10 hover:opacity-100 text-neutral-300 transition-all duration-500"/>
                        </div>
                    </motion.div>

                </div>
                    <div className=" h-screen mt-40">
                        <SearchResults/>
                    </div>

                </InstantSearch>
            </div>
        </motion.div>
</AnimatePresence>
    );
}