export default function StatsSearch({setSearch, winstreak, search, setWinstreak, setRank, rank, setPlayer}) {

    const apikey = "c083c8e9-b36a-4f52-9273-e11417734db6"

    const fetchUser = async () => {
        const response = await fetch(`https://api.hypixel.net/v2/player?key=${apikey}&name=${search}
        `, {
            method: 'GET',
            headers: {
                'API-Key' : 'c083c8e9-b36a-4f52-9273-e11417734db6',
            }
        }) .then(response => response.json())

        setRank(response.player.newPackageRank)
        console.log(rank)
        setPlayer(response.player.playername)
        console.log(response);
    }
    return (
        <div>
            <div>
                <input className="text-black" onChange={(event) => {
                    setSearch(event.target.value)
                }} placeholder="Search for a user"/>
                <h1 onClick={fetchUser}>Submit</h1>

            </div>
        </div>
    );
}