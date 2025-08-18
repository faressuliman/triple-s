import type { IServices } from "../../interfaces";

const ServiceCard = ({ icon: Icon, title, description, color }: IServices) => {
    const lineColor = 'bg-gradient-to-r from-[#316cb9] to-[#224361]';

    return (
        <div className={`bg-white rounded-2xl md:w-auto w-auto md:h-72 h-auto mx-auto shadow-lg hover:shadow-xl hover:shadow-indigo-300 border border-[#CEF3FF] lg:py-6 md:py-3 py-8 px-8 text-center transition-all duration-400 transform hover:scale-102 hover:-translate-y-3 relative overflow-hidden group hover:cursor-default`}>
            <div className={`mx-auto mb-4 md:h-22 md:w-22 h-20 w-20 rounded-full flex items-center justify-center bg-gradient-to-br from-[#34CD97]/10 to-[#0A3251]/10 transition-all duration-300`}>
                <Icon className={`md:h-12 md:w-12 h-10 w-10 text-[#07254B] ${color}`} />
            </div>
            <h3 className="text-xl font-bold mb-1 text-[#07254B]">{title}</h3>
            <p className=" text-[#7994B5]">{description}</p>

            <div className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-12 rounded-md h-1 ${lineColor} transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></div>
        </div>
    );
};

export default ServiceCard;