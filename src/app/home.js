
import Nav from "./layout/Nav";
import PortfolioButton from "../app/components/hero/portfoliobutton";
import TayteButton from "../app/components/hero/taytebutton";
import HeroText from "../app/components/hero/herotext";
import {MagnifyingGlassIcon} from "@heroicons/react/24/outline";
import SearchIcon from "../../src/app/layout/SearchIcon";


export default function Home() {


    return(
        <main>
            <HeroText/>
            <PortfolioButton/>
            <Nav/>
            <SearchIcon />

        </main>
    )
}