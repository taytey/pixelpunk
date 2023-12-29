import {motion} from "framer-motion";
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export default function MasonryGrid ({setHovered, hovered, texturepacks, setVisibility, setName, setThumbnail, setAuthor, setDescription, }) {
    const columns = {
        xs: 2,
        sm: 2,
        md: 3,
        lg: 3,
        xl: 4,
        xxl: 5,
    };
    return (
        <div>
        <div>
            <div className="m-10">
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 100: 2, 500: 3, 700: 4, 300: 5 }}
                >
<Masonry columnsCount={3} gutter="10px">
            {texturepacks.map((texturepacks) => (

                <div key={texturepacks.id}>
                    <button onMouseEnter={() =>  setHovered(texturepacks.id)} onMouseLeave={() => {setHovered(null)}} onClick={() => { setVisibility(true), setName(texturepacks.name), setThumbnail(texturepacks.thumbnail), setAuthor(texturepacks.author), setDescription(texturepacks.description) }}>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 100}}
                            transition={{ease: "easeOut", duration: 1}}

                        >
                            <div className="flex justify-center items-center">

                                {hovered === texturepacks.id &&
                                    <motion.div
                                        className="text-neutral-300 absolute text-3xl z-50 font-extralight font-montserrat tracking-widest"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 100}}
                                        transition={{ease: "easeOut", duration: 1}}
                                    >
                                        {texturepacks.name}
                                    </motion.div>
                                }

                                <Image
                                    width={0}
                                    height={0}
                                    layout="responsive"
                                    className="p-2 hover:scale-105 hover:rounded-md opacity-100 hover:opacity-10 rounded-3xl hover:border-2 hover:border-neutral-200 border-neutral-700 transition-all duration-500"
                                    key={texturepacks.id}
                                    src={texturepacks.thumbnail} alt={texturepacks.name}/>


                            </div>

                        </motion.div>
                    </button>
                </div>
            ))}
</Masonry>
                </ResponsiveMasonry>
            </div>
        </div>


        </div>
    )}