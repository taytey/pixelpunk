'use client'

import TextureGrid from "@/app/components/textures/texturegrid";
import TexturesHome from "@/app/components/textures/textureshome";
import {ParallaxProvider} from "react-scroll-parallax";

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