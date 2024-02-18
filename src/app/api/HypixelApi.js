const apikey = "c648d474-37f0-43f1-94d0-dddbba199054"

    export const fetchUser = async (search, setUUID, setRank) => {
        const response = await fetch(`https://api.hypixel.net/v2/player?key=${apikey}&name=${search}
        `, {
            method: 'GET',
            headers: {
                'API-Key' : apikey,
            }
        }) .then(response => response.json())
        setUUID(response.player._id)
        setRank(response.player.newPackageRank)
        setPlayer(response.player.playername)
        console.log(response);
    }