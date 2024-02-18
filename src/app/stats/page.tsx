'use client'

import StatsSearch from "../components/stats/search";
import {useState} from "react";
import PlayerName from "../components/stats/playername";
import Rank from "../components/stats/rank";
import SkinViewer from "../components/stats/skinviewer";

export default function Stats() {

    const [search, setSearch ] = useState('');
    const [ winstreak, setWinstreak ] = useState();
    const [rank, setRank ] = useState('');
    const [player, setPlayer ] = useState('');
    const [experience, setExperience ] = useState();
    const [uuid, setUUID ] = useState();
    const [bedsBroken, setBedsBroken] = useState();


    return(
        <>

            <div className="grid left-0 pr-60 bg-neutral-950/50 rounded-lg absolute h-full border-[#60d394] border-opacity-50 border-dashed border-l-0 border-t-0 border-b-0">
                <div className="inline-flex mt-2">
                    <div className="ml-2">
                        <PlayerName player={player}/>
                    </div>
                    <div className="absolute right-4 mt-2">
                        <Rank rank={rank}/>
                    </div>
                    <div className="absolute right-4 mt-2">
                        How many beds has this player broke? {bedsBroken}
                    </div>
                </div>

                {/*<SkinViewer player={uuid}/>*/}
            </div>
            <div className="absolute right-0">
                <StatsSearch rank={rank} setRank={setRank} setWinstreak={setWinstreak} setPlayer={setPlayer}
                             setSearch={setSearch} winstreak={winstreak} search={search} uuid={uuid} setUUID={setUUID} bedsBroken={bedsBroken} setBedsBroken={setBedsBroken} />
            </div>


        </>
    )
}