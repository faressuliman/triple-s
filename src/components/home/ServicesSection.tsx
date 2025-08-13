import { motion } from "framer-motion";
import ServiceCard from "../../components/ui/ServiceCard";
import { services } from "../../data/";

const ServicesSection = () => {

  const renderServices = services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      viewport={{ once: true }}
    >
      <ServiceCard
        icon={service.icon}
        title={service.title}
        description={service.description}
        color={service.color}
      />
    </motion.div>
  ))

  return (
    <div className="py-16 bg-[#F8FDFF] px-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="md:text-3xl text-2xl font-bold text-[#07254B] mb-4">
            Why Choose Us
          </h2>
          <p className="md:text-lg text-md max-w-2xl mx-auto text-[#5577A0]">
            We deliver exceptional marine services with unwavering commitment to quality, customization, and punctuality.
          </p>
        </motion.div>

        <motion.div
          className="grid gap-6 md:grid-cols-1 lg:grid-cols-3 grid-cols-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {renderServices}
        </motion.div>
      </div>
    </div>
  );
};

export default ServicesSection;
