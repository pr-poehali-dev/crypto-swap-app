
const partners = [
  { name: "Coinbase" },
  { name: "Binance" },
  { name: "Tether" },
  { name: "Kraken" }
];

const PartnersSection = () => {
  return (
    <section id="partners" className="bg-[#242B3D] py-16">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">
          Нам <span className="text-[#F97316]">доверяют</span>
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Мы сотрудничаем с ведущими компаниями в сфере блокчейна и финансов
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {partners.map((partner, index) => (
            <div key={index} className="flex justify-center">
              <div className="h-16 w-32 bg-white/10 rounded-lg flex items-center justify-center">
                <span className="text-xl font-bold text-white">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
