import { LuLoader } from "react-icons/lu";

const Preloader = () => {
    return (
        <section className="bg-black/90 z-50 w-full h-screen flex items-center justify-center">
            <div className="text-6xl text-bronze animate-spin">
                <LuLoader />
            </div>

        </section>
    )
}

export default Preloader;