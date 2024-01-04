import ReactSkinview3d from "react-skinview3d";

export default function SkinViewer(uuid) {
    return(
        <div>
            <ReactSkinview3d
                skinUrl={`https://mc-heads.net/skin/${uuid}`}
                height="500"
                width="500"
            />
        </div>
    )
}