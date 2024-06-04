
import Hero from "@/components/HeroComponent";

export default function Event() {
    const jsonURL = "/json/hero.json"
    return (

        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Hero jsonURL={jsonURL} />
        </div>

    );
}