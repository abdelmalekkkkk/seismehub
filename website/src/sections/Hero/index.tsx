import Background from "../../assets/hero.webp";

const Hero = () => {
    return (
        <div
            className=" px-4 py-20 relative before:h-full before:w-full before:bg-black before:absolute before:opacity-40 before:z-0 before:top-0 before:left-0"
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundPosition: "0px -281.44px",
                backgroundAttachment: "fixed",
                backgroundColor: "transparent",
                width: "100%",
            }}
        >
            <div className="flex flex-col justify-center items-center relative tracking-wide">
                <h1 className="text-5xl text-white font-bold">Séisme de Marrakech</h1>
                <p className="text-3xl text-white font-medium mt-5">
                Nous connectons ceux qui ont besoin d'aide avec ceux qui peuvent aider
                </p>
                <p className="text-4xl text-white mt-10">
                Mais nous ne pouvons pas y arriver seuls !

                </p>
            </div>
        </div>
    );
};

export default Hero;
