
import Icon from "@/components/ui/icon";
import { FooterColumn } from "../shared/FooterColumn";

const Footer = () => {
  return (
    <footer className="bg-[#191E2B] py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between mb-8">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#F97316] text-xl font-bold">CryptoSwap</span>
              <div className="bg-[#F97316] rounded-full h-2 w-2"></div>
            </div>
            <p className="text-gray-400 max-w-sm">
              Революционное приложение для обмена криптовалюты без комиссии. Доступно для Windows и Mac.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <FooterColumn 
              title="Продукт" 
              links={[
                { href: "#features", label: "Возможности" },
                { href: "#interface", label: "Интерфейс" },
                { href: "#roadmap", label: "RoadMap" }
              ]} 
            />
            
            <FooterColumn 
              title="Компания" 
              links={[
                { href: "#", label: "О нас" },
                { href: "#partners", label: "Партнеры" },
                { href: "#testimonials", label: "Отзывы" }
              ]} 
            />
            
            <FooterColumn 
              title="Связаться" 
              links={[
                { href: "#", label: "Поддержка" },
                { href: "#", label: "Twitter" },
                { href: "#", label: "Discord" }
              ]} 
            />
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500">© 2025 CryptoSwap. Все права защищены.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-[#F97316]">
              <Icon name="Twitter" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F97316]">
              <Icon name="Github" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#F97316]">
              <Icon name="Linkedin" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
