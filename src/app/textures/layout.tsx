import {Suspense} from "react";
import Loading from "../textures/loading";
import Nav from "../layout/Nav";

export default function TexturesLayout({
        children, // will be a page or nested layout
}) {
    return (

            <section>
                <Nav />
                <Suspense fallback={<Loading/>}>
                    {children}
                </Suspense>
            </section>


    )
}