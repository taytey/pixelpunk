'use client'

import { TailSpin} from "react-loader-spinner";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return(
        <div className="absolute h-screen w-screen">
            <TailSpin
                visible={true}
                height="150"
                width="150"
                color="#60D394"
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>


)

}