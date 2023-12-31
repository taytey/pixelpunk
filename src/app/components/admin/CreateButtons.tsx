export default function CreateButtons ({setTexturepackVisibility, setSkinVisibility}) {
    return (
        <div>
            <div className="pt-20 pl-20">
                <h1 className="font-montserrat font-light tracking-widest text-3xl">Add content</h1>
            </div>
            <div className="absolute grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-10 m-20">
                <div onClick={() => {
                    setTexturepackVisibility(true)
                }}
                     className=" hover:bg-[#60D394] hover:border-2 border-black hover:text-black bg-neutral-400 h-96 w-96 flex items-center justify-center opacity-75 rounded-lg hover:scale-110 transition-all duration-500">
                    <h1 className="select-none font-montserrat tracking-widest font-bold text-3xl">Texturepacks</h1>
                </div>
                <div onClick={() => {
                    setSkinVisibility(true)
                }}
                     className="hover:bg-[#60D394] hover:border-2 border-black hover:text-black bg-neutral-400 h-96 w-96 flex items-center justify-center opacity-75 rounded-lg hover:scale-110 transition-all duration-500">
                    <h1 className="select-none font-montserrat tracking-widest font-bold text-3xl">Players</h1>
                </div>
            </div>
        </div>
    )
}