
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="container mx-auto py-16 md:py-24 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-10 md:mb-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Обменивайте <span className="text-[#F97316]">BTC на USDT</span> без комиссии
        </h1>
        <p className="text-gray-300 text-xl mb-8">
          Первое в мире десктопное приложение с нулевой комиссией для обмена криптовалюты. Доступно для Windows и Mac.
        </p>
        <div className="flex gap-4">
          <Button className="bg-[#F97316] hover:bg-[#FB923C] text-lg px-8 py-6">
            Скачать для Windows
          </Button>
          <Button className="bg-transparent border border-[#F97316] hover:bg-[#F97316]/10 text-lg px-8 py-6">
            Скачать для Mac
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="relative">
          <div className="bg-[#F97316]/20 w-80 h-80 rounded-full absolute -top-10 -right-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1644195658583-c0853ed9b0a3?ixlib=rb-4.0.3" 
            alt="CryptoSwap Dashboard" 
            className="rounded-xl shadow-2xl relative z-10"
            style={{ width: '500px', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
