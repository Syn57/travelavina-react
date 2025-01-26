import { MiceCardDomain } from "../../domain/model/mice/MiceCardDomain";
import { useNavigate } from "react-router";

const MiceCardItem = ({ card, className="" } : {card: MiceCardDomain, className: string}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(card.route); // Navigate to the given path
    };
    return (
        <div className={`rounded-xl overflow-hidden shadow-lg relative ${className} flex-row justify-center items-center h-[550px]`}>
            <img
                src={card.image}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
            <div className="absolute bottom-0 p-6">
                <h2 className="text-white text-3xl font-alfaslab">{card.title}</h2>
                <p className="text-gray-300 mt-2 h-16 font-alice text-lg">{card.subtitle}</p>
                <button className="mt-4 px-4 py-2 bg-ternary text-white hover:bg-blue-400 rounded-3xl shadow font-alice" onClick={handleClick}>
                    {card.btnText}
                </button>
            </div>
        </div>
    );
};

export default MiceCardItem;
