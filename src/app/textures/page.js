'use client'

import {ParallaxProvider} from "react-scroll-parallax";
import TexturesHome from "../components/textures/textureshome"
import TextureGrid from "../components/textures/texturegrid"
export default function Page() {
    return (
            <main>
                <div>
                    <ParallaxProvider>
                        <TexturesHome />
                        <TextureGrid />
                    </ParallaxProvider>
                </div>
            </main>

    );
}