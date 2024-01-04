import {Suspense} from "react";
import Loading from "../textures/loading";
import Nav from "../layout/Nav";
import TayteButton from "../../app/components/hero/taytebutton";
import PortfolioButton from "../../app/components/hero/portfoliobutton";
import SearchIcon from "../layout/SearchIcon";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";


export default function TexturesLayout({
        children, // will be a page or nested layout
}) {
    return (

            <section>
                <Nav />
                <Suspense fallback={<Loading/>}>
                    {children}
                </Suspense>
                <SearchIcon />
                <PortfolioButton />
            </section>


    )
}