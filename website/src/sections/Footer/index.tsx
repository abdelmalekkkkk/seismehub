const Footer = () => {
    return (
        <div className="w-full">
            <div className="w-full py-20 px-20 bg-black flex flex-col justify-center items-center ">
                <div className="w-[700px]">
                <h1 className="text-3xl text-white font-medium text-center">
                    Avis de non-responsabilité
                </h1>
                <p className="text-gray-400 text-center my-4">
                    Les informations contenues sur ce site web ont été
                    recueillies auprès de plusieurs contributeurs et
                    volontaires. Nous nous efforçons de fournir des données
                    précises et utiles, cependant, nous ne pouvons garantir
                    l'exactitude, l'exhaustivité ou la fiabilité de ces
                    informations.
                </p>
                <p className="text-gray-400 text-center my-4">
                    En utilisant ce site web, vous acceptez que les informations
                    fournies sont destinées à titre informatif uniquement. Nous
                    déclinons toute responsabilité quant à l'exactitude ou à
                    l'adéquation des données affichées pour un usage spécifique.
                    Vous êtes encouragé à vérifier toute information critique de
                    manière indépendante.
                </p>
                <p className="text-gray-400 text-center my-4">
                    Veuillez noter que les informations sur les catastrophes
                    naturelles et les situations d'urgence peuvent évoluer
                    rapidement. Il est important de suivre les directives des
                    autorités locales et des organismes officiels en cas
                    d'urgence.
                </p>
                <p className="text-gray-400 text-center my-4">
                    En utilisant ce site web, vous acceptez ces termes et
                    conditions de non-responsabilité. Si vous ne les acceptez
                    pas, veuillez ne pas utiliser ce site.
                </p>
                </div>
                
            </div>
        </div>
    );
};

export default Footer;
