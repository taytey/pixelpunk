
import Nav from "./layout/Nav";

import TayteButton from "../app/components/hero/taytebutton";
import HeroText from "../app/components/hero/herotext";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import SearchIcon from "../../src/app/layout/SearchIcon";
import Image from "next/image";


export default function Home() {


    return(
        <main className="h-screen w-screen">
            <HeroText className="absolute z-50"/>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Image width={1300} height={1300} src="/pixelpubkhome2.png"/>
            </div>

            <Nav className="z-50"/>
            <SearchIcon />

        </main>
    )
}