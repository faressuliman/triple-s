import type { IServices } from "../../interfaces";

const ServiceCard = ({ icon: Icon, title, description, color }: IServices) => {
    const lineColor = 'bg-gradient-to-r from-[#224361] to-[#009dff]';
    
    return (
        <div className={`bg-white rounded-lg h-80 md:w-auto w-auto md:h-92 mx-auto shadow-md hover:shadow-indigo-200 border border-[#CEF3FF] p-8 text-center transition-all duration-400 transform hover:scale-102 hover:-translate-y-3 relative overflow-hidden group hover:cursor-default`}>
            <div className={`mx-auto mb-6 h-22 w-22 rounded-full flex items-center justify-center bg-[#CEF3FF] transition-all duration-300`}>
                <Icon className={`h-12 w-12 text-gray-700 ${color}`} />
            </div>
            <h3 className="text-xl font-bold mb-5 text-[#07254B]">{title}</h3>
            <p className=" text-[#7994B5]">{description}</p>

            <div className={`absolute bottom-5 left-1/2 -translate-x-1/2 w-16 h-1 ${lineColor} transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100`}></div>
        </div>
    );
};

export default ServiceCard;