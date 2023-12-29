
import Nav from "./layout/Nav";
import PortfolioButton from "../app/components/hero/portfoliobutton";
import TayteButton from "../app/components/hero/taytebutton";
import HeroText from "../app/components/hero/herotext";

export default function Home() {

    return(
        <main>
            <HeroText/>
            <PortfolioButton/>
            <TayteButton/>
            <Nav/>
        </main>
    )
}