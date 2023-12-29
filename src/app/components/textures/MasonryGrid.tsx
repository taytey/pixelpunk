import {motion} from "framer-motion";

export default function MasonryGrid ({setHovered, hovered, texturepacks, setVisibility, setName, setThumbnail, setAuthor, setDescription, }) {
    return (

        <div className="masonry sm:masonry-sm md:masonry-md p-10">
            {texturepacks.map((texturepacks) => (
                <div key={texturepacks.id} >
                    <button onMouseEnter={() =>  setHovered(texturepacks.id)} onMouseLeave={() => {setHovered(null)}} onClick={() => { setVisibility(true), setName(texturepacks.name), setThumbnail(texturepacks.thumbnail), setAuthor(texturepacks.author), setDescription(texturepacks.description) }}>
                        <motion.div
                            initial={{ opacity: 0}}
                            animate={{opacity: 100}}
                            transition={{ ease: "easeOut", duration: 1 }}

                        >
                            <div className="flex justify-center items-center">

                                { hovered===texturepacks.id &&
                                    <motion.div className="text-neutral-300 absolute text-3xl z-50 font-extralight font-montserrat tracking-widest"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 100 }}
                                                transition={{ ease: "easeOut", duration: 1}}
                                    >
                                        {texturepacks.name}
                                    </motion.div>
                                }
                                <div className="grid gap-4">
                                    <img key={texturepacks.id}
                                         className="p-2 hover:scale-105 hover:rounded-md opacity-100 hover:opacity-10 rounded-3xl hover:border-2 hover:border-neutral-200 border-neutral-700 transition-all duration-500"
                                         src={texturepacks.thumbnail} alt={texturepacks.name}/>

                                </div>
                            </div>
                        </motion.div>
                    </button>
                </div>
            ))}
        </div>
    )}