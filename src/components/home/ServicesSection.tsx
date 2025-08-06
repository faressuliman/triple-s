import ServiceCard from "../../components/ui/ServiceCard";
import { services } from "../../data/";

const ServicesSection = () => {
  return (
    <div className="py-16 bg-[#F8FDFF]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#07254B] mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-[#5577A0]">
            We deliver exceptional marine services with unwavering commitment to quality, customization, and punctuality.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
