export default function StatsSearch({setSearch, winstreak, search, setWinstreak, setRank, rank, setPlayer, uuid, setUUID, setBedsBroken, bedsBroken}) {

    const apikey = "256f8bdb-931d-41e5-9fea-6b3b5dc69e00"

    const fetchUser = async () => {
        const response = await fetch(`https://api.hypixel.net/v2/player?key=${apikey}&name=${search}
        `, {
            method: 'GET',
            headers: {
                'API-Key' : apikey,
            }
        }) .then(response => response.json())
        setUUID(response.player_id)
        setRank(response.player.newPackageRank)
        setPlayer(response.player.playername)
        setBedsBroken(response.player.stats.Bedwars.beds_broken_bedwars)
        console.log(response);
    }
    return (
        <div>
            <div>
                <input className="text-neutral-400 focus:bg-black focus:border-neutral-500 font-pixel2 p-2 border-2 border-dashed bg-transparent mr-2 border-opacity-10 border-white focus:placeholder-transparent focus:ring-0 focus:outline-0 transition-all duration-500" onChange={(event) => {
                    setSearch(event.target.value)
                }} placeholder="Search for a user"/>
                <button
                    onClick={fetchUser}
                    className="focus:outline-0 outline-none select-none relative inline-flex items-center justify-center overflow-hidden text-sm text-gray-900 rounded-lg group hover:text-white dark:text-white focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800">
                                                    <span
                                                        className="font-pixel2 outline-0 focus:outline-none border-2 border-dashed border-white border-opacity-10 text-md tracking-widest duration-300 relative px-10 py-3 transition-all ease-in hover:bg-[#60d394] hover:text-black rounded-md text-neutral-500">
                                                    SUBMIT
                                                    </span>
                </button>

            </div>
        </div>
    );
}