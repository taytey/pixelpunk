'use client'

import { TailSpin} from "react-loader-spinner";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return(
        <div className="p-40">
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color="#ffffff"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>


)

}