
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CTASection = () => {
  return (
    <section className="container mx-auto py-16 text-center">
      <div className="bg-[#2A3349] rounded-2xl p-12 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#F97316]/10 rounded-full"></div>
        <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-[#F97316]/10 rounded-full"></div>
        
        <h2 className="text-3xl font-bold mb-6 relative z-10">
          Начните обменивать <span className="text-[#F97316]">без комиссии</span> уже сегодня
        </h2>
        <p className="text-gray-300 mb-8 max-w-3xl mx-auto relative z-10">
          Присоединяйтесь к тысячам пользователей, которые уже экономят на комиссиях при обмене криптовалюты
        </p>
        
        <div className="flex gap-4 justify-center relative z-10">
          <Button className="bg-[#F97316] hover:bg-[#FB923C] text-lg px-8 py-6">
            <Icon name="Download" className="mr-2" />
            Скачать для Windows
          </Button>
          <Button className="bg-transparent border border-[#F97316] hover:bg-[#F97316]/10 text-lg px-8 py-6">
            <Icon name="Apple" className="mr-2" />
            Скачать для Mac
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
