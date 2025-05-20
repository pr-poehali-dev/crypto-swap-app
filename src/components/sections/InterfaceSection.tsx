
const InterfaceSection = () => {
  return (
    <section id="interface" className="container mx-auto py-20">
      <h2 className="text-3xl font-bold mb-4 text-center">
        Интуитивно понятный <span className="text-[#F97316]">интерфейс</span>
      </h2>
      <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
        Наше приложение разработано с учетом лучших практик UX/UI дизайна, чтобы сделать обмен криптовалюты максимально простым.
      </p>
      
      <div className="relative mt-20">
        <img 
          src="https://images.unsplash.com/photo-1640340434863-c5e919c50037?ixlib=rb-4.0.3"
          alt="CryptoSwap Interface" 
          className="rounded-xl shadow-2xl mx-auto"
          style={{ width: '80%', height: 'auto' }}
        />
        
        <div className="absolute top-1/2 left-20 transform -translate-y-1/2 bg-[#1A1F2C]/90 p-6 rounded-xl border border-[#F97316]/20 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-[#F97316] mb-3">Быстрый обмен</h3>
          <p className="text-gray-300">Всего в 3 клика меняйте BTC на USDT без ожидания и комиссий</p>
        </div>
        
        <div className="absolute top-1/4 right-20 transform -translate-y-1/2 bg-[#1A1F2C]/90 p-6 rounded-xl border border-[#F97316]/20 backdrop-blur-sm">
          <h3 className="text-xl font-bold text-[#F97316] mb-3">Аналитика в реальном времени</h3>
          <p className="text-gray-300">Актуальные курсы и тренды прямо в приложении</p>
        </div>
      </div>
    </section>
  );
};

export default InterfaceSection;
