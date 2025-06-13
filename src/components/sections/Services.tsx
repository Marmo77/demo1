import { FaCarAlt, FaLaptopCode, FaOilCan, FaSnowflake, FaRoad, FaSprayCan } from 'react-icons/fa';

const services = [
  {
    icon: <FaCarAlt className="text-3xl text-highlight" />,
    title: "Mechanika samochodowa",
    desc: "Kompleksowe naprawy układów mechanicznych"
  },
  {
    icon: <FaLaptopCode className="text-3xl text-highlight" />,
    title: "Diagnostyka komputerowa",
    desc: "Precyzyjne skanowanie błędów ECU"
  },
  {
    icon: <FaOilCan className="text-3xl text-highlight" />,
    title: "Wymiana oleju i filtrów",
    desc: "Profesjonalny serwis płynów eksploatacyjnych"
  },
  {
    icon: <FaSnowflake className="text-3xl text-highlight" />,
    title: "Klimatyzacja",
    desc: "Serwis i napełnianie układów klimatyzacji"
  },
  {
    icon: <FaRoad className="text-3xl text-highlight" />,
    title: "Wulkanizacja",
    desc: "Wymiana i naprawa opon oraz felg"
  },
  {
    icon: <FaSprayCan className="text-3xl text-highlight" />,
    title: "Blacharstwo/Lakiernictwo",
    desc: "Renowacja karoserii najwyższej jakości"
  }
];

export const Services = () => {
  return (
    <section className="py-16 bg-surface">
      <div className="max-w-site mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nasze Usługi</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-primary/40 p-6 rounded-xl border border-border hover:bg-primary hover:border-highlight transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-light mb-4">{service.desc}</p>
                <button className="text-highlight font-medium hover:underline">
                  Więcej informacji →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-highlight hover:bg-highlight/90 text-primary font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Zobacz wszystkie usługi
          </button>
        </div>
      </div>
    </section>
  );
};
export default Services;