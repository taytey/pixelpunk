import ReactSkinview3d from "react-skinview3d"
import { getDoc, doc, collection } from "firebase/firestore";
import { db } from '../../firebase-config'

export default function SkinsPage() {

    const fetchSkins = async () => {
        await getDoc(collection(db, "players"))
    }

    return(
        <div className="p-40">

            <ReactSkinview3d
                skinUrl="https://mc-heads.net/skin/c5ef3347-4593-4f39-8bb1-2eaa40dd986e"
                height="500"
                width="500"
            />

        </div>
    )
}