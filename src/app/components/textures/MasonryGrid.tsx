import {motion} from "framer-motion";
import Image from 'next/image'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {Timestamp} from "firebase/firestore";

export default function MasonryGrid ({setHovered, hovered, texturepacks, setVisibility, setName, setThumbnail, setAuthor, setDescription, setUploadDate, uploadDate}) {

    const convertTimestamp = (timestamp) => {

        let dateInMillis = timestamp.toMillis();
        let date = new Date(dateInMillis);
        let myDate = date.toLocaleDateString();
        let myTime = date.toLocaleTimeString();
        myDate = myDate.replaceAll('/', '-');
        setUploadDate(myDate);
    }

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
                    columnsCountBreakPoints={{ 200: 2, 100: 3, 600: 4, 400: 5 }}
                >
                    <Masonry columnsCount={3} gutter="10px">
            {texturepacks.map((texturepack) => (
                <motion.div
                    whileHover={{scale: 1.03}}
                    whileTap={{scale: 0.8}}
                    transition={{ease: "easeOut", duration: 0.3}}
                >
                <div key={texturepack.id}>
                    <button onMouseEnter={() =>  setHovered(texturepack.id)} onMouseLeave={() => {setHovered(null)}} onClick={() => { setVisibility(true), setName(texturepack.name), setThumbnail(texturepack.thumbnail), setAuthor(texturepack.author), setDescription(texturepack.description), convertTimestamp(texturepack.createdAt)}}>
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 100}}
                            transition={{ease: "easeOut", duration: 1}}
                        >
                            <div className="flex justify-center items-center">
                                <motion.div
                                    className="text-stone-300 z-0 absolute text-3xl font-medium font-pixel2 tracking-widest"
                                    initial={{opacity: 0}}
                                    animate={{opacity: 100}}
                                    transition={{ease: "easeOut", duration: 1}}
                                >
                                    {hovered === texturepack.id &&
                                        <div>

                                        {texturepack.name}
                                        </div>
                                    }
                                </motion.div>

                                    <Image
                                        width={0}
                                        height={0}
                                        sizes="75vw"
                                        layout="responsive"
                                        className="brightness-75 p-2 hover:rounded-md opacity-100 hover:border-opacity-100 hover:opacity-20 border-2  border-dashed rounded-3xl hover:border-neutral-200 border-neutral-700 transition-all duration-500"
                                        key={texturepack.id}
                                        src={texturepack.thumbnail} alt={texturepack.name}/>
                            </div>

                        </motion.div>
                    </button>
                </div>
                </motion.div>
            ))}
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
        </div>
    )
}